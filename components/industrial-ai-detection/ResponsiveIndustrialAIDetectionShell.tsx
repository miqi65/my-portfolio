"use client";

import { useEffect, useRef, useState } from "react";
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
  const [contentHeight, setContentHeight] = useState(CANVAS_HEIGHT);
  const canvasRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const measureContent = () => {
      const canvas = canvasRef.current;
      const footer = canvas?.querySelector<HTMLElement>("[data-project-next]");

      if (!canvas || !footer || scale <= 0) {
        return;
      }

      const canvasRect = canvas.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const nextHeight = Math.ceil((footerRect.bottom - canvasRect.top) / scale);

      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        setContentHeight(Math.min(CANVAS_HEIGHT, nextHeight));
      }
    };

    const frame = window.requestAnimationFrame(measureContent);
    window.addEventListener("resize", measureContent);
    window.visualViewport?.addEventListener("resize", measureContent);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measureContent);
      window.visualViewport?.removeEventListener("resize", measureContent);
    };
  }, [scale]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#111]">
      <div
        data-industrial-ai-shell
        className="relative mx-auto w-full overflow-hidden"
        style={{
          maxWidth: CANVAS_WIDTH,
          height: Math.ceil(contentHeight * scale),
        }}
      >
        <div
          data-industrial-ai-canvas
          ref={canvasRef}
          className="absolute left-0 top-0"
          style={{
            width: CANVAS_WIDTH,
            height: contentHeight,
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
