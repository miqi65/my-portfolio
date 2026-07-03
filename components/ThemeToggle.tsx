"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]" />; // 占位防闪烁

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-foreground transition-colors duration-300 ml-2 hover:opacity-70"
      aria-label="Toggle Theme"
    />
  );
}