import type { Metadata } from "next";
import { Inter, Sacramento, Great_Vibes } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 1. The font for the Cards (Old style)
const sacramento = Sacramento({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-card" 
});

// 2. The font for the Header (New tilted style)
const greatVibes = Great_Vibes({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-header" 
});

export const metadata: Metadata = {
  title: "Painsparc",
  description: "Architecting logic for the digital void.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inject all three variables */}
      <body className={`${inter.variable} ${sacramento.variable} ${greatVibes.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}