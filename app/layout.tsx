import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prezentra.az"),
  title: {
    default: "Prezentra | Digital Solutions & Professional Presentation Design",
    template: "%s | Prezentra - Digital Solutions",
  },
  description:
    "Prezentra is a premium digital services agency specializing in modern web development, professional presentation design, and innovative digital solutions. Elevate your brand with our expert team.",
  keywords: [
    "web development",
    "presentation design",
    "digital agency",
    "UI/UX design",
    "Prezentra",
    "digital solutions",
    "slayd dizaynı",
    "veb saytların hazırlanması"
  ],
  authors: [{ name: "Prezentra Team", url: "https://prezentra.az" }],
  creator: "Prezentra",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://prezentra.az",
    siteName: "Prezentra",
    title: "Prezentra | Digital Solutions & Professional Presentation Design",
    description: "Premium digital services agency specializing in modern web development and professional presentation design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prezentra Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prezentra | Digital Solutions & Professional Presentation Design",
    description: "Premium digital services agency specializing in modern web development and professional presentation design.",
    creator: "@prezentra",
    images: ["/twitter-image.jpg"],
  },
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
