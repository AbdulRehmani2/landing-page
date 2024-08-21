import NInput from "./Input";
import React from "react";

function Contact() {
  return (
    <div className="my-24 flex flex-col items-center">
      <h1 className="text-4xl text-center mb-5">Get in Touch</h1>
      <p>
        Ready to make your business more sustainable? Contact us today to learn
        how EcoTech Solutions can help.
      </p>
      <div className="flex flex-col gap-3 w-[20rem] mt-10">
        <NInput placeholder="Name" height={35} />
        <NInput placeholder="Email" height={35} />
        <NInput placeholder="Phone" height={35} />
        <textarea
          placeholder="Message"
          className="border-[2px] border-slate-500 rounded-md p-2"
        />
        <button className="bg-black px-8 py-4 hover:bg-slate-200 hover:text-black transition-all duration-300 rounded-md text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Contact;
