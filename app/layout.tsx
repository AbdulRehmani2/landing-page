import type { Metadata } from "next";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-taupe-five-79.vercel.app/"),
  title: "Ecotech Solutions | Save Enviornment",
  keywords: ["Ecotech", "Technology", "Ecofriendly", "Software"],
  openGraph: {
    title: "Ecotech Solutions",
    description:
      "EcoTech Solutions is a leading provider of sustainable technology solutions.",
    type: "website",
    locale: "en-us",
    url: "https://landing-page-taupe-five-79.vercel.app/",
    siteName: "Ecotech",
  },
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
      <Head>
        <link rel="shorcut icon" href="/favicon.png"></link>
      </Head>
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
