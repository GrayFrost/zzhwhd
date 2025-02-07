import type { Metadata } from "next";
import "./globals.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

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
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0b0f11]">
          {children}
        </div>
      </body>
    </html>
  );
}
