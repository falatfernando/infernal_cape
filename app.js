// OSRS Inferno Progression Tracker Data (Translated to English for Reddit sharing)
const attemptsData = [
    { attempt: 1, wave: 14, note: "Didn't eat food and didn't really understand how the blob works", category: "Blob" },
    { attempt: 2, wave: 22, note: "Didn't eat and tried to get fancy with prayer flicking - kept forgetting to equip the shield", category: "Flick/Prayer" },
    { attempt: 3, wave: 25, note: "Panicked with a melee and a ranger at the same time", category: "Panic/Melee/Range" },
    { attempt: 4, wave: 31, note: "Didn't eat food", category: "Supplies" },
    { attempt: 5, wave: 7, note: "2 blobs spawn, wasn't going to eat anyway", category: "Blob" },
    { attempt: 6, wave: 31, note: "Panicked", category: "Panic/Melee/Range" },
    { attempt: 7, wave: 31, note: "Tanked hits from all the little minions", category: "Other" },
    { attempt: 8, wave: 48, note: "Missed prayer flick", category: "Flick/Prayer" },
    { attempt: 9, wave: 51, note: "Mage and range stack, didn't know what to do, missed flick", category: "Flick/Prayer" },
    { attempt: 10, wave: 14, note: "Don't even know what the hell this game is", category: "Other" },
    { attempt: 11, wave: 24, note: "Missed flick on 2 blobs", category: "Blob" },
    { attempt: 12, wave: 12, note: "Missed flick on 2 blobs", category: "Blob" },
    { attempt: 13, wave: 41, note: "Double blobs, missed stack off-ticking with the mage", category: "Blob" },
    { attempt: 14, wave: 24, note: "Missed flick on 2 blobs", category: "Blob" },
    { attempt: 15, wave: 45, note: "WhatsApp distraction", category: "Distraction" },
    { attempt: 16, wave: 51, note: "Rushed it and forgot to switch my overhead prayer", category: "Flick/Prayer" },
    { attempt: 17, wave: 56, note: "Think I took a 38 hit from a blob", category: "Blob" },
    { attempt: 18, wave: 47, note: "Missed flick on the mage", category: "Flick/Prayer" },
    { attempt: 19, wave: 31, note: "Double blobs, bad spawn fucked me up", category: "Blob" },
    { attempt: 20, wave: 15, note: "Idk, gotta sleep", category: "Distraction" },
    { attempt: 21, wave: 56, note: "Blob respawn mechanics fucked me over", category: "Blob" },
    { attempt: 22, wave: 45, note: "Took a braindead melee hit", category: "Panic/Melee/Range" },
    { attempt: 23, wave: 39, note: "Missed flick on blob and mage", category: "Blob" },
    { attempt: 24, wave: 60, note: "Blob fucked me in a stack, not sure what I should have done", category: "Blob" },
    { attempt: 25, wave: 62, note: "Ran out of supplies and pillar collapsed", category: "Supplies" },
    { attempt: 26, wave: 24, note: "Double blob, fuck those guys", category: "Blob" },
    { attempt: 27, wave: null, note: "Melee fucked me up, unlucky trying to off-tick", category: "Panic/Melee/Range", labelWave: "??" },
    { attempt: 28, wave: null, note: "Exhausted, what the hell was I doing, time to sleep", category: "Distraction", labelWave: "??" },
    { attempt: 29, wave: 69, note: "Zuk healers. A pair of mage and ranger spawned but I managed to kill them. Died due to running out of supplies", category: "Zuk" },
    { attempt: 30, wave: 63, note: "Misclick", category: "Other" },
    { attempt: 31, wave: 69, note: "Zuk, messed up the movement/shield mechanics", category: "Zuk" },
    { attempt: 32, wave: 31, note: "Double blob, bad spawn fucked me up", category: "Blob" },
    { attempt: 33, wave: 69, note: "Zuk took too long, died to a 3rd mage spawn", category: "Zuk" },
    { attempt: 34, wave: 31, note: "Missed blob/range 1-tick flick", category: "Blob" },
    { attempt: 35, wave: 14, note: "lmao", category: "Other" },
    { attempt: 36, wave: 69, note: "Hit by Zuk directly (had 6 brews, 6 restores)", category: "Zuk" },
    { attempt: 37, wave: 69, note: "Zuk bad ranger/mager spawn timing (had 6 brews, 6 restores)", category: "Zuk" },
    { attempt: 38, wave: 59, note: "Melee stack, everything went to shit, dealing with personal issues", category: "Distraction" },
    { attempt: 39, wave: 69, note: "Zuk, ran out of supplies", category: "Zuk" },
    { attempt: 40, wave: 54, note: "Misclick, took a mage hit", category: "Flick/Prayer" },
    { attempt: 41, wave: 69, note: "I won.", category: "Victory" }
];

