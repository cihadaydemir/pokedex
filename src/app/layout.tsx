import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { ProviderWrapper } from "./components/ProviderWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pokedéx",
  description: "Search for your favourite Pokémons and collect them!",
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
        <div style={{ flex: 1 }}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
