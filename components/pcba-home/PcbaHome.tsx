"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const updateScale = () => setScale(getCanvasScale());

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <div
        className="w-full overflow-hidden"
        style={{ height: Math.ceil(PCBA_CANVAS_HEIGHT * scale) }}
      >
        <div
          style={{
            width: PCBA_CANVAS_WIDTH,
            height: PCBA_CANVAS_HEIGHT,
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
