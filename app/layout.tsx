import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prezentra | Vizual Hekayənizin Yeni Memarı",
  description:
    "Prezentra - Premium slayd dizaynı və modern veb saytların hazırlanması. Dizayn sahəsindəki boşluğu doldurmaq ehtiyacından yaradıldı.",
  
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
