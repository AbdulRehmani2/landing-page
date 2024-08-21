import React from "react";
import aboutImage from "/public/about-us.svg";
import Image from "next/image";

function About() {
  return (
    <div className="flex justify-center flex-row-reverse flex-wrap lg:flex-nowrap">
      <div className="my-24 mx-24 w-[50rem]">
        <h1 className="text-4xl text-center mb-5 pb-1 border-b-[1px] border-b-slate-300">
          About us
        </h1>
        <p className="text-[1.2rem] p-4">
          EcoTech Solutions is a leading provider of sustainable technology
          solutions. We are committed to helping businesses around the world
          achieve their environmental goals by offering innovative, eco-friendly
          products and services. Our mission is to make sustainability
          accessible, affordable, and efficient for everyone.
        </p>
      </div>
      <Image
        src={aboutImage}
        alt="office-work"
        style={{ width: "25rem", height: "auto" }}
      ></Image>
    </div>
  );
}

export default About;
