import type { Metadata } from "next";
import "@/styles/globals.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import Back from "@/components/back";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Garlic Garlic | 蒜头蒜",
  description: "静谧之旅 —— 行止由心",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Back />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
