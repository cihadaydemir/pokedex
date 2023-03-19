import { Inter } from "next/font/google";
import React from "react";

import { Navbar } from "./components/Navbar";
import "./globals.css";
import { ProviderWrapper } from "./components/ProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pokedex",
  description: "Just a simple example project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
