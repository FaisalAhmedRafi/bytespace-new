import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "ByteSpace | Online courses from creators",
  description: "Learn design, development, business and more with courses from independent creators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
