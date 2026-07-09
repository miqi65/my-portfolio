(function () {
  var DESIGN_WIDTH = 1728;
  var DESIGN_HEIGHT = 12066;

  function updateScale(attempt) {
    var scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
    var shell = document.getElementById("wms-responsive-shell");
    var stage = document.getElementById("wms-responsive-stage");
    var contentHeight = getContentHeight(scale);

    document.documentElement.style.setProperty("--wms-scale", String(scale));

    if (shell) {
      shell.style.height = contentHeight * scale + "px";
      if (stage) {
        stage.style.height = contentHeight + "px";
      }
      if (contentHeight === DESIGN_HEIGHT && attempt < 20) {
        requestAnimationFrame(function () {
          updateScale(attempt + 1);
        });
      }
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

  function findParagraphByText(text) {
    return Array.prototype.find.call(
      document.querySelectorAll("p"),
      function (node) {
        return node.textContent && node.textContent.trim() === text;
      }
    );
  }

  function findFooterBar() {
    var collection = findParagraphByText("COLLECTION OF WORK");
    var copyright = findParagraphByText("COPYRIGHT 2026");
    var footerBar = collection && collection.parentElement;

    while (footerBar && copyright && !footerBar.contains(copyright)) {
      footerBar = footerBar.parentElement;
    }

    return footerBar;
  }

  function getContentHeight(scale) {
    var stage = document.getElementById("wms-responsive-stage");
    var footerBar = findFooterBar();

    if (!stage || !footerBar || scale <= 0) {
      return DESIGN_HEIGHT;
    }

    var stageRect = stage.getBoundingClientRect();
    var footerRect = footerBar.getBoundingClientRect();
    var nextHeight = Math.ceil((footerRect.bottom - stageRect.top) / scale);

    if (!Number.isFinite(nextHeight) || nextHeight <= 0) {
      return DESIGN_HEIGHT;
    }

    return Math.min(DESIGN_HEIGHT, nextHeight);
  }

  function findAncestorContainingImage(node) {
    var current = node;
    var depth = 0;

    while (current && depth < 12) {
      if (current.querySelectorAll && current.querySelectorAll("img").length) {
        return current;
      }
      current = current.parentElement;
      depth += 1;
    }

    return null;
  }

  function bindNextProject(attempt) {
    var title = findParagraphByText("PCBA 插件机控制系统");

    if (!title) {
      if (attempt < 20) {
        requestAnimationFrame(function () {
          bindNextProject(attempt + 1);
        });
      }
      return;
    }

    var nextHref = "/work/gps-2";
    var nextTitle = "载体轨迹定位系统";
    var nextHero = "/images/gps-2/hero.png";
    var target = findAncestorContainingImage(title) || title;
    var images = Array.prototype.slice.call(target.querySelectorAll("img"));

    if (!images.length) {
      images = Array.prototype.filter.call(document.querySelectorAll("img"), function (image) {
        return image.src.indexOf("3829fadc0e9472939fa554b8f2710edd317813fe") !== -1 ||
          image.src.indexOf("336dc2de0822a7a75df8a866a9095bc6d6d4c1e1") !== -1;
      });
    }

    title.textContent = nextTitle;

    if (images[0]) {
      images[0].src = nextHero;
      images[0].alt = nextTitle + " hero";
    }
    if (images[1]) {
      images[1].src = nextHero;
      images[1].alt = "";
      images[1].style.display = "none";
    }

    target.id = "wms-next-project-link";
    target.setAttribute("role", "link");
    target.setAttribute("tabindex", "0");
    target.setAttribute("aria-label", "打开下一个项目：" + nextTitle);
    target.addEventListener("click", function () {
      window.location.href = nextHref;
    });
    target.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = nextHref;
      }
    });
  }

  function bindScrollTop(attempt) {
    var footerBar = findFooterBar();

    if (!footerBar) {
      if (attempt < 20) {
        requestAnimationFrame(function () {
          bindScrollTop(attempt + 1);
        });
      }
      return;
    }

    if (document.getElementById("wms-scroll-top")) {
      return;
    }

    var button = document.createElement("button");
    button.id = "wms-scroll-top";
    button.type = "button";
    button.setAttribute("aria-label", "返回顶部");
    button.textContent = "↑";
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    footerBar.appendChild(button);
    updateScale(0);
  }

  function init() {
    updateScale(0);
    bindHomeLink(0);
    bindNextProject(0);
    bindScrollTop(0);
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
