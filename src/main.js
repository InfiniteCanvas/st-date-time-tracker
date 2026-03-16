import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

const MODULE_NAME = 'st-datetime-tracker';

/**
 * STRIP TIME ARTIFACTS
 * This function cleans AI responses of any hallucinations where the AI
 * tried to predict and type out the time tag or time string itself.
 */
function stripTimeArtifacts(text) {
    if (!text) return text;

    // 1) Remove any <time>...</time> HTML tags completely.
    // This catches stray <time> or </time> tags if the AI got cut off.
    let cleaned = text.replace(/<\/?time[^>]*>[\s\S]*?(?:<\/time>)?/gi, '').trim();

    // 2) Build a dynamic regex from the user's custom appendFormat string.
    // This ensures that even if the AI outputs raw text without HTML tags
    // (e.g. "Current Date and Time: Friday, March 6, 2026, 09:25 AM"), it gets erased.
    const template = extState.chat.appendFormat;
    if (template) {
        // Escape all standard regex meta characters first so things like [] or () don't break the regex
        let pattern = template.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Replace known formatting placeholders with flexible regex matchers
        pattern = pattern
            .replace(/\\\{\\\{year\\\}\\\}/g, '\\d{2,4}')                       // 2026 or 26
            .replace(/\\\{\\\{date\\\}\\\}/g, '\\d{1,2}')                       // 6 or 06
            .replace(/\\\{\\\{day\\\}\\\}/g, '[a-zA-Z]+')                       // Friday, Monday
            .replace(/\\\{\\\{month\\\}\\\}/g, '[a-zA-Z]+')                     // March, April
            .replace(/\\\{\\\{time\\\}\\\}/g, '\\d{1,2}:\\d{2}(?:\\s?(?:AM|PM|am|pm))?'); // 9:25 AM, 21:25

        // Wrap in optional whitespace boundaries so we don't leave lingering spaces behind
        const re = new RegExp('\\s*' + pattern + '\\s*', 'g');
        cleaned = cleaned.replace(re, '').trim();
    }

    return cleaned;
}

// --------------------------------------------------------------------------------------
// EXTENSION INITIALIZATION & STATE MANAGEMENT
// --------------------------------------------------------------------------------------

// 1. Defensively ensure the ST settings object exists before we touch it
if (!window.extension_settings) {
    window.extension_settings = {};
}

// 2. Safely mock ST prompt constants just in case they aren't available on the window yet
const extension_prompt_types = window.extension_prompt_types || { NONE: -1, IN_PROMPT: 0, INCHAT: 1, BEFORE_PROMPT: 2 };
const extension_prompt_roles = window.extension_prompt_roles || { SYSTEM: 0, USER: 1, ASSISTANT: 2 };

// Global Settings (Shared across all chats)
const defaultGlobalSettings = {
    customButtons: [],
    customAdjustments: [
        { amount: 30, unit: 'm' },
        { amount: 1, unit: 'h' },
        { amount: 1, unit: 'd' }
    ],
    showWidget: true,
    isEnabled: true
};

// Chat Settings (Unique to each specific chat file)
const defaultChatSettings = {
    currentDateTime: new Date().toISOString(),
    autoAdvanceMinutes: 0,
    injectFormat: "[System Note - Current Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}. Do not generate timestamps or <time> tags in your responses. The system handles this automatically.]",
    appendFormat: "Current Date and Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}",
    injectPosition: 3, // 0 = None, 1 = Before Main, 2 = In Prompt, 3 = In Chat
    injectDepth: 2,
    injectRole: 0,     // 0 = System, 1 = User, 2 = Assistant
    appendToResponses: true,
    appendToUserMessages: false
};

// Initialize our extension's slice of the global settings object
if (!window.extension_settings[MODULE_NAME]) {
    window.extension_settings[MODULE_NAME] = { ...defaultGlobalSettings };
}

