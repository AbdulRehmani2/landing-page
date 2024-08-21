import React from "react";
import Eco from "../public/eco-friendly.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <div className="py-24 px-24 text-black flex flex-row justify-center items-center flex-wrap lg:justify-between lg:flex-nowrap">
        <div className="w-[50rem]">
          <h1 className="text-4xl mb-5">
            Empowering a Greener Future with Innovative Technology
          </h1>
          <h3 className="text-2xl mb-12">
            At EcoTech Solutions, we depiver cutting-edge sustainable technology
            that helps your business reduce its carbon footprint while boosting
            efficiency.
          </h3>
          <button className="bg-black px-8 py-4 hover:bg-slate-200 hover:text-black transition-all duration-300 rounded-md text-white">
            Get Started
          </button>
        </div>
        <div>
          <Image
            src={Eco}
            alt="Eco-friendly"
            style={{
              width: "30rem",
              height: "auto",
              marginInline: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
