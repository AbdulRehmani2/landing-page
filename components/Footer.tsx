import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-900 text-white py-5 px-10">
      <p className="text-center mb-2">Reach out to us at:</p>
      <div className="flex justify-center items-center gap-x-5">
        <FaFacebook className="cursor-pointer w-auto h-5"></FaFacebook>
        <FaLinkedin className="cursor-pointer w-auto h-5"></FaLinkedin>
        <FaTwitter className="cursor-pointer w-auto h-5"></FaTwitter>
      </div>
      <p className="text-center mt-4">
        © 2024 EcoTech Solutions. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