// SVGs for categories
const categoryIcons = {
    Victory: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="gold" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    Zuk: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ff4500" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3" fill="#ff4500"/></svg>`,
    Blob: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ff3333" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`,
    "Flick/Prayer": `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ab47bc" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    "Panic/Melee/Range": `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ff7043" stroke-width="2"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l2.5 2.5L21 16l-2.5-2.5L13 19zM21 3l-6.5 6.5M3 21l6.5-6.5"/></svg>`,
    Distraction: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#78909c" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    Supplies: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffa726" stroke-width="2"><path d="M12 2v6M8 8h8M10 12h4v8a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-8z"/></svg>`,
    Other: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ec407a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

// Analysis & Tips based on categories
const analysisTips = {
    Victory: "Victory! You have conquered TzKal-Zuk and claimed the legendary Infernal Cape. Your perseverance across 41 attempts is spectacular. The ultimate solo PvM achievement is yours!",
    Zuk: "Wave 69: TzKal-Zuk. Keep your eyes on Zuk's attack cycles and the shield's position. Always prioritize the Ranger when it spawns, and flick between Ranger/Mager when they are both alive. Use your Blowpipe specs to heal, and don't lag behind the shield!",
    Blob: "Blobs are the primary filter of the Inferno. They hit on a 3-tick cycle, alternating between Ranged and Magic based on your active prayer. If stacked with other monsters, you must off-tick them or set up proper line-of-sight locks behind the pillars.",
    "Flick/Prayer": "Flickering requires focus and rhythm. Ensure your 'F-Keys' are comfortable. Practice 1-tick flicking or lazy-flicking in early waves to build muscle memory. Keep your shield equipped when moving around pillars to buffer damage.",
    "Panic/Melee/Range": "Panic is a quick ticket to the lobby. When Melees dig or Range/Mage stacks spawn, pause for a split second to evaluate. Freeze Melees early using Ice Barrage, use corners to trap them, and deal with one threat at a time.",
    Distraction: "Osrs Inferno requires absolute, undivided attention. Avoid playing while tired, check your messages between waves (or in the safe spots), and make sure your environment is calm. Keep your mind clear of personal issues during waves!",
    Supplies: "Conserve supplies in the early waves (1-50) by lazy-flicking and avoiding unnecessary damage. Brew down only when in actual danger. Optimize your gear to maximize DPS so fights finish faster, saving restoring resources.",
    Other: "Missclicks and silly errors are part of the learning curve. Don't get discouraged by early deaths. Take a deep breath, reset, and go again. Review your recordings if possible to see what exactly triggered the damage."
};

// State Variables
let selectedAttemptIndex = null;
let currentCategoryFilter = 'all';
let showTrendline = true;
let searchQuery = '';

// DOM Elements
const svg = document.getElementById('dotplot');
const detailCard = document.getElementById('detail-card');
const detailActive = document.getElementById('detail-active');
const detailInitial = document.querySelector('.detail-initial-state');
const detailAttemptNum = document.getElementById('detail-attempt-number');
const detailWaveBadge = document.getElementById('detail-wave-badge');
const detailCategoryIcon = document.getElementById('detail-category-icon');
const detailCategoryName = document.getElementById('detail-category-name');
const detailJournalNote = document.getElementById('detail-journal-note');
const detailAnalysis = document.getElementById('detail-analysis');

const prevBtn = document.getElementById('prev-attempt-btn');
const nextBtn = document.getElementById('next-attempt-btn');
const viewVictoryBtn = document.getElementById('view-victory-btn');
const toggleTrendBtn = document.getElementById('toggle-trend');
const exportPngBtn = document.getElementById('export-png');
const logSearch = document.getElementById('log-search');
const logGrid = document.getElementById('log-grid');

// Chart Settings
const margin = { top: 40, right: 40, bottom: 50, left: 60 };
const width = 1000;
const height = 500;

// Coordinate Mapping Functions
function getX(attempt) {
    const xMin = 1;
    const xMax = 41;
    return margin.left + ((attempt - xMin) / (xMax - xMin)) * (width - margin.left - margin.right);
}

function getY(wave) {
    // If wave is null (unknown), we place it at a special bottom coordinate
    if (wave === null) {
        return height - margin.bottom + 25; 
    }
    const yMin = 0;
    const yMax = 70; // Max wave is 69, so 70 gives overhead space
    return height - margin.bottom - ((wave - yMin) / (yMax - yMin)) * (height - margin.top - margin.bottom);
}

/* Render SVG Chart Components */
function renderChart() {
    const bgBandsGroup = document.getElementById('chart-background-bands');
    const gridGroup = document.getElementById('chart-grid');
    const trendGroup = document.getElementById('chart-trendlines');
    const dotsGroup = document.getElementById('chart-dots');
    const axesGroup = document.getElementById('chart-axes');
    
    // Clear previous elements
    bgBandsGroup.innerHTML = '';
    gridGroup.innerHTML = '';
    trendGroup.innerHTML = '';
    dotsGroup.innerHTML = '';
    axesGroup.innerHTML = '';

    // 1. Draw Danger Band Backgrounds
    const zones = [
        { yStart: 0, yEnd: 35, class: '' },
        { yStart: 35, yEnd: 62, class: 'band-bg-triplejads' },
        { yStart: 62, yEnd: 68, class: 'band-bg-triplejads' },
        { yStart: 68, yEnd: 70, class: 'band-bg-zuk' }
    ];
    
    zones.forEach(zone => {
        const yTop = getY(zone.yEnd);
        const yBottom = getY(zone.yStart);
        const rectHeight = yBottom - yTop;
        
        if (zone.class) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', margin.left);
            rect.setAttribute('y', yTop);
            rect.setAttribute('width', width - margin.left - margin.right);
            rect.setAttribute('height', rectHeight);
            rect.setAttribute('class', zone.class);
            bgBandsGroup.appendChild(rect);
        }
    });

    // 2. Draw Grid Lines
    // Wave grid lines
    const waveTicks = [10, 20, 30, 40, 50, 60, 63, 69];
    waveTicks.forEach(tick => {
        const y = getY(tick);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', margin.left);
        line.setAttribute('y1', y);
        line.setAttribute('x2', width - margin.right);
        line.setAttribute('y2', y);
        
        if (tick === 69) {
            line.setAttribute('class', 'grid-line-zuk');
        } else if (tick === 63 || tick === 35) {
            line.setAttribute('class', 'grid-line-major');
        } else {
            line.setAttribute('class', 'grid-line');
        }
        gridGroup.appendChild(line);

        // Grid Text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', margin.left - 10);
        text.setAttribute('y', y + 4);
        text.setAttribute('text-anchor', 'end');
        text.setAttribute('class', 'axis-text');
        text.style.fontWeight = (tick === 69 || tick === 63) ? '700' : '400';
        text.style.fill = tick === 69 ? '#ff4500' : (tick === 63 ? '#ff8c00' : '#a0a0b5');
        text.textContent = tick === 69 ? 'Wave 69' : `Wave ${tick}`;
        gridGroup.appendChild(text);
    });

    // Attempt vertical grid lines
    for (let i = 5; i <= 40; i += 5) {
        const x = getX(i);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', margin.top);
        line.setAttribute('x2', x);
        line.setAttribute('y2', height - margin.bottom);
        line.setAttribute('class', 'grid-line');
        gridGroup.appendChild(line);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', height - margin.bottom + 18);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('class', 'axis-text');
        text.textContent = `#${i}`;
        gridGroup.appendChild(text);
    }
    
    // Draw Special ?? Wave Label Line at the bottom
    const yUnknown = getY(null);
    const lineUnknown = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineUnknown.setAttribute('x1', margin.left);
    lineUnknown.setAttribute('y1', yUnknown);
    lineUnknown.setAttribute('x2', width - margin.right);
    lineUnknown.setAttribute('y2', yUnknown);
    lineUnknown.setAttribute('stroke', 'rgba(255, 255, 255, 0.04)');
    lineUnknown.setAttribute('stroke-dasharray', '2,4');
    gridGroup.appendChild(lineUnknown);

    const txtUnknown = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txtUnknown.setAttribute('x', margin.left - 10);
    txtUnknown.setAttribute('y', yUnknown + 4);
    txtUnknown.setAttribute('text-anchor', 'end');
    txtUnknown.setAttribute('class', 'axis-text');
    txtUnknown.style.fill = '#6e6e80';
    txtUnknown.textContent = 'Wave ??';
    gridGroup.appendChild(txtUnknown);

    // 3. Draw Trendline (Lava style moving average)
    if (showTrendline) {
        // Calculate moving average
        const points = [];
        const maWindow = 3; // 3-run moving average
        
        for (let i = 0; i < attemptsData.length; i++) {
            let sum = 0;
            let count = 0;
            
            for (let j = Math.max(0, i - maWindow + 1); j <= i; j++) {
                // If wave is null (unknown), we approximate it as wave 30 to not mess up the visual trend line,
                // or we skip it. Skipping/approximating keeps it smooth.
                const val = attemptsData[j].wave !== null ? attemptsData[j].wave : 30;
                sum += val;
                count++;
            }
            
            points.push({
                x: getX(attemptsData[i].attempt),
                y: getY(sum / count)
            });
        }

        // Draw shadow path for extra depth
        const shadowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let dStr = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            dStr += ` L ${points[i].x} ${points[i].y}`;
        }
        shadowPath.setAttribute('d', dStr);
        shadowPath.setAttribute('class', 'trend-shadow-path');
        trendGroup.appendChild(shadowPath);

        // Draw main glowing trendline
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', dStr);
        path.setAttribute('class', 'trend-path');
        trendGroup.appendChild(path);
    }

    // 4. Draw Axis Lines
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', margin.left);
    xAxis.setAttribute('y1', height - margin.bottom);
    xAxis.setAttribute('x2', width - margin.right);
    xAxis.setAttribute('y2', height - margin.bottom);
    xAxis.setAttribute('class', 'axis-line');
    axesGroup.appendChild(xAxis);

    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', margin.left);
    yAxis.setAttribute('y1', margin.top);
    yAxis.setAttribute('x2', margin.left);
    yAxis.setAttribute('y2', height - margin.bottom);
    yAxis.setAttribute('class', 'axis-line');
    axesGroup.appendChild(yAxis);
    
    // Axis Titles
    const xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xLabel.setAttribute('x', margin.left + (width - margin.left - margin.right) / 2);
    xLabel.setAttribute('y', height - 10);
    xLabel.setAttribute('text-anchor', 'middle');
    xLabel.setAttribute('class', 'axis-text');
    xLabel.style.fontWeight = '600';
    xLabel.style.fill = '#a0a0b5';
    xLabel.textContent = 'ATTEMPT NUMBER';
    axesGroup.appendChild(xLabel);

    // 5. Draw Dots
    attemptsData.forEach((d, idx) => {
        const isFiltered = currentCategoryFilter !== 'all' && d.category !== currentCategoryFilter;
        const matchesSearch = searchQuery === '' || 
                              d.note.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (d.wave && d.wave.toString().includes(searchQuery)) ||
                              d.attempt.toString().includes(searchQuery);

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', getX(d.attempt));
        circle.setAttribute('cy', getY(d.wave));
        circle.setAttribute('class', 'attempt-dot');
        
        // Define colors and sizes using hex values directly so they render correctly in the PNG exporter
        let r = 7;
        let fill = '#f0f0f5'; // default
        let filter = '';
        let stroke = 'rgba(0,0,0,0.6)';
        let strokeWidth = '1px';

        // Select styles
        if (d.category === 'Victory') {
            fill = '#ffd700'; // --color-victory
            r = 9;
            filter = 'url(#glow-victory)';
            stroke = '#ffffff';
            strokeWidth = '1.5px';
        } else if (d.category === 'Zuk') {
            fill = '#ff4500'; // --color-zuk
            r = 8;
            filter = 'url(#glow-lava)';
        } else if (d.category === 'Blob') {
            fill = '#ff3333'; // --color-blob
        } else if (d.category === 'Flick/Prayer') {
            fill = '#ab47bc'; // --color-prayer
        } else if (d.category === 'Panic/Melee/Range') {
            fill = '#ff7043'; // --color-melee
        } else if (d.category === 'Distraction') {
            fill = '#78909c'; // --color-distract
        } else if (d.category === 'Supplies') {
            fill = '#ffa726'; // --color-supplies
        } else {
            fill = '#ec407a'; // --color-other
        }

        // Handle "?" wave visual representation
        if (d.wave === null) {
            circle.setAttribute('stroke-dasharray', '2,2');
            stroke = fill;
            fill = 'none';
            strokeWidth = '2px';
            r = 6;
        }

        circle.setAttribute('r', r);
        circle.setAttribute('fill', fill);
        circle.setAttribute('stroke', stroke);
        circle.setAttribute('stroke-width', strokeWidth);
        if (filter) circle.setAttribute('filter', filter);

        // Apply visual classes for filtering and active states
        if (isFiltered || !matchesSearch) {
            circle.classList.add('faded');
        }
        
        if (selectedAttemptIndex === idx) {
            circle.classList.add('active');
        }

        // Hover events
        circle.addEventListener('mouseover', (e) => {
            if (isFiltered || !matchesSearch) return;
            showTooltip(e, d);
        });
        circle.addEventListener('mousemove', (e) => {
            moveTooltip(e);
        });
        circle.addEventListener('mouseout', () => {
            hideTooltip();
        });

        // Click event
        circle.addEventListener('click', () => {
            if (isFiltered || !matchesSearch) return;
            selectAttempt(idx);
        });

        dotsGroup.appendChild(circle);
    });
}

