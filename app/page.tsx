import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Seperator from "@/components/Seperator";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
    </div>
  );
}

export default Home;
