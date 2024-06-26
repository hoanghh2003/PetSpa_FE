"use strict";
window.isRtl = window.Helpers.isRtl(),
window.isDarkStyle = window.Helpers.isDarkStyle(),
function() {
    const e = document.getElementById("navbarSupportedContent")
      , a = document.querySelector(".layout-navbar")
      , t = document.querySelectorAll(".navbar-nav .nav-link");
    function o() {
        e.classList.remove("show")
    }
    setTimeout(function() {
        window.Helpers.initCustomOptionCheck()
    }, 1e3),
    "undefined" != typeof Waves && (Waves.init(),
    Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])", ["waves-light"]),
    Waves.attach("[class*='btn-outline-']"),
    Waves.attach("[class*='btn-label-']"),
    Waves.attach(".pagination .page-item .page-link")),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) {
        return new bootstrap.Tooltip(t)
    }),
    isRtl && Helpers._addClass("dropdown-menu-end", document.querySelectorAll("#layout-navbar .dropdown-menu")),
    window.addEventListener("scroll", t=>{
        10 < window.scrollY ? a.classList.add("navbar-active") : a.classList.remove("navbar-active")
    }
    ),
    window.addEventListener("load", t=>{
        10 < window.scrollY ? a.classList.add("navbar-active") : a.classList.remove("navbar-active")
    }
    ),
    document.addEventListener("click", function(t) {
        e.contains(t.target) || o()
    }),
    t.forEach(e=>{
        e.addEventListener("click", t=>{
            e.classList.contains("dropdown-toggle") ? t.preventDefault() : o()
        }
        )
    }
    ),
    isRtl && Helpers._addClass("dropdown-menu-end", document.querySelectorAll(".dropdown-menu"));
    var l, n = document.querySelectorAll(".nav-link.mega-dropdown"), n = (n && n.forEach(t=>{
        new MegaDropdown(t)
    }
    ),
    document.querySelector(".dropdown-style-switcher")), s = localStorage.getItem("templateCustomizer-" + templateName + "--Style") || (window.templateCustomizer?.settings?.defaultStyle ?? "light");
    window.templateCustomizer && n && ([].slice.call(n.children[1].querySelectorAll(".dropdown-item")).forEach(function(t) {
        t.addEventListener("click", function() {
            var t = this.getAttribute("data-theme");
            "light" === t ? window.templateCustomizer.setStyle("light") : "dark" === t ? window.templateCustomizer.setStyle("dark") : window.templateCustomizer.setStyle("system")
        })
    }),
    n = n.querySelector("i"),
    "light" === s ? (n.classList.add("ti-sun"),
    new bootstrap.Tooltip(n,{
        title: "Light Mode",
        fallbackPlacements: ["bottom"]
    })) : "dark" === s ? (n.classList.add("ti-moon"),
    new bootstrap.Tooltip(n,{
        title: "Dark Mode",
        fallbackPlacements: ["bottom"]
    })) : (n.classList.add("ti-device-desktop"),
    new bootstrap.Tooltip(n,{
        title: "System Mode",
        fallbackPlacements: ["bottom"]
    }))),
    "system" === (l = s) && (l = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    [].slice.call(document.querySelectorAll("[data-app-" + l + "-img]")).map(function(t) {
        var e = t.getAttribute("data-app-" + l + "-img");
        t.src = assetsPath + "img/" + e
    })
}();
