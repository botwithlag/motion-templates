import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/landingpage/navbar";

const inter=Inter({
  subsets:['latin'],
  weight:["400","500","600","700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700 `}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
