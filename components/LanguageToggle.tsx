"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="hover:opacity-60 transition-opacity uppercase font-serif tracking-wide"
      aria-label="Toggle Language"
    >
      {language === "en" ? "EN" : "中文"}
    </button>
  );
}