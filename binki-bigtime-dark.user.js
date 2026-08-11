// ==UserScript==
// @name binki-bigtime-dark
// @description A system theme-conditional dark theme for BigTime.
// @homepageURL https://github.com/binki/binki-bigtime-dark
// @version 1.0.2
// @match https://*.bigtime.net/bigtime
// @match https://*.bigtime.net/bigtime/*
// @match https://*.bigtime.net/Bigtime
// @match https://*.bigtime.net/Bigtime/*
// @match https://*.bigtime.net//bigtime
// @match https://*.bigtime.net//bigtime/*
// @match https://*.bigtime.net//Bigtime
// @match https://*.bigtime.net//Bigtime/*
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
  /* timers */
  .timer.timer.timer.timer.timer.timer,
  /* timesheet view */
  .dailyplanner .binder,
  .dailyplanner .page.page.page,
  .dailyplanner .page.page.page .header,
  .dailyplanner.dailyplanner.dailyplanner.dailyplanner.dailyplanner p,
  .dailyplanner.dailyplanner.dailyplanner.dailyplanner.dailyplanner a,
  .dailyplanner.dailyplanner.dailyplanner.dailyplanner.dailyplanner li,
  .dailyplanner.dailyplanner.dailyplanner.dailyplanner.dailyplanner ul,
  .dailyplanner .page .form_header_toolbar,
  /* general */ 
  .MuiTypography-root.MuiTypography-root,
  .popover-title.popover-title,
  .icon-print,
  .table-condensed > thead > tr > td,
  .table-condensed > thead > tr > th,
  .table-condensed > tbody > tr > td,
  .table-condensed > tbody > tr > th,
  .table > thead > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > th,
  .table > tbody > tr > td,
  .table.table-condensed > thead > tr > td,
  .table.table-condensed > thead > tr > th,
  .table.table-condensed > tbody > tr > td,
 .table .table-condensed > tbody > tr > th,
  /* combobox group headers */
  .bt_select_box li.group > span,
  /* reset color for headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  p {
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
  div:has(> [data-testid=sidebar_logo]) {
  	container-name: binki-sidebar;
    container-type: size;
  }
  [data-testid=sidebar_logo]::before {
    content: 'BigTime';
    font-size: larger;
    font-weight: bold;
  }
  @container binki-sidebar (width < 90px) {
    [data-testid=sidebar_logo]::before {
      content: 'BT';
    }
  }
  
  /* dialog */
  .MuiDialog-paper.MuiDialog-paper {
    background: black;
    color: #aaa;
    border: 1pt solid #888;
  }
  
  /* dividers */
  .MuiDivider-root.MuiDivider-root {
  	border-color: #444;
  }
  
  /* buttons */
  .btn.btn,
  .btn.btn-primary,
  .btn-group .dropdown-menu > li > a,
  .btn-group .dropdown-menu > li > a:hover,
  .bt_select_box > ul > li,
  .bt_select_box ul li.group:hover,
  .bt_select_box a {
    background: transparent;
    color: inherit;
  }
  .bt_select_box.open ul li.selected {
    background: #111;
    color: inherit;
    font-weight: bold;
  }
  .dropdown-menu.dropdown-menu.dropdown-menu.dropdown-menu.dropdown-menu.dropdown-menu,
  .dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle:active,
  .dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle:focus,
  .dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle.dropdown-toggle:hover {
    background: black;
    color: #aaa;
  }
  .btn-group .dropdown-menu > li > a:hover,
  .bt_select_box ul li.option:hover,
  .bt_select_box.open ul li.option.selected:hover{
    background: #222;
    color: inherit;
  }
  
  /* button / picker (date?) */
  .btn.picker-text,
  .btn-group.date-picker-container:hover,
  .btn-group.date-picker-container .picker-text:hover,
  .bootdate thead,
  .bootdate td,
  .bootdate thead tr:last-child {
    background: transparent;
    color: inherit;
  }
  .bootdate.dropdown-menu {
    background: black;
  }
  .bootdate td.day.new,
  .bootdate td.day.old {
  	color: #888;
    font-size: italic;
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
  
  /* inputs */
  /* textbox */
  .form-control,
  .appPage input.form-control,
  .appPage textarea.form-control,
  .bt_select_box .text_input,
  /* combobox dropdown, appears over other content so needs to be opaque */
  .bt-select.bt_select_box.bt_select_box.bt_select_box.bt_select_box > ul {
  	background: black;
    color: #aaa;
  }
  .form-control[disabled] {
    background: black !important;
    color: #888;
  }
  
  /* modal */
  .modal-content {
    background: black;
  }
  .modal-header {
  	background: transparent;
  }
  .modal-title.modal-title {
  	color: inherit;
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
  
  /* bottom-of-screen announcements “alerts” */
  .bt-alert.warning {
  	background: #220;
  }
  body .bt-alert,
  body .bt-alert p {
  	color: #bbb;
  }
  
  /* notifications (reminders/tasks/activities) */
  .intuitive-nav-modals .nav_app.activity .myActivity,
  body.bt-settings-frame.iframe-mode #myActivity .myActivity,
  .activityListScroll,
  .intuitive-nav-modals .nav_app.activity .myActivity .info .header,
  body.bt-settings-frame.iframe-mode #myActivity .footer_toolbar {
    background: transparent !important;
    color: inherit;
  }

  /* timers */
  .bt-icon-timer:not(:hover) {
  	filter: brightness(200%);
  }
  .appPage .popover-double-check {
  	background: black;
  }
  .appPage .popover-double-check .popover-content,
  .double-check-content {
    color: inherit;
  }
  
  /* timesheet */
  .dailyplanner.dailyplanner.dailyplanner.dailyplanner.dailyplanner label,
  .timesheet_wrapper.timesheet_wrapper .table-timesheet th {
    color: #888;
  }
  .timesheet_wrapper.timesheet_wrapper.timesheet_wrapper thead,
  .timesheet_wrapper.timesheet_wrapper.timesheet_wrapper tbody,
  .timesheet_wrapper .table-timesheet,
  .timesheet_wrapper .table-timesheet th.hours,
  .timesheet_wrapper .table-timesheet th.totalhours,
  .timesheet_wrapper .table-timesheet th.editor-col,
  .timesheet_wrapper .table-timesheet td.hours,
  .timesheet_wrapper .table-timesheet td.totalhours,
  .timesheet_wrapper .table-timesheet td.editor-col {
    background: transparent;
  }
  .timesheet_wrapper .table-timesheet td.col:hover,
  .timesheet_wrapper .table-timesheet td.hours:hover {
    background: #111;
  }
`;
  document.head.append(style);
})();
