/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   script.js — shared JS for all project pages
   Link from each project page:
   <script src="../script.js"></script>
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LAYOUT CONFIG
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
var layoutConfig = {
  leftAlign: false,   // ← true = all content left-aligned (no centering)
};

// Apply layout
if (layoutConfig.leftAlign) {
  document.body.classList.add('layout-left');
}

// Set accent colour
document.documentElement.style.setProperty('--mid', '#1E1EFF');

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TL;DR TOGGLE CONFIG
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
var tldrConfig = {
  enabled: true,   // ← false = hide toggle entirely, always show full content

  // SVG images for OFF and ON states
  // To swap: replace these data URLs with a new SVG's base64 string
  // Or use a regular image URL e.g. 'images/toggle-off.svg'
  svgOff:  + off_url + ,
  svgOn:   + on_url  + ,

  // Label shown next to the toggle
  label: 'TL;DR',
};

// ── TL;DR TOGGLE ──
function initTldr() {
  var widget = document.getElementById('tldr-toggle');
  var img    = document.getElementById('tldr-img');
  var label  = document.querySelector('.tldr-label');
  if (!widget) return;

  // Hide entire toggle if disabled
  if (!tldrConfig.enabled) {
    widget.style.display = 'none';
    // Make sure full content is always visible
    document.body.classList.remove('is-tldr');
    var full = document.querySelector('.content-full');
    if (full) full.style.display = 'block';
    return;
  }

  // Set label text
  if (label) label.textContent = tldrConfig.label;

  // Set SVG sources from config
  if (img) {
    img.src          = tldrConfig.svgOff;
    img.dataset.off  = tldrConfig.svgOff;
    img.dataset.on   = tldrConfig.svgOn;
  }
}

function toggleTldr() {
  var widget = document.getElementById('tldr-toggle');
  var img    = document.getElementById('tldr-img');
  if (!widget || !tldrConfig.enabled) return;
  var isOn = widget.classList.contains('is-on');
  if (isOn) {
    widget.classList.remove('is-on');
    document.body.classList.remove('is-tldr');
    if (img) img.src = tldrConfig.svgOff;
  } else {
    widget.classList.add('is-on');
    document.body.classList.add('is-tldr');
    if (img) img.src = tldrConfig.svgOn;
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initTldr);
