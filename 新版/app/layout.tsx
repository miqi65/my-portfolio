import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource-variable/noto-sans-sc";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miki Yang - Product Designer",
  description:
    "杨蜜萁是一名产品设计师，专注复杂 B 端系统、工业 AI HMI、AI 应用工作流与 Design System。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