/* Tooltip Management */
const tooltip = document.getElementById('tooltip');

function showTooltip(e, d) {
    const waveDisplay = d.wave !== null ? `Wave ${d.wave}` : 'Wave ??';
    const catClass = d.category.replace('/', '-');
    tooltip.innerHTML = `
        <div class="tooltip-header">
            <span>Attempt #${d.attempt}</span>
            <span>${waveDisplay}</span>
        </div>
        <span class="tooltip-category badge-${catClass}">${d.category}</span>
        <div class="tooltip-note">"${d.note}"</div>
    `;
    tooltip.classList.remove('hidden');
    moveTooltip(e);
}

function moveTooltip(e) {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left + 15;
    const y = e.clientY - rect.top - 45;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    tooltip.classList.add('hidden');
}

/* Detail Panel Management */
function selectAttempt(index) {
    selectedAttemptIndex = index;
    
    // Highlight active dot in SVG
    const dots = document.querySelectorAll('.attempt-dot');
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update Log Cards highlighting (Scroll interaction removed as requested)
    const logCards = document.querySelectorAll('.log-card');
    logCards.forEach((card, idx) => {
        if (idx === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    if (index === null) {
        detailActive.classList.add('hidden');
        detailInitial.classList.remove('hidden');
        return;
    }

    const d = attemptsData[index];
    const isZuk = d.wave === 69;
    const isVictory = d.category === 'Victory';
    const catClass = d.category.replace('/', '-');

    // UI Updates
    detailAttemptNum.textContent = `Attempt #${d.attempt}`;
    
    // Wave badge styling
    detailWaveBadge.textContent = d.wave !== null ? `Wave ${d.wave}` : 'Wave ??';
    if (isZuk || isVictory) {
        detailWaveBadge.className = 'wave-badge zuk-reach';
    } else {
        detailWaveBadge.className = 'wave-badge';
    }

    // Category
    detailCategoryIcon.innerHTML = categoryIcons[d.category] || categoryIcons['Other'];
    detailCategoryName.textContent = d.category;
    detailCategoryName.className = `category-val badge-${catClass}`;

    // Note and analysis
    detailJournalNote.textContent = `"${d.note}"`;
    detailAnalysis.textContent = analysisTips[d.category] || analysisTips['Other'];

    // Transition states
    detailInitial.classList.add('hidden');
    detailActive.classList.remove('hidden');
}

/* Render Chronological Log Cards */
function renderLog() {
    logGrid.innerHTML = '';
    
    attemptsData.forEach((d, idx) => {
        const isFiltered = currentCategoryFilter !== 'all' && d.category !== currentCategoryFilter;
        const matchesSearch = searchQuery === '' || 
                              d.note.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (d.wave && d.wave.toString().includes(searchQuery)) ||
                              d.attempt.toString().includes(searchQuery);

        if (isFiltered || !matchesSearch) return;

        const card = document.createElement('div');
        card.className = `log-card ${selectedAttemptIndex === idx ? 'active' : ''}`;
        
        const isZuk = d.wave === 69;
        const isVictory = d.category === 'Victory';
        const waveText = d.wave !== null ? `Wave ${d.wave}` : 'Wave ??';
        const catClass = d.category.replace('/', '-');

        card.innerHTML = `
            <div class="log-card-header">
                <span class="log-card-attempt">Attempt #${d.attempt}</span>
                <span class="log-card-wave ${isZuk || isVictory ? 'zuk' : ''}">${waveText}</span>
            </div>
            <div class="log-card-text" title="${d.note}">${d.note}</div>
            <span class="log-card-category badge-${catClass}">${d.category}</span>
        `;

        card.addEventListener('click', () => {
            selectAttempt(idx);
        });

        logGrid.appendChild(card);
    });
}

/* Export to PNG Implementation */
function exportToPNG() {
    const svgElement = document.getElementById('dotplot');
    
    // We clone the SVG so we don't pollute the actual DOM
    const svgClone = svgElement.cloneNode(true);
    
    // Remove filters from the clone to prevent canvas security block/blank render issues
    const filteredElements = svgClone.querySelectorAll('[filter]');
    filteredElements.forEach(el => el.removeAttribute('filter'));
    
    // Inline styling so the SVG converts with correct colors and properties on the canvas
    const styleElement = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    styleElement.textContent = `
        #dotplot { background: #0d0d11; }
        .grid-line { stroke: rgba(255, 255, 255, 0.05); stroke-width: 1; }
        .grid-line-major { stroke: rgba(255, 255, 255, 0.1); stroke-width: 1; stroke-dasharray: 4,4; }
        .grid-line-zuk { stroke: rgba(255, 69, 0, 0.4); stroke-width: 1.5; stroke-dasharray: 6,4; }
        .axis-line { stroke: rgba(255, 255, 255, 0.2); stroke-width: 1.5; }
        .axis-text { fill: #a0a0b5; font-size: 11px; font-family: 'Inter', sans-serif; }
        .band-bg-zuk { fill: rgba(255, 69, 0, 0.04); }
        .band-bg-triplejads { fill: rgba(139, 0, 0, 0.03); }
        .trend-path { fill: none; stroke: url(#trend-gradient); stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; filter: none; }
        .trend-shadow-path { fill: none; stroke: rgba(255, 69, 0, 0.15); stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; }
        .attempt-dot { cursor: pointer; }
    `;
    svgClone.insertBefore(styleElement, svgClone.firstChild);
    
    const svgString = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const blobURL = URL.createObjectURL(svgBlob);
    
    const image = new Image();
    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 500;
        const context = canvas.getContext('2d');
        
        // Draw the background color so it isn't transparent
        context.fillStyle = '#0d0d11';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.drawImage(image, 0, 0);
        
        const png = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = png;
        downloadLink.download = 'fvlxt_inferno_progression.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
}

/* Event Listeners */

// Category filtering tags
const filterTags = document.querySelectorAll('.legend-tag');
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        currentCategoryFilter = tag.dataset.category;
        renderChart();
        renderLog();
        
        // Reset selection if it gets filtered out
        if (selectedAttemptIndex !== null) {
            const currentSelected = attemptsData[selectedAttemptIndex];
            if (currentCategoryFilter !== 'all' && currentSelected.category !== currentCategoryFilter) {
                selectAttempt(null);
            }
        }
    });
});

