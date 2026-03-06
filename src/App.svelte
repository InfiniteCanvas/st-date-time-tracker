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
<div class="flex flex-col gap-3 p-2 text-sm" use:portal>
    <label class="flex items-center gap-2 font-bold">
        <input checked={global.isEnabled}
               onchange={(e) => updateGlobal('isEnabled', e.target.checked)}
               type="checkbox"/>
        Enable Extension
    </label>

    <div class="flex flex-col gap-1">
        <b>Current Date & Time (Saved per Chat)</b>
        <input class="text_pole w-full" onchange={handleDateChange} type="datetime-local" value={dtLocalStr()}/>
    </div>

    <div class="flex flex-col gap-1">
        <b>Auto-Advance (Minutes per turn)</b>
        <input class="text_pole w-24"
               onchange={(e) => updateChat('autoAdvanceMinutes', Number(e.target.value))}
               type="number"
               value={chat.autoAdvanceMinutes}/>
    </div>

    <div class="flex flex-col gap-1">
        <b>Prompt Format</b>
        <textarea
                class="text_pole w-full p-2 text-xs"
                onchange={(e) => updateChat('promptFormat', e.target.value)}
                style="min-height: 80px; resize: vertical;"
                value={chat.promptFormat}
        ></textarea>
        <div class="text-[0.65rem] opacity-70 mt-1">
            Available placeholders: <code>{`{{day}}`}</code>, <code>{`{{month}}`}</code>, <code>{`{{date}}`}</code>,
            <code>{`{{year}}`}</code>, <code>{`{{time}}`}</code>
        </div>
    </div>

    <div class="flex flex-col gap-2 mt-2 p-2 bg-black/20 rounded border border-white/10">
        <b>Injection Settings</b>

        <label class="flex items-center gap-2 cursor-pointer">
            <input checked={chat.injectPosition === 0}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 0)}
                   type="radio"
                   value={0}/>
            Do not inject into prompt
        </label>

        <label class="flex items-center gap-2 cursor-pointer">
            <input checked={chat.injectPosition === 1}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 1)}
                   type="radio"
                   value={1}/>
            Before main prompt (Story String)
        </label>

        <label class="flex items-center gap-2 cursor-pointer">
            <input checked={chat.injectPosition === 2}
                   name="injPos"
                   onchange={() => updateChat('injectPosition', 2)}
                   type="radio"
                   value={2}/>
            After main prompt (In-Prompt)
        </label>

        <div class="flex flex-col gap-1">
            <label class="flex items-center gap-2 cursor-pointer">
                <input checked={chat.injectPosition === 3}
                       name="injPos"
                       onchange={() => updateChat('injectPosition', 3)}
                       type="radio"
                       value={3}/>
                In chat at depth:
            </label>
            {#if chat.injectPosition === 3}
                <div class="flex items-center gap-2 ml-6">
                    <input type="number"
                           class="text_pole w-16"
                           min="0"
                           max="99"
                           value={chat.injectDepth}
                           onchange={(e) => updateChat('injectDepth', Number(e.target.value))}/>
                    <span>as</span>
                    <select class="text_pole w-auto"
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

    <hr class="my-2 border-white/20"/>

    <!-- Exact Time Custom Buttons -->
    <div class="flex flex-col gap-1">
        <b>Global Custom Time Buttons</b>
        <div class="flex gap-2 mb-2 w-full">
            <input bind:value={newBtnLabel}
                   class="text_pole"
                   placeholder="Label (e.g., Midnight)"
                   style="flex: 1 1 auto; min-width: 0;"
                   type="text"/>
            <input bind:value={newBtnHour}
                   class="text_pole"
                   max="23"
                   min="0"
                   placeholder="Hr"
                   style="width: 70px; flex: 0 0 auto;"
                   type="number"/>
            <button class="menu_button m-0" onclick={addCustomButton} style="flex: 0 0 auto;">Add</button>
        </div>

        <div class="flex flex-col gap-1">
            {#each global.customButtons as btn, i}
                <div class="flex justify-between items-center bg-black/20 p-2 rounded border border-white/10">
                    <span>{btn.label} ({btn.hour}:00)</span>
                    <div class="flex gap-1">
                        <button class="text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30"
                                disabled={i === 0}
                                onclick={() => moveItem('customButtons', i, -1)}>
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                        <button class="text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30"
                                disabled={i === global.customButtons.length - 1}
                                onclick={() => moveItem('customButtons', i, 1)}>
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                        <button class="text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer"
                                onclick={() => removeCustomButton(i)}>
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <hr class="my-2 border-white/20"/>

    <!-- Add/Subtract Custom Buttons -->
    <div class="flex flex-col gap-1">
        <b>Global Custom Adjust Buttons</b>
        <div class="flex gap-2 mb-2 w-full">
            <input bind:value={newAdjAmount}
                   class="text_pole"
                   min="1"
                   style="flex: 1 1 auto; min-width: 0;"
                   type="number"/>
            <select bind:value={newAdjUnit} class="text_pole" style="width: 75px; flex: 0 0 auto;">
                <option value="m">mins</option>
                <option value="h">hrs</option>
                <option value="d">days</option>
            </select>
            <button class="menu_button m-0" onclick={addCustomAdjustment} style="flex: 0 0 auto;">Add</button>
        </div>

        <div class="flex flex-col gap-1">
            {#each global.customAdjustments as adj, i}
                <div class="flex justify-between items-center bg-black/20 p-2 rounded border border-white/10">
                    <span>+/- {adj.amount}{adj.unit}</span>
                    <div class="flex gap-1">
                        <button class="text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30"
                                disabled={i === 0}
                                onclick={() => moveItem('customAdjustments', i, -1)}>
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                        <button class="text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30"
                                disabled={i === global.customAdjustments.length - 1}
                                onclick={() => moveItem('customAdjustments', i, 1)}>
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                        <button class="text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer"
                                onclick={() => removeCustomAdjustment(i)}>
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
            class="fixed z-[9999] flex flex-col gap-2 p-3 min-w-[200px] rounded-lg shadow-lg text-white select-none"
            style="top: {widgetPos.top}px; left: {widgetPos.left}px; background: var(--SmartThemeBlurTintColor); backdrop-filter: blur(var(--SmartThemeBlurStrength)); border: 1px solid var(--SmartThemeBorderColor);"
    >
        <div class="flex flex-col gap-1 border-b border-white/20 pb-2 cursor-grab active:cursor-grabbing"
             onmousedown={onDragStart}>
            <div class="text-center font-bold text-sm pointer-events-none">Date / Time</div>
            <input
                    type="datetime-local"
                    class="text_pole text-xs w-full cursor-text"
                    style="background: rgba(0,0,0,0.3); border: none; text-align: center;"
                    value={dtLocalStr()}
                    onchange={handleDateChange}
                    onmousedown={(e) => e.stopPropagation()}
            />
        </div>

        <!-- Custom Fixed Time Buttons -->
        {#if global.customButtons.length > 0}
            <div class="grid grid-cols-2 gap-1 mt-1">
                {#each global.customButtons as btn}
                    <button class="menu_button m-0 text-xs py-1"
                            onclick={() => setTimeOfDay(btn.hour)}>{btn.label}</button>
                {/each}
            </div>
            <hr class="border-white/20 my-1"/>
        {/if}

        <!-- Custom Adjust Time Buttons -->
        {#if global.customAdjustments.length > 0}
            <div class="flex flex-col gap-1">
                {#each global.customAdjustments as adj}
                    <div class="flex gap-1">
                        <button class="menu_button m-0 flex-1 text-xs py-1"
                                onclick={() => adjustTime(adj.unit, -adj.amount)}>
                            -{adj.amount}{adj.unit}
                        </button>
                        <button class="menu_button m-0 flex-1 text-xs py-1"
                                onclick={() => adjustTime(adj.unit, adj.amount)}>
                            +{adj.amount}{adj.unit}
                        </button>
                    </div>
                {/each}
            </div>
            <hr class="border-white/20 my-1"/>
        {/if}

        <!-- Auto-Advance -->
        <div class="flex items-center justify-between gap-2 text-xs" onmousedown={(e) => e.stopPropagation()}>
            <span>Auto-Advance (min/turn):</span>
            <input
                    type="number"
                    class="text_pole text-xs p-1 cursor-text"
                    style="width: 50px; text-align: center; background: rgba(0,0,0,0.3); border: none;"
                    value={chat.autoAdvanceMinutes}
                    onchange={(e) => updateChat('autoAdvanceMinutes', Number(e.target.value))}
                    min="0"
            />
        </div>
    </div>
{/if}
