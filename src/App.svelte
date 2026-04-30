<script>
    import { onMount } from 'svelte';
    import './app.css';

    let { extState } = $props ();

    if ( !extState.global.customButtons ) extState.global.customButtons = [];
    if ( !extState.global.customAdjustments ) {
        extState.global.customAdjustments = [
            { amount: 30, unit: 'm' },
            { amount: 1, unit: 'h' },
            { amount: 1, unit: 'd' }
        ];
    }

    let global = $state ( { ...extState.global } );
    let chat = $state ( { ...extState.chat } );

    onMount ( () => {
        const syncChat = () => {
            chat = { ...extState.chat };
        };
        const syncGlobal = () => {
            global = { ...extState.global };
        };

        window.addEventListener ( 'st-dt-chat-loaded', syncChat );
        window.addEventListener ( 'st-dt-widget-toggled', syncGlobal );

        return () => {
            window.removeEventListener ( 'st-dt-chat-loaded', syncChat );
            window.removeEventListener ( 'st-dt-widget-toggled', syncGlobal );
        };
    } );

    function updateChat ( key, value ) {
        chat[key] = value;
        extState.chat[key] = value;
        extState.saveChat ();
        extState.updatePrompt ();
    }

    function updateGlobal ( key, value ) {
        global[key] = value;
        extState.global[key] = value;
        extState.saveGlobal ();
    }

    let dtLocalStr = $derived ( () => {
        const dt = new Date ( chat.currentDateTime );
        const tzOffset = dt.getTimezoneOffset () * 60000;
        return new Date ( dt.getTime () - tzOffset ).toISOString ().slice ( 0, 16 );
    } );

    function handleDateChange ( e ) {
        updateChat ( 'currentDateTime', new Date ( e.target.value ).toISOString () );
    }

    function adjustTime ( unit, amount ) {
        let dt = new Date ( chat.currentDateTime );
        if ( unit === 'm' ) dt.setMinutes ( dt.getMinutes () + amount );
        if ( unit === 'h' ) dt.setHours ( dt.getHours () + amount );
        if ( unit === 'd' ) dt.setDate ( dt.getDate () + amount );
        updateChat ( 'currentDateTime', dt.toISOString () );
    }

    function setTimeOfDay ( hour ) {
        let dt = new Date ( chat.currentDateTime );
        dt.setHours ( hour, 0, 0, 0 );
        updateChat ( 'currentDateTime', dt.toISOString () );
    }

    // --- Array Reordering Helper ---
    function moveItem ( arrayKey, index, direction ) {
        let arr = [ ...global[arrayKey] ];
        if ( direction === -1 && index > 0 ) { // Move Up
            [ arr[index - 1], arr[index] ] = [ arr[index], arr[index - 1] ];
        } else if ( direction === 1 && index < arr.length - 1 ) { // Move Down
            [ arr[index + 1], arr[index] ] = [ arr[index], arr[index + 1] ];
        }
        updateGlobal ( arrayKey, arr );
    }

    // Custom Time Setters
    let newBtnLabel = $state ( '' );
    let newBtnHour = $state ( 12 );

    function addCustomButton () {
        if ( newBtnLabel ) {
            updateGlobal ( 'customButtons', [ ...global.customButtons, { label: newBtnLabel, hour: newBtnHour } ] );
            newBtnLabel = '';
        }
    }

    function removeCustomButton ( index ) {
        const newButtons = global.customButtons.filter ( ( _, i ) => i !== index );
        updateGlobal ( 'customButtons', newButtons );
    }

    // Custom Adjust Setters
    let newAdjAmount = $state ( 30 );
    let newAdjUnit = $state ( 'm' );

    function addCustomAdjustment () {
        if ( newAdjAmount > 0 ) {
            updateGlobal ( 'customAdjustments', [ ...global.customAdjustments, {
                amount: newAdjAmount,
                unit: newAdjUnit
            } ] );
        }
    }

    function removeCustomAdjustment ( index ) {
        const newAdj = global.customAdjustments.filter ( ( _, i ) => i !== index );
        updateGlobal ( 'customAdjustments', newAdj );
    }

    // Drag Logic
    let isDragging = $state ( false );
    let widgetPos = $state ( { top: 100, left: window.innerWidth - 300 } );
    let startCoords = { x: 0, y: 0 };

    function onDragStart ( e ) {
        isDragging = true;
        startCoords = { x: e.clientX - widgetPos.left, y: e.clientY - widgetPos.top };
    }

    function onDragMove ( e ) {
        if ( !isDragging ) return;
        widgetPos = { left: e.clientX - startCoords.x, top: e.clientY - startCoords.y };
    }

    function portal ( node ) {
        const target = document.getElementById ( 'st-datetime-tracker-settings-container' );
        if ( target ) target.appendChild ( node );
        return {
            destroy () {
                if ( node.parentNode ) node.parentNode.removeChild ( node );
            }
        };
    }
