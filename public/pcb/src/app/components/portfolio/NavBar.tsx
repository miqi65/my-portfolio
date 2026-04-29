import { useState, useEffect } from "react";

const navLinks = [
  { label: "项目概览", href: "#overview" },
  { label: "难点与挑战", href: "#challenges" },
  { label: "项目策略", href: "#strategy" },
  { label: "用户洞察", href: "#insights" },
  { label: "解决方案", href: "#solutions" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-11 flex items-center px-6"
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "#000000",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-white text-[12px] tracking-[-0.12px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          PCB 系统设计
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-white text-[12px] tracking-[-0.12px] opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#solutions"
          onClick={(e) => handleNav(e, "#solutions")}
          className="text-[12px] px-4 py-1.5 rounded-full transition-opacity hover:opacity-90"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            backgroundColor: "#0066cc",
            color: "#ffffff",
            letterSpacing: "-0.12px",
          }}
        >
          查看成果
        </a>
      </div>
    </nav>
  );
}