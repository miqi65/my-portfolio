const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const auditDir = path.join(root, "audit/billy-sweeney");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(auditDir, relativePath), "utf8"));
}

function writeJson(relativePath, value) {
  fs.writeFileSync(
    path.join(auditDir, relativePath),
    JSON.stringify(value, null, 2) + "\n",
  );
}

function fileSize(relativePath) {
  return fs.statSync(path.join(auditDir, relativePath)).size;
}

function pick(items, predicate) {
  const item = items.find(predicate);
  if (!item) return null;
  return {
    element: item.tag || null,
    className: item.className || null,
    sample: item.text || null,
    typography: item.typography || null,
  };
}

const capture = readJson("raw/capture.json");
const layout = readJson("layout.json");
const inlineSvgs = readJson("raw/svgs.json");

const typography = {
  capturedAt: capture.capturedAt,
  source: "Computed styles from the stable rendered page at https://billysweeney.com/",
  font: {
    cssAlias: "Billy Sans",
    sourceFamily: "Roobert Medium",
    declaredWeight: 500,
    format: "WOFF2",
    sourceUrl: "https://billysweeney.com/assets/fonts/Roobert-Medium.woff2",
    localFileArchived: false,
    reason: "Commercial font binary intentionally not copied; CSS declaration and request metadata are archived.",
    fallbackStack: "system-ui, sans-serif",
  },
  viewportStyles: {},
};

for (const viewportKey of Object.keys(capture.viewports)) {
  const data = capture.viewports[viewportKey].data;
  const headings = data.headings || [];
  const paragraphs = data.paragraphs || [];
  const anchors = data.anchors || [];
  const headerLinks = (layout[viewportKey] && layout[viewportKey].header && layout[viewportKey].header.links) || [];

  typography.viewportStyles[viewportKey] = {
    viewport: data.viewport,
    logo: headerLinks[1]
      ? {
          element: headerLinks[1].tag,
          className: headerLinks[1].className,
          sample: headerLinks[1].text,
          typography: headerLinks[1].typography,
        }
      : null,
    navigation: pick(anchors, function (item) {
      return ["Intro", "Work", "Values", "Background", "References", "About", "Contact"].includes(item.text);
    }),
    hero: pick(headings, function (item) {
      return item.text && item.text.indexOf("Hello there") === 0;
    }),
    audienceTab: pick(paragraphs, function (item) {
      return item.text === "For anyone";
    }) || pick(anchors, function (item) {
      return item.text === "For anyone";
    }),
    valuesTitle: pick(headings, function (item) {
      return item.text === "Useful";
    }),
    experienceCompany: pick(headings, function (item) {
      return item.className === "company";
    }),
    experienceRole: pick(headings, function (item) {
      return item.className === "role";
    }),
    experienceDescription: pick(paragraphs, function (item) {
      return item.text && item.text.indexOf("Led design") >= 0;
    }) || pick(paragraphs, function (item) {
      return item.text && item.text.length > 80;
    }),
    referenceQuote: pick(headings, function (item) {
      return item.className === "quote";
    }),
    accoladeHeading: pick(headings, function (item) {
      return item.text === "Accolades";
    }),
    accoladeList: pick(paragraphs, function (item) {
      return item.text && item.text.indexOf("AIGA") >= 0;
    }),
    pressList: pick(paragraphs, function (item) {
      return item.text && item.text.indexOf("Fast Company") >= 0;
    }),
    footerStatus: pick(paragraphs, function (item) {
      return item.text && item.text.indexOf("recently joined Figma") >= 0;
    }),
    footerHeadline: pick(headings, function (item) {
      return item.text && item.text.indexOf("joined Figma") >= 0;
    }),
  };
}