</script>

<svelte:window on:mousemove={onDragMove} on:mouseup={() => isDragging = false}/>

<!-- MAIN ST SETTINGS MENU -->
<div class="dt-settings-root" use:portal>

    <!-- Branded Header -->
    <div class="dt-card-header">
        <div class="dt-card-header-icon">
            <i class="fa-solid fa-clock"></i>
        </div>
        <div class="dt-card-header-text">
            <h3>Date / Time Tracker</h3>
            <span class="dt-card-header-sub">Manage in-world time tracking</span>
        </div>
    </div>

    <div class="dt-card">
        <!-- Enable Extension Toggle -->
        <label class="dt-toggle-row">
            <span class="dt-toggle-label">Enable Extension</span>
            <label class="dt-toggle">
                <input checked={global.isEnabled}
                       onchange={(e) => updateGlobal('isEnabled', e.target.checked)}
                       type="checkbox"/>
                <span class="dt-toggle-slider"></span>
            </label>
        </label>

        <!-- Current Date & Time -->
        <div class="dt-section">
            <div class="dt-section-title">Current Date & Time <span class="dt-badge">Per Chat</span></div>
            <input class="dt-input w-full"
                   onchange={handleDateChange}
                   type="datetime-local"
                   value={dtLocalStr()}/>
        </div>

        <!-- Auto-Advance -->
        <div class="dt-section">
            <div class="dt-section-title">Auto-Advance <span class="dt-text-muted">(Minutes per turn)</span></div>
            <input class="dt-input w-24"
                   onchange={(e) => updateChat('autoAdvanceMinutes', Number(e.target.value))}
                   type="number"
                   value={chat.autoAdvanceMinutes}/>
        </div>
    </div>

    <div class="dt-divider"></div>

    <div class="dt-card">
        <!-- Injection String Format -->
        <div class="dt-section">
            <div class="dt-section-title">Injection String Format</div>
            <textarea
                class="dt-input w-full"
                style="min-height: 60px; resize: vertical;"
                value={chat.injectFormat}
                onchange={(e) => updateChat('injectFormat', e.target.value)}
            ></textarea>
        </div>

        <!-- Appended String Format -->
        <div class="dt-section">
            <div class="dt-section-title">Appended String Format <span class="dt-text-muted">(Wrapped in &lt;time&gt;)</span></div>
            <textarea
                class="dt-input w-full"
                style="min-height: 40px; resize: vertical;"
                value={chat.appendFormat}
                onchange={(e) => updateChat('appendFormat', e.target.value)}
            ></textarea>
            <div class="dt-help-text">
                Available placeholders: <code>{`{{day}}`}</code>, <code>{`{{month}}`}</code>, <code>{`{{date}}`}}</code>, <code>{`{{year}}`}</code>, <code>{`{{time}}`}</code>
            </div>
        </div>

        <!-- Append to Messages -->
        <div class="dt-section">
            <div class="dt-section-title">Append to Messages</div>
            <label class="dt-toggle-row">
                <span class="dt-toggle-label">Append to AI responses</span>
                <label class="dt-toggle">
                    <input
                        checked={chat.appendToResponses !== false}
                        onchange={(e) => updateChat('appendToResponses', e.target.checked)}
                        type="checkbox"
                    />
                    <span class="dt-toggle-slider"></span>
                </label>
            </label>
            <label class="dt-toggle-row">
                <span class="dt-toggle-label">Append to user messages</span>
                <label class="dt-toggle">
                    <input
                        checked={chat.appendToUserMessages === true}
                        onchange={(e) => updateChat('appendToUserMessages', e.target.checked)}
                        type="checkbox"
                    />
                    <span class="dt-toggle-slider"></span>
                </label>
            </label>
        </div>
    </div>

    <!-- Injection Settings Card -->
    <div class="dt-card dt-card-injection">
        <div class="dt-section-title" style="margin-bottom: 6px;">
            <i class="fa-solid fa-syringe" style="margin-right: 6px; font-size: 0.75em;"></i>
            Injection Settings
        </div>

        <label class="dt-radio-row">
            <input checked={chat.injectPosition === 0}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 0)}
                   type="radio"
                   value={0}/>
            <span>Do not inject into prompt</span>
        </label>

        <label class="dt-radio-row">
            <input checked={chat.injectPosition === 1}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 1)}
                   type="radio"
                   value={1}/>
            <span>Before main prompt (Story String)</span>
        </label>

        <label class="dt-radio-row">
            <input checked={chat.injectPosition === 2}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 2)}
                   type="radio"
                   value={2}/>
            <span>After main prompt (In-Prompt)</span>
        </label>

        <div>
            <label class="dt-radio-row">
                <input checked={chat.injectPosition === 3}
                       name="injPos"
                       onchange={() => updateChat('injectPosition', 3)}
                       type="radio"
                       value={3}/>
                <span>In chat at depth:</span>
            </label>
            {#if chat.injectPosition === 3}
                <div class="dt-depth-row">
                    <input type="number"
                           class="dt-input w-16"
                           min="0"
                           max="99"
                           value={chat.injectDepth}
                           onchange={(e) => updateChat('injectDepth', Number(e.target.value))}/>
                    <span class="dt-text-muted">as</span>
                    <select class="dt-input"
                            value={chat.injectRole}
                            onchange={(e) => updateChat('injectRole', Number(e.target.value))}>
                        <option value={0}>System</option>
                        <option value={1}>User</option>
                        <option value={2}>Assistant</option>
                    </select>
                </div>
            {/if}
        </div>
    </div>

    <div class="dt-divider"></div>

    <!-- Exact Time Custom Buttons -->
    <div class="dt-card">
        <div class="dt-section-title">
            <i class="fa-solid fa-clock-rotate-left" style="margin-right: 6px; font-size: 0.75em;"></i>
            Global Custom Time Buttons
        </div>
        <div class="dt-add-row">
            <input bind:value={newBtnLabel}
                   class="dt-input"
                   placeholder="Label (e.g., Midnight)"
                   style="flex: 1 1 auto; min-width: 0;"
                   type="text"/>
            <input bind:value={newBtnHour}
                   class="dt-input"
                   max="23"
                   min="0"
                   placeholder="Hr"
                   style="width: 70px; flex: 0 0 auto;"
                   type="number"/>
            <button class="dt-btn-brand" onclick={addCustomButton}>Add</button>
        </div>

        <div class="dt-item-list">
            {#each global.customButtons as btn, i}
                <div class="dt-item-row">
                    <div class="dt-item-info">
                        <span class="dt-dot"></span>
                        <span class="dt-item-label">{btn.label}</span>
                        <span class="dt-badge">{btn.hour}:00</span>
                    </div>
                    <div class="dt-item-actions">
                        <button class="dt-item-btn"
                                disabled={i === 0}
                                onclick={() => moveItem('customButtons', i, -1)}
                                title="Move up">
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                        <button class="dt-item-btn"
                                disabled={i === global.customButtons.length - 1}
                                onclick={() => moveItem('customButtons', i, 1)}
                                title="Move down">
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                        <button class="dt-item-btn dt-item-btn-danger"
                                onclick={() => removeCustomButton(i)}
                                title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="dt-divider"></div>

    <!-- Add/Subtract Custom Buttons -->
    <div class="dt-card">
        <div class="dt-section-title">
            <i class="fa-solid fa-sliders" style="margin-right: 6px; font-size: 0.75em;"></i>
            Global Custom Adjust Buttons
        </div>
        <div class="dt-add-row">
            <input bind:value={newAdjAmount}
                   class="dt-input"
                   min="1"
                   style="flex: 1 1 auto; min-width: 0;"
                   type="number"/>
            <select bind:value={newAdjUnit} class="dt-input" style="width: 75px; flex: 0 0 auto;">
                <option value="m">mins</option>
                <option value="h">hrs</option>
                <option value="d">days</option>
            </select>
            <button class="dt-btn-brand" onclick={addCustomAdjustment}>Add</button>
        </div>

        <div class="dt-item-list">
            {#each global.customAdjustments as adj, i}
                <div class="dt-item-row">
                    <div class="dt-item-info">
                        <span class="dt-dot"></span>
                        <span class="dt-item-label">+/- {adj.amount}{adj.unit}</span>
                    </div>
                    <div class="dt-item-actions">
                        <button class="dt-item-btn"
                                disabled={i === 0}
                                onclick={() => moveItem('customAdjustments', i, -1)}
                                title="Move up">
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                        <button class="dt-item-btn"
                                disabled={i === global.customAdjustments.length - 1}
                                onclick={() => moveItem('customAdjustments', i, 1)}
                                title="Move down">
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                        <button class="dt-item-btn dt-item-btn-danger"
                                onclick={() => removeCustomAdjustment(i)}
                                title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<!-- FLOATING WIDGET -->
{#if global.showWidget && global.isEnabled}
    <div
        class="dt-widget"
        style="top: {widgetPos.top}px; left: {widgetPos.left}px;"
    >
        <div class="dt-widget-header" onmousedown={onDragStart}>
            <div class="dt-widget-title">Date / Time</div>
            <input
                type="datetime-local"
                class="dt-widget-datetime"
                value={dtLocalStr()}
                onchange={handleDateChange}
                onmousedown={(e) => e.stopPropagation()}
            />
        </div>

        <div class="dt-widget-body">
            <!-- Custom Fixed Time Buttons -->
            {#if global.customButtons.length > 0}
                <div class="dt-widget-grid">
                    {#each global.customButtons as btn}
                        <button class="dt-widget-btn"
                                onclick={() => setTimeOfDay(btn.hour)}>{btn.label}</button>
                    {/each}
                </div>
                <div class="dt-widget-divider"></div>
            {/if}

            <!-- Custom Adjust Time Buttons -->
            {#if global.customAdjustments.length > 0}
                <div class="dt-widget-adjust-list">
                    {#each global.customAdjustments as adj}
                        <div class="dt-widget-adjust-row">
                            <button class="dt-widget-btn dt-widget-btn-adjust"
                                    onclick={() => adjustTime(adj.unit, -adj.amount)}>
                                -{adj.amount}{adj.unit}
                            </button>
                            <button class="dt-widget-btn dt-widget-btn-adjust"
                                    onclick={() => adjustTime(adj.unit, adj.amount)}>
                                +{adj.amount}{adj.unit}
                            </button>
                        </div>
                    {/each}
                </div>
                <div class="dt-widget-divider"></div>
            {/if}

            <!-- Auto-Advance -->
            <div class="dt-widget-auto-row" onmousedown={(e) => e.stopPropagation()}>
                <span>Auto-Advance (min/turn):</span>
                <input
                    type="number"
                    class="dt-widget-auto-input"
                    value={chat.autoAdvanceMinutes}
                    onchange={(e) => updateChat('autoAdvanceMinutes', Number(e.target.value))}
                    min="0"
                />
            </div>
        </div>
    </div>
{/if}

<style>
    /* ===== SETTINGS ROOT ===== */
    .dt-settings-root {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
        font-size: 0.875rem;
        color: var(--SmartThemeBodyColor, #dee2e6);
    }

    /* ===== BRANDED HEADER ===== */
    .dt-card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 18px;
        background: linear-gradient(135deg, #06b6d4, #6366f1);
        border-radius: 10px 10px 0 0;
        color: #fff;
    }
    .dt-card-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: rgba(255, 255, 255, 0.18);
        border-radius: 10px;
        font-size: 1.1rem;
        flex-shrink: 0;
    }
    .dt-card-header-text h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 700;
        letter-spacing: 0.01em;
    }
    .dt-card-header-sub {
        font-size: 0.72rem;
        opacity: 0.78;
        font-weight: 400;
    }

    /* ===== CARD ===== */
    .dt-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 14px 16px;
        background: var(--SmartThemeBlurTintColor, rgba(30, 30, 50, 0.55));
        border: 1px solid rgba(99, 102, 241, 0.18);
        border-radius: 10px;
        backdrop-filter: blur(6px);
    }
    .dt-card-injection {
        border-color: rgba(6, 182, 212, 0.22);
    }

    /* ===== TOGGLE ===== */
    .dt-toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 4px 0;
    }
    .dt-toggle-label {
        font-weight: 500;
        font-size: 0.85rem;
    }
    .dt-toggle {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 22px;
        flex-shrink: 0;
        cursor: pointer;
    }
    .dt-toggle input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
    }
    .dt-toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        transition: background 0.25s, box-shadow 0.25s;
    }
    .dt-toggle-slider::before {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        left: 3px;
        bottom: 3px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.25s, box-shadow 0.25s;
    }
    .dt-toggle input:checked + .dt-toggle-slider {
        background: linear-gradient(135deg, #06b6d4, #6366f1);
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.35);
    }
    .dt-toggle input:checked + .dt-toggle-slider::before {
        transform: translateX(18px);
        box-shadow: 0 0 6px rgba(6, 182, 212, 0.5);
    }

    /* ===== SECTIONS ===== */
    .dt-section {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .dt-section-title {
        font-weight: 700;
        font-size: 0.82rem;
        display: flex;
        align-items: center;
        gap: 4px;
        flex-wrap: wrap;
    }

    /* ===== INPUTS ===== */
    .dt-input {
        padding: 6px 10px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        color: inherit;
        font-size: inherit;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .dt-input:focus {
        outline: none;
        border-color: #06b6d4;
        box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.25);
    }
    textarea.dt-input {
        padding: 8px 10px;
        font-size: 0.75rem;
    }
    select.dt-input {
        cursor: pointer;
    }

    /* ===== BADGE ===== */
    .dt-badge {
        display: inline-flex;
        align-items: center;
        font-size: 0.6rem;
        font-weight: 600;
        padding: 1px 7px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
        border: 1px solid rgba(99, 102, 241, 0.25);
        border-radius: 9999px;
        color: #a5b4fc;
        letter-spacing: 0.02em;
        vertical-align: middle;
    }

    /* ===== DIVIDER ===== */
    .dt-divider {
        height: 1px;
        margin: 4px 0;
        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.35), rgba(99, 102, 241, 0.35), transparent);
    }

    /* ===== MUTED TEXT ===== */
    .dt-text-muted {
        font-size: 0.72rem;
        opacity: 0.55;
        font-weight: 400;
    }

    /* ===== HELP TEXT ===== */
    .dt-help-text {
        font-size: 0.65rem;
        opacity: 0.6;
        margin-top: 4px;
    }
    .dt-help-text code {
        background: rgba(99, 102, 241, 0.15);
        padding: 0 4px;
        border-radius: 3px;
        font-size: 0.62rem;
    }

    /* ===== RADIO ===== */
    .dt-radio-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 3px 0;
        cursor: pointer;
        font-size: 0.82rem;
    }
    .dt-radio-row input[type="radio"] {
        accent-color: #06b6d4;
    }

    /* ===== DEPTH ROW ===== */
    .dt-depth-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 24px;
        margin-top: 4px;
    }

    /* ===== ADD ROW ===== */
    .dt-add-row {
        display: flex;
        gap: 8px;
        margin-bottom: 6px;
        width: 100%;
    }

    /* ===== BRANDED BUTTON ===== */
    .dt-btn-brand {
        padding: 6px 14px;
        background: linear-gradient(135deg, #06b6d4, #6366f1);
        color: #fff;
        border: none;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        flex: 0 0 auto;
        transition: box-shadow 0.2s, transform 0.15s;
    }
    .dt-btn-brand:hover {
        box-shadow: 0 2px 12px rgba(99, 102, 241, 0.4);
        transform: translateY(-1px);
    }

    /* ===== ITEM LIST ===== */
    .dt-item-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .dt-item-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 10px;
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 7px;
        transition: background 0.2s, border-color 0.2s;
    }
    .dt-item-row:hover {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(99, 102, 241, 0.18);
    }
    .dt-item-info {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
    }
    .dt-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: linear-gradient(135deg, #06b6d4, #6366f1);
        flex-shrink: 0;
    }
    .dt-item-label {
        font-size: 0.82rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dt-item-actions {
        display: flex;
        gap: 3px;
        opacity: 0.35;
        transition: opacity 0.2s;
    }
    .dt-item-row:hover .dt-item-actions {
        opacity: 1;
    }
    .dt-item-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        padding: 0;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 5px;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        font-size: 0.7rem;
        transition: color 0.15s, background 0.15s;
    }
    .dt-item-btn:hover:not(:disabled) {
        color: #fff;
        background: rgba(255, 255, 255, 0.12);
    }
    .dt-item-btn:disabled {
        opacity: 0.3;
        cursor: default;
    }
    .dt-item-btn-danger:hover:not(:disabled) {
        color: #f87171;
        background: rgba(248, 113, 113, 0.12);
    }

    /* ===== FLOATING WIDGET ===== */
    .dt-widget {
        position: fixed;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        min-width: 220px;
        border-radius: 12px;
        color: #fff;
        user-select: none;
        overflow: hidden;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(99, 102, 241, 0.12),
            0 0 40px -10px rgba(6, 182, 212, 0.15);
        backdrop-filter: blur(18px) saturate(1.4);
        background: linear-gradient(
            165deg,
            rgba(30, 30, 60, 0.82),
            rgba(20, 20, 45, 0.88)
        );
        border: 1px solid rgba(99, 102, 241, 0.15);
    }

    .dt-widget-header {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 12px 10px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        cursor: grab;
    }
    .dt-widget-header:active {
        cursor: grabbing;
    }

    .dt-widget-title {
        text-align: center;
        font-weight: 700;
        font-size: 0.82rem;
        letter-spacing: 0.02em;
        pointer-events: none;
        color: #e0e7ff;
    }

    .dt-widget-datetime {
        width: 100%;
        padding: 5px 8px;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        color: #fff;
        font-size: 0.75rem;
        text-align: center;
        cursor: text;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .dt-widget-datetime:focus {
        outline: none;
        border-color: #06b6d4;
        box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.25);
    }

    .dt-widget-body {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 12px 10px;
    }

    .dt-widget-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
    }

    .dt-widget-btn {
        padding: 5px 6px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.25));
        border: 1px solid rgba(99, 102, 241, 0.18);
        border-radius: 6px;
        color: #c7d2fe;
        font-size: 0.72rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
    }
    .dt-widget-btn:hover {
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.45), rgba(99, 102, 241, 0.45));
        box-shadow: 0 2px 10px rgba(99, 102, 241, 0.25);
        color: #fff;
    }
    .dt-widget-btn:active {
        transform: scale(0.96);
    }

    .dt-widget-adjust-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .dt-widget-adjust-row {
        display: flex;
        gap: 4px;
    }
    .dt-widget-btn-adjust {
        flex: 1;
    }

    .dt-widget-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), rgba(99, 102, 241, 0.3), transparent);
        margin: 2px 0;
    }

    .dt-widget-auto-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.75);
    }

    .dt-widget-auto-input {
        width: 50px;
        padding: 3px 6px;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #fff;
        font-size: 0.72rem;
        text-align: center;
        cursor: text;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .dt-widget-auto-input:focus {
        outline: none;
        border-color: #06b6d4;
        box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.25);
    }
</style>
