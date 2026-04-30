# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-30
**Scope:** SillyTavern Extension — Date/Time Tracker

## OVERVIEW
A SillyTavern extension that tracks and injects in-world date/time into AI prompts. Built with Svelte 5, Vite, and Tailwind CSS v4. Outputs a single ES module bundle that SillyTavern loads via `manifest.json`.

## STRUCTURE
```
.
├── manifest.json          # ST extension manifest (entry point for ST)
├── package.json           # npm: Svelte 5, Vite, Tailwind v4
├── vite.config.js         # Lib build → dist/index.js + dist/style.css
├── jsconfig.json          # JS type-checking (checkJs: true, NOT TS)
├── index.html             # Dev-only (Vite dev server), NOT used by ST
├── src/
│   ├── main.js            # Extension bootstrap, ST event integration, state
│   ├── App.svelte         # Settings UI + floating widget (943 lines — split me)
│   ├── app.css            # Tailwind imports + design system tokens
│   └── assets/
├── dist/                  # Built output — what ST actually loads
│   ├── index.js
│   └── style.css
├── public/                # Dev static assets only
└── .vscode/extensions.json
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Change UI | `src/App.svelte` | Monolithic component; houses settings panel, floating widget, drag logic |
| Change ST integration | `src/main.js` | Event listeners, prompt injection, artifact stripping |
| Change styling | `src/app.css` + `<style>` in App.svelte | CSS split across two files; some duplication |
| Change build output | `vite.config.js` | Lib mode build, ES format only |
| Change extension metadata | `manifest.json` | Name, version, dist paths |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `extState` | Object | `src/main.js` | Shared reactive state: global settings, chat settings, save helpers |
| `stripTimeArtifacts` | Function | `src/main.js` | Removes hallucinated `<time>` tags and raw time strings from AI responses |
| `getFormattedString` | Function | `src/main.js` | Replaces `{{day}}`/`{{month}}`/`{{date}}`/`{{year}}`/`{{time}}` in templates |
| `refreshPrompt` | Function | `src/main.js` | Pushes invisible system note into ST's prompt manager |
| `loadChatSettings` | Function | `src/main.js` | Loads per-chat metadata; handles migration from old `promptFormat` |
| `portal` | Action | `src/App.svelte` | DOM portal — renders settings into ST's drawer while widget stays on body |

## CONVENTIONS

- **JS, not TS** — `jsconfig.json` with `checkJs: true` provides IDE intellisense
- **Svelte 5 runes** — `$state`, `$derived`, `$props()` used throughout
- **`verbatimModuleSyntax: true`** — use `import type` for type imports
- **ES modules only** — `type: "module"`, Vite outputs `formats: ['es']`
- **ST API accessed via `window.SillyTavern.getContext()`** — context, eventSource, chatMetadata, save functions
- **Custom events for cross-layer sync** — `st-dt-chat-loaded`, `st-dt-widget-toggled`

## ANTI-PATTERNS (THIS PROJECT)

- **NEVER mount the Svelte app inside the drawer** — widget disappears when menu closes. Mount to `document.body`, portal settings only.
- **ALWAYS strip time artifacts** — even for background tasks (MESSAGE_RECEIVED with undefined/negative messageId). Prevents chat history pollution.
- **Do NOT let AI self-generate timestamps** — system handles it via prompt injection and `<time>` tag appending.
- **Avoid `import` for Types** — use `import type` (enforced by jsconfig).

## UNIQUE STYLES

- **Portal pattern** — App is mounted to body; settings panel uses Svelte action `portal()` to inject into `#st-datetime-tracker-settings-container` created by main.js
- **SillyTavern theme integration** — CSS uses `var(--SmartThemeBodyColor, #dee2e6)` and `var(--SmartThemeBlurTintColor, rgba(30, 30, 50, 0.55))` for seamless theming
- **Dual format system** — `injectFormat` (invisible prompt) and `appendFormat` (visible HTML `<time>` tag) are separate; old `promptFormat` is auto-migrated
- **Message filtering** — distinguishes "real" messages (`messageId >= 0`) from background extension tasks to avoid auto-advancing time on background operations

## COMMANDS

```bash
npm run dev      # Vite dev server (uses index.html)
npm run build    # Build to dist/ — REQUIRED before ST sees changes
npm run preview  # Preview production build
```

## NOTES

- `dist/` is the build output. ST loads `dist/index.js` and `dist/style.css` — **not** `src/` files.
- `index.html` exists only for Vite dev mode. SillyTavern never loads it.
- No tests, no CI/CD, no ESLint/Prettier. Extension is standalone; parent SillyTavern repo workflows do not apply.
- `README.md` is default Vite+Svelte template — contains no extension-specific docs.
- App.svelte is 943 lines and mixes 3 concerns (settings panel, floating widget, drag logic). Prime refactor target.
