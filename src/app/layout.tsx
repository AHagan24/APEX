import type { Metadata } from "next";
import { Anton, Archivo, Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Anton isn't a variable font, so a weight is required.
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

// Variable font: only the italic style plus the width axis for the wordmark.
const archivo = Archivo({
  variable: "--font-archivo",
  style: "italic",
  axes: ["wdth"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APEX — Engineered for Glory",
    template: "%s — APEX",
  },
  description:
    "An immersive, motorsport-inspired portfolio with interactive 3D helmet experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      {/* `relative` anchors the floating (absolute) Navbar. */}
      <body className="relative flex min-h-full flex-col bg-carbon-950 font-sans text-chrome-100">
        <Navbar />
        {/* Each page (or route-group layout) renders its own <main>, so the
            Footer can sit outside it on routes that have one. */}
        {children}
      </body>
    </html>
  );
}