// Export a reactive state object that Svelte can bind to and update
export const extState = {
    global: window.extension_settings[MODULE_NAME],
    chat: { ...defaultChatSettings },

    // Helper to save global settings directly to ST's settings.json
    saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),

    // Helper to save chat settings directly to the current chat's JSON file (metadata)
    saveChat: () => {
        const metadata = window.SillyTavern.getContext().chatMetadata;
        if (metadata) {
            metadata[MODULE_NAME] = { ...extState.chat };
            window.SillyTavern.getContext().saveMetadataDebounced();
        }
    },
    updatePrompt: () => refreshPrompt()
};

/**
 * Loads metadata specific to the currently active chat.
 * Fired automatically when ST loads a new character or chat file.
 */
function loadChatSettings() {
    const metadata = window.SillyTavern.getContext().chatMetadata;
    if (metadata && metadata[MODULE_NAME]) {
        extState.chat = { ...defaultChatSettings, ...metadata[MODULE_NAME] };

        // Migration step: If a user has an older chat saved with just 'promptFormat',
        // split it into the two new dedicated formats so their chat doesn't break.
        if (extState.chat.promptFormat) {
            extState.chat.injectFormat = extState.chat.promptFormat;
            extState.chat.appendFormat = defaultChatSettings.appendFormat;
            delete extState.chat.promptFormat;
            extState.saveChat();
        }
    } else {
        // If it's a brand new chat, fall back to default settings
        extState.chat = { ...defaultChatSettings };
    }

    // Apply the prompt to the backend and tell Svelte to redraw the UI
    refreshPrompt();
    window.dispatchEvent(new CustomEvent('st-dt-chat-loaded'));
}

/**
 * Helper to process the {{tags}} in a template string and swap them with real dates.
 */
