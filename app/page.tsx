import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Seperator from "@/components/Seperator";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | Ecotech Solutions",
  description: "Ecotech website's main page.",
};

function Home() {
  return (
    <div>
      <Hero />
      <Seperator />
      <About />
      <Seperator />
      <Services />
      <Seperator />
      <Testimonials />
      <Seperator />
      <Contact />
    </div>
  );
}

export default Home;
