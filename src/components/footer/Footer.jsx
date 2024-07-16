import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1  sm:gap-2 gap-8  w-full rounded-tr-xl rounded-tl-xl p-4 py-10 mx-auto bg-secondarybg text-[#eee]">
      <div className="flex flex-col items-center border border-t-0 border-b-0 border-l-0 border-gray-400 sm:border-r border-r-0  gap-2">
        <h3 className=" text-lg">Follow us on Socials:</h3>
        <div className="socials flex w-max gap-3">
          <a
            target="_blank"
            href="https://www.instagram.com/weboappdiscovery.pvt.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <FaInstagram size={20} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/weboapp-discovery-private-limited/mycompany/"
          >
            <FaLinkedin size={20} />
          </a>
          <FaFacebook size={20} />
        </div>
      </div>
      <div className={`flex flex-col items-center border border-t-0 border-b-0 border-l-0 border-gray-400  sm:border-r border-r-0 gap-2 `}>

        <h3 className=" text-lg">Company</h3>
        <NavLink className={"hover:text-secondary text-xs underline underline-offset-2"}>Jobs</NavLink>
        <NavLink className={"hover:text-secondary text-xs underline underline-offset-2"}>Jobs</NavLink>
        <NavLink className={"hover:text-secondary text-xs underline underline-offset-2"}>Jobs</NavLink>
        <NavLink className={"hover:text-secondary text-xs underline underline-offset-2"}>Jobs</NavLink>
      </div>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-start gap-2  text-lg ">
          Contact Us
            </label>
          <div className="flex text-xs">
            <input
              className="bg-gray-200 p-2 rounded-tl-lg rounded-bl-lg"
              placeholder="Enter email"
            ></input>
            <button className="p-2 bg-purple-500 text-white rounded-tr-lg rounded-br-lg">
              Submit
            </button>
          </div>
      </div>
    </div>
  );
};

export default Footer;