// Search input listener
logSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderChart();
    renderLog();
    
    // Reset selection if matches search criteria fail
    if (selectedAttemptIndex !== null) {
        const d = attemptsData[selectedAttemptIndex];
        const matches = searchQuery === '' || 
                        d.note.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (d.wave && d.wave.toString().includes(searchQuery)) ||
                        d.attempt.toString().includes(searchQuery);
        if (!matches) {
            selectAttempt(null);
        }
    }
});

// Navigation buttons on detail card
prevBtn.addEventListener('click', () => {
    if (selectedAttemptIndex === null) return;
    let nextIndex = selectedAttemptIndex;
    
    // Find previous non-filtered, matching search attempt
    do {
        nextIndex = (nextIndex - 1 + attemptsData.length) % attemptsData.length;
        const d = attemptsData[nextIndex];
        const isFiltered = currentCategoryFilter !== 'all' && d.category !== currentCategoryFilter;
        const matchesSearch = searchQuery === '' || 
                              d.note.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (d.wave && d.wave.toString().includes(searchQuery)) ||
                              d.attempt.toString().includes(searchQuery);
        if (!isFiltered && matchesSearch) {
            selectAttempt(nextIndex);
            break;
        }
    } while (nextIndex !== selectedAttemptIndex);
});

nextBtn.addEventListener('click', () => {
    if (selectedAttemptIndex === null) return;
    let nextIndex = selectedAttemptIndex;
    
    // Find next non-filtered, matching search attempt
    do {
        nextIndex = (nextIndex + 1) % attemptsData.length;
        const d = attemptsData[nextIndex];
        const isFiltered = currentCategoryFilter !== 'all' && d.category !== currentCategoryFilter;
        const matchesSearch = searchQuery === '' || 
                              d.note.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (d.wave && d.wave.toString().includes(searchQuery)) ||
                              d.attempt.toString().includes(searchQuery);
        if (!isFiltered && matchesSearch) {
            selectAttempt(nextIndex);
            break;
        }
    } while (nextIndex !== selectedAttemptIndex);
});

