import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
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
