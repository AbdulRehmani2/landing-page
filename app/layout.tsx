import type { Metadata } from "next";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Ecotech Solutions",
  description:
    "EcoTech Solutions is a leading provider of sustainable technology solutions. We are committed to helping businesses around the world achieve their environmental goals by offering innovative, eco-friendly products and services. Our mission is to make sustainability accessible, affordable, and efficient for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
