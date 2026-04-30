# src/ — Source Code

Extension source. Build via Vite outputs to `dist/`.

## WHERE TO LOOK

| Task | File | What |
|------|------|------|
| ST event hooks, prompt injection, state init | `main.js` | Exports `extState`, registers eventSource listeners |
| Settings panel, floating widget, drag | `App.svelte` | Single monolithic component, receives `extState` prop |
| Design tokens, Tailwind v4 setup | `app.css` | CSS vars aligned with ST theme |
| Dev asset | `assets/svelte.svg` | Not used in production |

## CODE MAP

| Symbol | File | Role |
|--------|------|------|
| `extState` | `main.js` | Shared reactive state (`global` + `chat` scopes). Exported, passed to App |
| `stripTimeArtifacts()` | `main.js` | Cleans `<time>` tags and raw time strings from AI responses |
| `getFormattedString()` | `main.js` | Template replacement: `{{day}}`, `{{month}}`, `{{date}}`, `{{year}}`, `{{time}}` |
| `refreshPrompt()` | `main.js` | Pushes invisible system note to ST prompt manager |
| `loadChatSettings()` | `main.js` | Per-chat metadata loader; migrates old `promptFormat` |
| `portal` | `App.svelte` | Svelte action, injects settings into `#st-datetime-tracker-settings-container` |

## CONVENTIONS

- `extState` is the single source of truth. Two scopes: `global` (settings.json) and `chat` (chatMetadata).
- Cross-layer sync via custom DOM events: `st-dt-chat-loaded`, `st-dt-widget-toggled`.
- ST API always through `window.SillyTavern.getContext()`. Never import ST internals.
- State saves must use `saveSettingsDebounced()` (global) or `saveMetadataDebounced()` (chat).
- Svelte 5 runes only: `$state`, `$derived`, `$props`. No legacy reactive declarations.
- Widget mounts to `document.body`. Settings portal into ST drawer. Never mount app inside drawer.

## ANTI-PATTERNS

- **App.svelte is 943 lines** mixing settings panel, floating widget, and drag logic. Split into `SettingsPanel.svelte`, `FloatingWidget.svelte`, shared drag utilities.
- **CSS duplication** between `app.css` tokens and `<style>` block in App.svelte. Consolidate.
- **No prop drilling guard.** `extState` is mutated directly. Prefer granular props for child components after split.
- **Magic strings** for event names and container IDs scattered across files. Extract constants.
