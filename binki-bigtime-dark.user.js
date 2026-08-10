// ==UserScript==
// @name binki-bigtime-dark
// @description A system theme-conditional dark theme for BigTime.
// @homepageURL https://github.com/binki/binki-bigtime-dark
// @version 1.0.1
// @match https://*.bigtime.net/bigtime
// @match https://*.bigtime.net/bigtime/*
// @match https://*.bigtime.net/Bigtime
// @match https://*.bigtime.net/Bigtime/*
// @match https://my.bigtime.net/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `
/* Base this query on a negative of light so that usage on a platform which doesn’t support color schemes gets dark (that’s why the user installed this script in the first place). */
@media not (prefers-color-scheme: light) {
  body {
    background: black;
    color: #aaa;
  }
  
  /* Elements which should let the background shine through. */
  /* left sidebar */
  #app > [data-testid=layout_wrapper],
  #app > [data-testid=layout_wrapper] > div,
  #app > [data-testid=layout_wrapper] > div > div > div,
  #app > [data-testid=layout_wrapper] > div > div > div > div,
  .sidebar-menu-item-title-wrapper > div,
  .sidebar-menu-item-title-wrapper > span,
  .sidebar-menu-item-title > p,
  .sidebar-menu-item-submenu-group-title > span,
  .MuiButtonBase-root.MuiButtonBase-root,
  /* top header */
  header[data-testid=top_nav],
  /* general */ 
  .MuiTypography-root.MuiTypography-root,
  .icon-print {
  	background: transparent;
    color: inherit;
  }
  
  /* unclickable things in a menu */
  .MuiTypography-root.MuiTypography-overline {
  	font-style: italic;
  }
  
  /* loading screen */
  .MuiBackdrop-root {
    background: transparent !important;
  }

  /* The logo/title area. */
  [data-testid=sidebar_logo]::before {
    content: 'BigTime';
    font-size: larger;
    font-weight: bold;
  }
  
  
  /* dividers */
  .MuiDivider-root.MuiDivider-root {
  	border-color: #444;
  }
  
  /* buttons */
  .btn.btn,
  .btn.btn-primary {
    background: transparent;
    color: inherit;
  }
  
  /* button / picker (date?) */
  .btn.picker-text,
  .btn-group.date-picker-container:hover,
  .btn-group.date-picker-container .picker-text:hover {
    background: transparent;
    color: inherit;
  }
  
  /* icons */
  .icon-arrow-left {
  	background: transparent;
  }
  .icon-arrow-left::after {
  	content: '<';
    font-size: 18px;
  }
  .icon-arrow-right {
  	background: transparent;
  }
  .icon-arrow-right::after {
  	content: '>';
    font-size: 18px;
  }
  
  /* toggles */
  .bt-toggle .toggleOption.toggleOption {
    background: transparent;
    border-color: #aaa;
    border-style: solid;
    border-width: 1pt;
  }
  .bt-toggle .toggleOption.toggleOption:first-child {
    border-left-style: solid;
  }
  .bt-toggle .toggleOption.toggleOption .toggleLabel {
    color: #aaa;
  }
  .bt-toggle .selectedOption.selectedOption::after {
    background: transparent;
    color: inherit;
    height: 22px;
    border-color: #48a;
    border-style: solid;
    border-width: 1pt;
    top: -11px;
  }
  .bt-toggle .toggleOption.active {
    color: inherit;
  }
`;
  document.head.append(style);
})();
