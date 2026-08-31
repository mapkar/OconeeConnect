(function () {
  var KEY = "oc.theme";

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function apply(theme) {
    if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      var light = theme === "light";
      btn.setAttribute("aria-pressed", light ? "true" : "false");
      btn.textContent = light ? "DARK" : "LIGHT";
      btn.setAttribute("aria-label", light ? "Switch to dark terminal" : "Switch to light terminal");
    });
  }

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  apply(saved() === "light" ? "light" : "dark");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    var next = current() === "light" ? "dark" : "light";
    try { localStorage.setItem(KEY, next); } catch (err) {}
    apply(next);
  });

  document.querySelectorAll(".nav a").forEach(function (a) {
    var here = location.pathname.split("/").pop() || "index.html";
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "home.html")) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
