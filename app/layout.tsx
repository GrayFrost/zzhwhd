import type { Metadata } from "next";
import "@/styles/globals.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import BottomOperations from "@/components/bottom-operations";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Garlic Garlic | 蒜头蒜",
  description: "静谧之旅 —— 行止由心",
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
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <BottomOperations />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
