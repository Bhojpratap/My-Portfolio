import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundAudio from "../components/BackgroundAudio";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhojpratap Sahu.",
  description: "Bhojpratap Sahu. portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <CustomCursor />
        {children}
        <BackgroundAudio />
      </body>
    </html>
  );
}
