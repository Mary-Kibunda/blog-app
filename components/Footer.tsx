"use client";
import { TargetIcon } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black text-shadow-white py-5 items-center overflow-hidden max-w-full">
      <div className="inline-flex gap-2 justify-baseline">
        <TargetIcon className=" h-14 w-14 bg-white rounded-4xl" />
        <span className="text-white text-3xl  mt-3">Blogie</span>
      </div>
      <p className="text-base text-white">
        All Rights Reserved. Copyright @Blogie
      </p>
      <div className="flex items-center gap-3 ">
        <FaFacebook className="text-white h-8 w-8" />
        <FaGooglePlus className="text-white h-8 w-8" />
        <FaInstagram className="text-white h-8 w-8" />
        <FaTwitter className="text-white h-8 w-8" />
        <div />
      </div>
    </footer>
  );
};

export default Footer;
