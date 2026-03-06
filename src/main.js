import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

const MODULE_NAME = 'st-datetime-tracker';

// 1. Defensively ensure the ST settings object exists before we touch it
if (!window.extension_settings) {
    window.extension_settings = {};
}

// 2. Safely mock ST prompt constants just in case they aren't on window
const extension_prompt_types = window.extension_prompt_types || { NONE: -1, IN_PROMPT: 0, INCHAT: 1, BEFORE_PROMPT: 2 };
const extension_prompt_roles = window.extension_prompt_roles || { SYSTEM: 0, USER: 1, ASSISTANT: 2 };

// Global & Default States
const defaultGlobalSettings = { customButtons: [], showWidget: true, isEnabled: true };
const defaultChatSettings = {
    currentDateTime: new Date().toISOString(),
    autoAdvanceMinutes: 0,
    promptFormat: "[Current Date and Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}]"
};

// Initialize our extension's slice of the global settings
if (!window.extension_settings[MODULE_NAME]) {
    window.extension_settings[MODULE_NAME] = { ...defaultGlobalSettings };
}

// Global state object that will be passed to Svelte
export const extState = {
    global: window.extension_settings[MODULE_NAME],
    chat: { ...defaultChatSettings },
    saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),
    saveChat: () => {
        const metadata = window.SillyTavern.getContext().chatMetadata;
        if (metadata) {
            metadata[MODULE_NAME] = { ...extState.chat };
            window.SillyTavern.getContext().saveMetadataDebounced();
        }
    },
    updatePrompt: () => refreshPrompt()
};

function loadChatSettings() {
    const metadata = window.SillyTavern.getContext().chatMetadata;
    if (metadata && metadata[MODULE_NAME]) {
        extState.chat = { ...defaultChatSettings, ...metadata[MODULE_NAME] };
    } else {
        extState.chat = { ...defaultChatSettings };
    }
    refreshPrompt();
    window.dispatchEvent(new CustomEvent('st-dt-chat-loaded'));
}

function getFormattedTime() {
    const dt = new Date(extState.chat.currentDateTime);
    if (isNaN(dt.getTime())) return "";

    let result = extState.chat.promptFormat;
    const replacers = {
        "{{day}}": dt.toLocaleDateString('en-US', { weekday: 'long' }),
        "{{date}}": dt.getDate().toString(),
        "{{month}}": dt.toLocaleDateString('en-US', { month: 'long' }),
        "{{year}}": dt.getFullYear().toString(),
        "{{time}}": dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    for (const [key, val] of Object.entries(replacers)) {
        result = result.replaceAll(key, val);
    }
    return result;
}

function refreshPrompt() {
    const { setExtensionPrompt } = window.SillyTavern.getContext();
    if (!extState.global.isEnabled || typeof setExtensionPrompt !== 'function') return;

    const content = getFormattedTime();

    // Use our safe constants fallback
    setExtensionPrompt(MODULE_NAME, content, extension_prompt_types.INCHAT, 2, false, extension_prompt_roles.SYSTEM);
}

// 3. Wait for jQuery ready state (ST is fully loaded here)
window.jQuery(async ($) => {
    // Inject Settings UI Container (but don't mount Svelte here directly)
    $('#extensions_settings').append(`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>Date/Time Tracker</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" id="${ MODULE_NAME }-settings-container"></div>
        </div>
    `);

    // Mount the Svelte app to the document BODY so the widget is always alive
    mount(App, { target: document.body, props: { extState } });

    // Add Magic Wand Button
    $('#extensionsMenu').append(`
        <div id="st-dt-wand-button" class="list-group-item flex-container flexGap5">
            <div class="fa-solid fa-clock extensionsMenuExtensionButton" title="Toggle DateTime Tracker"></div>
            <span class="extensionsMenuExtensionButtonLabel">DateTime Tracker</span>
        </div>
    `);

    $('#st-dt-wand-button').on('click', () => {
        extState.global.showWidget = !extState.global.showWidget;
        extState.saveGlobal();
        window.dispatchEvent(new CustomEvent('st-dt-widget-toggled'));
    });

    // Register ST Event Listeners safely via context
    const STContext = window.SillyTavern.getContext();

    STContext.eventSource.on(STContext.event_types.CHAT_LOADED, loadChatSettings);

    STContext.eventSource.on(STContext.event_types.MESSAGE_RECEIVED, () => {
        if (!extState.global.isEnabled) return;

        if (extState.chat.autoAdvanceMinutes > 0) {
            let dt = new Date(extState.chat.currentDateTime);
            dt.setMinutes(dt.getMinutes() + Number(extState.chat.autoAdvanceMinutes));
            extState.chat.currentDateTime = dt.toISOString();
            extState.saveChat();
            window.dispatchEvent(new CustomEvent('st-dt-chat-loaded'));
        }

        const chat = STContext.chat;
        const lastMsg = chat[chat.length - 1];
        if (lastMsg && lastMsg.is_user === false) {
            lastMsg.mes += `\n<time>${getFormattedTime()}</time>`;
            window.SillyTavern.getContext().saveChat();
        }
    });

    loadChatSettings();
});
