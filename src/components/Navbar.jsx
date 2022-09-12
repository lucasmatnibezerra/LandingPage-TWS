import React from "react";
import logo from "../public/logo-tws.png";
import { socialMedia } from "../constants/index.js";
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="wingfeather" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </ul>
      <a href="https://www.wingfeathersaga.com/about-the-author">
        <button className="font-danger bg-[#F4F82C] hover:bg-[#f5f82cce] text-black text-[19px] py-2 px-4 rounded">
          ABOUT THE AUTOR
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
