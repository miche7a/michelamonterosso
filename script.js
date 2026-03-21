/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PROJECT META HELPER
   Call this on any project page to auto-populate
   type/client/year from projects.js:

     injectProjectMeta('project-partsradet');

   Requires: id="meta-type", id="meta-client", id="meta-year"
   on the .meta-value elements in the HTML.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function injectProjectMeta(slug) {
  if (typeof PROJECTS === 'undefined') return;
  var project = PROJECTS.find(function(p) { return p.slug === slug; });
  if (!project) return;
  var typeEl   = document.getElementById('meta-type');
  var clientEl = document.getElementById('meta-client');
  var yearEl   = document.getElementById('meta-year');
  if (typeEl)   typeEl.textContent   = project.type;
  if (clientEl) clientEl.textContent = project.client;
  if (yearEl)   yearEl.textContent   = String(project.year);
  document.title = project.title + ' — Michela Monterosso';
}

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
  svgOff: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA1NSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOSIgc3Ryb2tlPSIjMTExMTEwIi8+CjxyZWN0IHg9IjUuNSIgeT0iNS41IiB3aWR0aD0iOSIgaGVpZ2h0PSI5IiBmaWxsPSIjMTExMTEwIiBzdHJva2U9IiMxMTExMTAiLz4KPHBhdGggZD0iTTQxLjEyOTMgMTAuMDkwOUM0MS4xMjkzIDEwLjcwNDUgNDEuMDE4NSAxMS4yMzQ4IDQwLjc5NjkgMTEuNjgxOEM0MC41NzUzIDEyLjEyODggNDAuMjcxMyAxMi40NzM1IDM5Ljg4NDkgMTIuNzE1OUMzOS40OTg2IDEyLjk1ODMgMzkuMDU3MyAxMy4wNzk1IDM4LjU2MTEgMTMuMDc5NUMzOC4wNjQ5IDEzLjA3OTUgMzcuNjIzNiAxMi45NTgzIDM3LjIzNzIgMTIuNzE1OUMzNi44NTA5IDEyLjQ3MzUgMzYuNTQ2OSAxMi4xMjg4IDM2LjMyNTMgMTEuNjgxOEMzNi4xMDM3IDExLjIzNDggMzUuOTkyOSAxMC43MDQ1IDM1Ljk5MjkgMTAuMDkwOUMzNS45OTI5IDkuNDc3MjcgMzYuMTAzNyA4Ljk0Njk3IDM2LjMyNTMgOC41QzM2LjU0NjkgOC4wNTMwMyAzNi44NTA5IDcuNzA4MzMgMzcuMjM3MiA3LjQ2NTkxQzM3LjYyMzYgNy4yMjM0OCAzOC4wNjQ5IDcuMTAyMjcgMzguNTYxMSA3LjEwMjI3QzM5LjA1NzMgNy4xMDIyNyAzOS40OTg2IDcuMjIzNDggMzkuODg0OSA3LjQ2NTkxQzQwLjI3MTMgNy43MDgzMyA0MC41NzUzIDguMDUzMDMgNDAuNzk2OSA4LjVDNDEuMDE4NSA4Ljk0Njk3IDQxLjEyOTMgOS40NzcyNyA0MS4xMjkzIDEwLjA5MDlaTTQwLjQ0NzQgMTAuMDkwOUM0MC40NDc0IDkuNTg3MTIgNDAuMzYzMiA5LjE2MTkzIDQwLjE5NDYgOC44MTUzNEM0MC4wMjc5IDguNDY4NzUgMzkuODAxNiA4LjIwNjQ0IDM5LjUxNTYgOC4wMjg0MUMzOS4yMzE1IDcuODUwMzggMzguOTEzNCA3Ljc2MTM2IDM4LjU2MTEgNy43NjEzNkMzOC4yMDg4IDcuNzYxMzYgMzcuODg5NyA3Ljg1MDM4IDM3LjYwMzcgOC4wMjg0MUMzNy4zMTk2IDguMjA2NDQgMzcuMDkzMyA4LjQ2ODc1IDM2LjkyNDcgOC44MTUzNEMzNi43NTggOS4xNjE5MyAzNi42NzQ3IDkuNTg3MTIgMzYuNjc0NyAxMC4wOTA5QzM2LjY3NDcgMTAuNTk0NyAzNi43NTggMTEuMDE5OSAzNi45MjQ3IDExLjM2NjVDMzcuMDkzMyAxMS43MTMxIDM3LjMxOTYgMTEuOTc1NCAzNy42MDM3IDEyLjE1MzRDMzcuODg5NyAxMi4zMzE0IDM4LjIwODggMTIuNDIwNSAzOC41NjExIDEyLjQyMDVDMzguOTEzNCAxMi40MjA1IDM5LjIzMTUgMTIuMzMxNCAzOS41MTU2IDEyLjE1MzRDMzkuODAxNiAxMS45NzU0IDQwLjAyNzkgMTEuNzEzMSA0MC4xOTQ2IDExLjM2NjVDNDAuMzYzMiAxMS4wMTk5IDQwLjQ0NzQgMTAuNTk0NyA0MC40NDc0IDEwLjA5MDlaTTQyLjMxMzkgMTNWNy4xODE4Mkg0NS44MDI2VjcuODA2ODJINDMuMDE4NVY5Ljc3MjczSDQ1LjU0MTJWMTAuMzk3N0g0My4wMTg1VjEzSDQyLjMxMzlaTTQ3LjAwOTIgMTNWNy4xODE4Mkg1MC40OTc5VjcuODA2ODJINDcuNzEzOFY5Ljc3MjczSDUwLjIzNjVWMTAuMzk3N0g0Ny43MTM4VjEzSDQ3LjAwOTJaIiBmaWxsPSIjMTExMTEwIi8+Cjwvc3ZnPgo=',
  svgOn:  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA1NSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOSIgZmlsbD0iIzExMTExMCIgc3Ryb2tlPSIjMTExMTEwIi8+CjxyZWN0IHg9IjQwLjUiIHk9IjUuNSIgd2lkdGg9IjkiIGhlaWdodD0iOSIgZmlsbD0iI0VERURFRCIgc3Ryb2tlPSIjRURFREVEIi8+CjxwYXRoIGQ9Ik05LjQ5NjQ1IDEwLjA5MDlDOS40OTY0NSAxMC43MDQ1IDkuMzg1NjUgMTEuMjM0OCA5LjE2NDA2IDExLjY4MThDOC45NDI0NyAxMi4xMjg4IDguNjM4NDkgMTIuNDczNSA4LjI1MjEzIDEyLjcxNTlDNy44NjU3NyAxMi45NTgzIDcuNDI0NDggMTMuMDc5NSA2LjkyODI3IDEzLjA3OTVDNi40MzIwNiAxMy4wNzk1IDUuOTkwNzcgMTIuOTU4MyA1LjYwNDQgMTIuNzE1OUM1LjIxODA0IDEyLjQ3MzUgNC45MTQwNiAxMi4xMjg4IDQuNjkyNDcgMTEuNjgxOEM0LjQ3MDg4IDExLjIzNDggNC4zNjAwOSAxMC43MDQ1IDQuMzYwMDkgMTAuMDkwOUM0LjM2MDA5IDkuNDc3MjcgNC40NzA4OCA4Ljk0Njk3IDQuNjkyNDcgOC41QzQuOTE0MDYgOC4wNTMwMyA1LjIxODA0IDcuNzA4MzMgNS42MDQ0IDcuNDY1OTFDNS45OTA3NyA3LjIyMzQ4IDYuNDMyMDYgNy4xMDIyNyA2LjkyODI3IDcuMTAyMjdDNy40MjQ0OCA3LjEwMjI3IDcuODY1NzcgNy4yMjM0OCA4LjI1MjEzIDcuNDY1OTFDOC42Mzg0OSA3LjcwODMzIDguOTQyNDcgOC4wNTMwMyA5LjE2NDA2IDguNUM5LjM4NTY1IDguOTQ2OTcgOS40OTY0NSA5LjQ3NzI3IDkuNDk2NDUgMTAuMDkwOVpNOC44MTQ2MyAxMC4wOTA5QzguODE0NjMgOS41ODcxMiA4LjczMDM1IDkuMTYxOTMgOC41NjE3OSA4LjgxNTM0QzguMzk1MTIgOC40Njg3NSA4LjE2ODggOC4yMDY0NCA3Ljg4MjgxIDguMDI4NDFDNy41OTg3MiA3Ljg1MDM4IDcuMjgwNTQgNy43NjEzNiA2LjkyODI3IDcuNzYxMzZDNi41NzU5OSA3Ljc2MTM2IDYuMjU2ODcgNy44NTAzOCA1Ljk3MDg4IDguMDI4NDFDNS42ODY3OSA4LjIwNjQ0IDUuNDYwNDYgOC40Njg3NSA1LjI5MTkgOC44MTUzNEM1LjEyNTI0IDkuMTYxOTMgNS4wNDE5IDkuNTg3MTIgNS4wNDE5IDEwLjA5MDlDNS4wNDE5IDEwLjU5NDcgNS4xMjUyNCAxMS4wMTk5IDUuMjkxOSAxMS4zNjY1QzUuNDYwNDYgMTEuNzEzMSA1LjY4Njc5IDExLjk3NTQgNS45NzA4OCAxMi4xNTM0QzYuMjU2ODcgMTIuMzMxNCA2LjU3NTk5IDEyLjQyMDUgNi45MjgyNyAxMi40MjA1QzcuMjgwNTQgMTIuNDIwNSA3LjU5ODcyIDEyLjMzMTQgNy44ODI4MSAxMi4xNTM0QzguMTY4OCAxMS45NzU0IDguMzk1MTIgMTEuNzEzMSA4LjU2MTc5IDExLjM2NjVDOC43MzAzNSAxMS4wMTk5IDguODE0NjMgMTAuNTk0NyA4LjgxNDYzIDEwLjA5MDlaTTE1LjI5NDcgNy4xODE4MlYxM0gxNC42MTI5TDExLjQ0MjUgOC40MzE4MkgxMS4zODU3VjEzSDEwLjY4MTFWNy4xODE4MkgxMS4zNjI5TDE0LjU0NDcgMTEuNzYxNEgxNC42MDE2VjcuMTgxODJIMTUuMjk0N1oiIGZpbGw9IiNFREVERUQiLz4KPC9zdmc+Cg==',

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
