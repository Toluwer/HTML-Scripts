/* ==========================================================================
   HTML Scripts CDN — app.js
   -------------------------------------------------------------------------
   Today : theme persistence and the header toggle, nothing more.
   Later : the file listing (files/) and the full-page viewer with a back
           button. The blank state stays in place until real files arrive.
   ========================================================================== */

(function () {
  "use strict";

  var THEME_KEY = "html-scripts-theme";
  var BROWSER_COLOR = { light: "#f6f5f1", dark: "#141311" };

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function readTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  /* Paint the theme everywhere it matters: root attribute, browser
     interface color (§2c), and the toggle's accessible state. */
  function paintTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeMeta) {
      themeMeta.setAttribute("content", BROWSER_COLOR[theme]);
    }
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* private browsing — the choice simply won't persist */
    }
  }

  /* Reflect the pre-paint theme (applied in <head>) on the controls. */
  paintTheme(readTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = readTheme() === "dark" ? "light" : "dark";
      paintTheme(next);
      storeTheme(next);
    });
  }

  /* ---------------------------------------------------------------------
     Future work — deliberately not wired up yet.

     1. Listing : read a manifest (or index files/) and render one list
        row per HTML file — leading badge, name, meta, trailing arrow
        (UI Style Guide §9). The empty state above is replaced by the
        list once files exist.
     2. Viewer  : open a chosen file on its own full page with a back
        button that returns to this front page.
  --------------------------------------------------------------------- */
}());
