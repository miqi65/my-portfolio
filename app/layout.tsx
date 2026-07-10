import type { Metadata } from "next";
import { Noto_Sans_SC, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  weight: "variable",
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-sc",
  fallback: ["PingFang SC", "Microsoft YaHei", "Arial"],
});

const robotoMono = Roboto_Mono({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  fallback: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "Miki Yang | Portfolio",
  description: "Product Designer based in Shenzhen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSansSC.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {/* ThemeProvider 管黑白，LanguageProvider 管中英，层层包裹 */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Header />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
