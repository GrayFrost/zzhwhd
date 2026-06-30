import type { Metadata } from "next";
import "@/styles/globals.css";
// 注意: react-grid-layout 样式仍被 project 页面需要，所以保留导入
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import FloatingOperations from "@/components/floating-operations";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RouteScrollReset } from "@/components/route-scroll-reset";

export const metadata: Metadata = {
  title: "Gary Frost | Engineering Field Notes",
  description: "Code, travel, projects, and personal field notes.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/garlic.png', type: 'image/png' },
    ],
    // apple: [
    //   { url: '/apple-icon.png' },
    // ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`antialiased`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            <div className="relative min-h-screen flex flex-col bg-background text-foreground">
              <RouteScrollReset />
              <SiteHeader />
              <FloatingOperations />
              {children}
              <SiteFooter />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
