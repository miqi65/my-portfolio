"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-[24px] py-[22px] flex justify-between items-center z-50 text-foreground bg-transparent">
      <div className="text-[13px] md:text-[15px] tracking-wide">
        <Link href="/">Miki Yang</Link>
      </div>
      <div className="flex items-center gap-6 text-[13px] md:text-[15px]">
        <Link href="/" className="hover:opacity-60 transition-opacity">Work</Link>
        <Link href="/info" className="hover:opacity-60 transition-opacity">Info</Link>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
