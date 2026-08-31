(function () {
  document.querySelectorAll(".nav a").forEach(function (a) {
    var here = location.pathname.split("/").pop() || "index.html";
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "home.html")) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
