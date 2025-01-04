"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import HeaderSection from "@/components/headerSection";

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

          <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto px-4 text-center">
              <p>
                &copy; 2025 GitHub Repository Viewer. All rights reserved by
                Mohamed Adel.
              </p>
            </div>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
