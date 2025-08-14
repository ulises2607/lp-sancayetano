import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/header/NavbarTest";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instituto San Cayetano",
  description: "Landing page del instituto san cayetano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavbarComponent /> */}
        {children}
      </body>
    </html>
  );
}
