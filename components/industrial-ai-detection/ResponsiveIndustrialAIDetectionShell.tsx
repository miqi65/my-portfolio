"use client";

import { useEffect, useState } from "react";
import IndustrialAIDetectionPage from "./IndustrialAIDetectionPage";

const CANVAS_WIDTH = 1728;
const CANVAS_HEIGHT = 10430;

function getViewportWidth() {
  if (typeof window === "undefined") {
    return CANVAS_WIDTH;
  }

  return window.visualViewport?.width ?? window.innerWidth;
}

export default function ResponsiveIndustrialAIDetectionShell() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(Math.min(1, getViewportWidth() / CANVAS_WIDTH));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#111]">
      <div
        data-industrial-ai-shell
        className="relative mx-auto w-full overflow-hidden"
        style={{
          maxWidth: CANVAS_WIDTH,
          height: Math.ceil(CANVAS_HEIGHT * scale),
        }}
      >
        <div
          data-industrial-ai-canvas
          className="absolute left-0 top-0"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <IndustrialAIDetectionPage />
        </div>
      </div>
    </div>
  );
}
