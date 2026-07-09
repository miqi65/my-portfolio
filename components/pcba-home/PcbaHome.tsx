"use client";

import { useEffect, useRef, useState } from "react";
import Pcba from "./Pcba";

const PCBA_CANVAS_WIDTH = 1728;
const PCBA_CANVAS_HEIGHT = 9296;

function getCanvasScale() {
  if (typeof window === "undefined") {
    return 1;
  }

  return Math.min(1, window.innerWidth / PCBA_CANVAS_WIDTH);
}

export default function PcbaHome() {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(PCBA_CANVAS_HEIGHT);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => setScale(getCanvasScale());

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
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
        setContentHeight(Math.min(PCBA_CANVAS_HEIGHT, nextHeight));
      }
    };

    const frame = window.requestAnimationFrame(measureContent);
    window.addEventListener("resize", measureContent);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measureContent);
    };
  }, [scale]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <div
        className="w-full overflow-hidden"
        style={{ height: Math.ceil(contentHeight * scale) }}
      >
        <div
          ref={canvasRef}
          style={{
            width: PCBA_CANVAS_WIDTH,
            height: contentHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <Pcba />
        </div>
      </div>
    </div>
  );
}
