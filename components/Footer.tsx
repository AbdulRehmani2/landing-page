import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-900 text-white">
      <p className="text-center">Reach out to us at</p>
      <div>
        <FaFacebook></FaFacebook>
        <FaLinkedin></FaLinkedin>
        <FaTwitter></FaTwitter>
      </div>
    </div>
  );
}

export default Footer;
