(function () {
  var DESIGN_WIDTH = 1728;
  var DESIGN_HEIGHT = 12066;

  function updateScale(attempt) {
    var scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
    var shell = document.getElementById("wms-responsive-shell");

    document.documentElement.style.setProperty("--wms-scale", String(scale));

    if (shell) {
      shell.style.height = DESIGN_HEIGHT * scale + "px";
    } else if (attempt < 20) {
      requestAnimationFrame(function () {
        updateScale(attempt + 1);
      });
    }
  }

  function bindHomeLink(attempt) {
    var brand = Array.prototype.find.call(
      document.querySelectorAll("p"),
      function (node) {
        return node.textContent && node.textContent.trim() === "Miki Yang";
      }
    );

    if (!brand) {
      if (attempt < 20) {
        requestAnimationFrame(function () {
          bindHomeLink(attempt + 1);
        });
      }
      return;
    }

    var target = brand.closest('[data-name="Container"]') || brand;
    var goHome = function () {
      window.location.href = "/";
    };

    target.id = "wms-home-link";
    target.setAttribute("role", "link");
    target.setAttribute("tabindex", "0");
    target.setAttribute("aria-label", "返回首页");
    target.addEventListener("click", goHome);
    target.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goHome();
      }
    });
  }

  function init() {
    updateScale(0);
    bindHomeLink(0);
  }

  window.addEventListener(
    "resize",
    function () {
      updateScale(0);
    },
    { passive: true }
  );
  window.addEventListener(
    "orientationchange",
    function () {
      updateScale(0);
    },
    { passive: true }
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
