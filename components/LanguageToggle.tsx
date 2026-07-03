"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="font-english hover:opacity-60 transition-opacity uppercase tracking-wide"
      aria-label="Toggle Language"
    >
      {language === "en" ? "EN" : "中文"}
    </button>
  );
}
