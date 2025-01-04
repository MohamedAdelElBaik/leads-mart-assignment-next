"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import HeaderSection from "@/components/headerSection";
import FooterSection from "@/components/footerSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Provider>
          <HeaderSection />
          {children}
        </Provider>
        <FooterSection />
      </body>
    </html>
  );
}