// Victory button on initial detail card state
viewVictoryBtn.addEventListener('click', () => {
    // Attempt 41 is at index 40
    selectAttempt(40);
});

// Toggle trendline button
toggleTrendBtn.addEventListener('click', () => {
    showTrendline = !showTrendline;
    if (showTrendline) {
        toggleTrendBtn.classList.add('active');
    } else {
        toggleTrendBtn.classList.remove('active');
    }
    renderChart();
});

// Export PNG button
exportPngBtn.addEventListener('click', exportToPNG);


/* Background Embers Animation */
const canvas = document.getElementById('embers-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 45;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Distribute initially across screen
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 20;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 0.8 + 0.3);
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.life = Math.random() * 300 + 200;
        // Ember red/orange colors
        const hues = [0, 15, 30, 45];
        this.hue = hues[Math.floor(Math.random() * hues.length)];
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 30) * 0.1;
        this.life--;
        
        if (this.y < -10 || this.life <= 0) {
            this.reset();
        }
    }
    
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Gradient fill for glowing ember look
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        grad.addColorStop(0, `hsla(${this.hue}, 100%, 75%, ${this.opacity})`);
        grad.addColorStop(0.5, `hsla(${this.hue}, 100%, 55%, ${this.opacity * 0.8})`);
        grad.addColorStop(1, `hsla(${this.hue}, 100%, 35%, 0)`);
        
        ctx.fillStyle = grad;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
        ctx.fill();
        ctx.restore();
    }
}

function initEmbers() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    animateEmbers();
}

function animateEmbers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    requestAnimationFrame(animateEmbers);
}


/* Initialize dashboard */
window.addEventListener('DOMContentLoaded', () => {
    renderChart();
    renderLog();
    initEmbers();
});