const externalAssets = [
  {
    id: "work-collage-1440",
    url: "https://billysweeney.com/assets/work/Billy-Sweeney-work-collage-1440.jpg",
    localPath: "assets/work/Billy-Sweeney-work-collage-1440.jpg",
    type: "image/jpeg",
    width: 1440,
    height: 2960,
    usage: "Work section responsive background below 1000px viewport width",
    alt: null,
  },
  {
    id: "work-collage-2880",
    url: "https://billysweeney.com/assets/work/Billy-Sweeney-work-collage-2880.jpg",
    localPath: "assets/work/Billy-Sweeney-work-collage-2880.jpg",
    type: "image/jpeg",
    width: 2880,
    height: 5920,
    usage: "Work section responsive background from 1000px through 1999px viewport width",
    alt: null,
  },
  {
    id: "work-collage-mask",
    url: "https://billysweeney.com/assets/work/Billy-Sweeney-work-collage-shape.svg",
    localPath: "assets/work/Billy-Sweeney-work-collage-shape.svg",
    type: "image/svg+xml",
    width: 2880,
    height: 5920,
    usage: "CSS mask for the Work collage silhouette",
    alt: null,
  },
  {
    id: "portrait",
    url: "https://billysweeney.com/assets/profile/Billy-Sweeney-1600x1600.jpg",
    localPath: "assets/portrait/Billy-Sweeney-1600x1600.jpg",
    type: "image/jpeg",
    width: 1600,
    height: 1600,
    usage: "Contact section portrait",
    alt: "Profile photo of Billy Sweeney",
  },
  {
    id: "favicon",
    url: "https://billysweeney.com/assets/app/favicon-32x32.png",
    localPath: "assets/icons/favicon-32x32.png",
    type: "image/png",
    width: 32,
    height: 32,
    usage: "Browser shortcut icon",
    alt: null,
  },
  {
    id: "sharing-image",
    url: "https://billysweeney.com/assets/app/sharing-image-2400x2400.png",
    localPath: "assets/misc/sharing-image-2400x2400.png",
    type: "image/png",
    width: 2400,
    height: 2400,
    usage: "Open Graph and Twitter sharing image",
    alt: null,
  },
].map(function (asset) {
  return Object.assign({}, asset, {
    archived: true,
    fileSize: fileSize(asset.localPath),
  });
});

const inlineAssets = inlineSvgs.map(function (item) {
  const classMatch = (item.outerHTML || "").match(/<svg[^>]*class=["']([^"']+)["']/i);
  const classes = classMatch ? classMatch[1].split(/\s+/).filter(Boolean) : [];
  const name = classes.filter(function (namePart) {
    return namePart !== "icon";
  }).join("-") || "inline-svg-" + item.index;
  const isControl = name === "theme" || name === "grid";
  return {
    id: "inline-svg-" + item.index + "-" + name,
    url: null,
    localPath: "raw/svgs.json#" + item.index,
    type: "image/svg+xml; inline",
    width: item.rect ? item.rect.width : null,
    height: item.rect ? item.rect.height : null,
    usage: isControl ? "Fixed theme/grid control icon" : "Background timeline company icon",
    alt: null,
    archived: true,
    fileSize: Buffer.byteLength(item.outerHTML || "", "utf8"),
  };
});

const assetsManifest = {
  capturedAt: capture.capturedAt,
  source: "https://billysweeney.com/",
  counts: {
    archivedExternalFiles: externalAssets.length,
    archivedInlineSvgDefinitions: inlineAssets.length,
    totalVisualDefinitions: externalAssets.length + inlineAssets.length,
    archivedStylesheets: 8,
    archivedFirstPartyScripts: 4,
  },
  externalAssets: externalAssets,
  inlineSvgAssets: inlineAssets,
  recordedButNotArchived: [
    {
      id: "roobert-medium-font",
      url: "https://billysweeney.com/assets/fonts/Roobert-Medium.woff2",
      type: "font/woff2",
      usage: "Billy Sans, weight 500",
      reason: "Commercial font binary intentionally not copied.",
    },
    {
      id: "work-collage-5760",
      url: "https://billysweeney.com/assets/work/Billy-Sweeney-work-collage-5760.jpg",
      type: "image/jpeg",
      usage: "CSS-declared Work background at 2000px and wider",
      reason: "No requested audit viewport loaded this source, so it was recorded but not downloaded.",
    },
  ],
};

writeJson("typography.json", typography);
writeJson("assets-manifest.json", assetsManifest);

console.log("Wrote audit/billy-sweeney/typography.json");
console.log("Wrote audit/billy-sweeney/assets-manifest.json");