function getFormattedString(template) {
    if (!template) return "";
    const dt = new Date(extState.chat.currentDateTime);
    if (isNaN(dt.getTime())) return "";

    let result = template;
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

/**
 * Pushes the invisible System Note string into SillyTavern's prompt manager.
 * This runs every time the time changes so the AI always has the latest context.
 */
function refreshPrompt() {
    const { setExtensionPrompt } = window.SillyTavern.getContext();
    if (!extState.global.isEnabled || typeof setExtensionPrompt !== 'function') return;

    // 1. If the user turned off injection, clear it from ST's manager
    if (extState.chat.injectPosition === 0) {
        setExtensionPrompt(MODULE_NAME, "", extension_prompt_types.NONE, 0, false, 0);
        return;
    }

    const content = getFormattedString(extState.chat.injectFormat);

    // 2. Map the UI radio button numbers to ST's actual internal enum types
    let type = extension_prompt_types.NONE;
    if (extState.chat.injectPosition === 1) type = extension_prompt_types.BEFORE_PROMPT;
    if (extState.chat.injectPosition === 2) type = extension_prompt_types.IN_PROMPT;
    if (extState.chat.injectPosition === 3) type = extension_prompt_types.INCHAT;

    // 3. Map the UI role dropdown numbers to ST's actual role types
    let role = extension_prompt_roles.SYSTEM;
    if (extState.chat.injectRole === 1) role = extension_prompt_roles.USER;
    if (extState.chat.injectRole === 2) role = extension_prompt_roles.ASSISTANT;

    const depth = Number(extState.chat.injectDepth) || 0;

    // Push the compiled data to ST
    setExtensionPrompt(MODULE_NAME, content, type, depth, false, role);
}

// --------------------------------------------------------------------------------------
// DOM INJECTION & SILLYTAVERN EVENT LISTENERS
// --------------------------------------------------------------------------------------

// Wait for jQuery ready state (Guarantees SillyTavern's UI has fully loaded)
window.jQuery(async ($) => {

    // 1. Inject an empty Drawer Container into the Extensions Menu.
    // (We will use a Svelte Portal to render the settings UI inside of this)
    $('#extensions_settings').append(`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>Date/Time Tracker</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" id="${MODULE_NAME}-settings-container"></div>
        </div>
    `);

    // 2. Mount the Svelte App directly to document.body.
    // If we mounted it inside the drawer, the floating widget would disappear
    // whenever the extensions menu was closed!
    mount(App, { target: document.body, props: { extState } });

    // 3. Add Magic Wand Button at the top of ST to quickly toggle the Widget
    $('#extensionsMenu').append(`
        <div id="st-dt-wand-button" class="list-group-item flex-container flexGap5">
            <div class="fa-solid fa-clock extensionsMenuExtensionButton" title="Toggle DateTime Tracker"></div>
            <span class="extensionsMenuExtensionButtonLabel">DateTime Tracker</span>
        </div>
    `);

    $('#st-dt-wand-button').on('click', () => {
        extState.global.showWidget = !extState.global.showWidget;
        extState.saveGlobal();
        // Fire custom event to tell Svelte to re-render the widget
        window.dispatchEvent(new CustomEvent('st-dt-widget-toggled'));
    });

    // 4. Register internal SillyTavern Event Listeners
    const STContext = window.SillyTavern.getContext();

    // Trigger state refresh when a user switches characters or loads a new chat
    STContext.eventSource.on(STContext.event_types.CHAT_LOADED, loadChatSettings);

    // Trigger logic every time an AI generation completes
    STContext.eventSource.on(STContext.event_types.MESSAGE_RECEIVED, (messageId) => {
        if (!extState.global.isEnabled) return;

        // "Background" extension tasks (like Quick Memory summaries or translation scripts)
        // usually trigger MESSAGE_RECEIVED with an undefined or negative messageId.
        // We ensure we only Auto-Advance time on a real conversational turn.
        const isRealMessage = typeof messageId === 'number' && messageId >= 0;

        if (isRealMessage && extState.chat.autoAdvanceMinutes > 0) {
            let dt = new Date(extState.chat.currentDateTime);
            dt.setMinutes(dt.getMinutes() + Number(extState.chat.autoAdvanceMinutes));
            extState.chat.currentDateTime = dt.toISOString();
            extState.saveChat();
            window.dispatchEvent(new CustomEvent('st-dt-chat-loaded'));
        }

        const chat = STContext.chat;
        const lastMsg = chat[chat.length - 1];

        if (lastMsg && lastMsg.is_user === false) {

            // 1) ALWAYS clean up artifacts, even if it was a background task
            // This ensures nothing ever permanently leaks into the chat history.
            lastMsg.mes = stripTimeArtifacts(lastMsg.mes);

            // 2) ONLY append the visible HTML time tag to actual chat bubbles
            if (isRealMessage && extState.chat.appendToResponses !== false) {
                const appendStr = getFormattedString(extState.chat.appendFormat);
                if (appendStr) {
                    // Wrap it in HTML <time> tags so our extension's CSS can hide it from the UI!
                    lastMsg.mes += `\n<time>${appendStr}</time>`;
                    window.SillyTavern.getContext().saveChat();
                }
            }
        }
    });

    // Trigger logic when a user message is sent
    STContext.eventSource.on(STContext.event_types.MESSAGE_SENT, () => {
        if (!extState.global.isEnabled) return;

        // Auto-advance time if enabled
        if (extState.chat.autoAdvanceMinutes > 0) {
            let dt = new Date(extState.chat.currentDateTime);
            dt.setMinutes(dt.getMinutes() + Number(extState.chat.autoAdvanceMinutes));
            extState.chat.currentDateTime = dt.toISOString();
            extState.saveChat();
            window.dispatchEvent(new CustomEvent('st-dt-chat-loaded'));
        }

        if (extState.chat.appendToUserMessages !== true) return;

        const chat = STContext.chat;
        const lastMsg = chat[chat.length - 1];

        if (lastMsg && lastMsg.is_user === true) {
            const appendStr = getFormattedString(extState.chat.appendFormat);
            if (appendStr) {
                // Wrap it in HTML <time> tags so our extension's CSS can hide it from the UI!
                lastMsg.mes += `\n<time>${appendStr}</time>`;
                window.SillyTavern.getContext().saveChat();
            }
        }
    });

    // Initial Load to boot up the extension on first page refresh
    loadChatSettings();
});
