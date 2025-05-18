import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[url("https://i.ibb.co/4nw0yQ5r/13.jpg")] bg-no-repeat bg-center bg-cover py-20 px-4 mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-8 max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-4">
          <img
            src="https://i.ibb.co/23mpK3vT/logo1.png"
            className="w-14 h-auto"
            alt=""
          />
          <h1 className="text-3xl md:text-4xl font-bold text-[#331A15]">
            Espresso Emporium
          </h1>
          <p className="text-xs leading-5">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-3">
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-[#331A15]" size={25} />
            </Link>
            <Link to="https://x.com/" target="_blank">
              <FaTwitter className="text-[#331A15]" size={25} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-[#331A15]" size={25} />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FaLinkedin className="text-[#331A15]" size={25} />
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#331A15] mt-10">
            Get in Touch
          </h1>
          <p className="flex gap-3 items-center">
            <MdCall size={20} /> +88 01533 333 333
          </p>
          <p className="flex gap-3 items-center">
            <MdEmail size={20} /> info@gmail.com
          </p>
          <p className="flex gap-3 items-center">
            <FaLocationDot size={20} /> 72, Wall street, King Road, Dhaka
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#331A15]">
            Connect with Us
          </h1>
          <input type="text" placeholder="Name" className="block outline-0 bg-white px-4 py-2 rounded-md w-full" />
          <input type="email" placeholder="Email" className="block outline-0 bg-white px-4 py-2 rounded-md w-full" />
          <textarea rows="4" placeholder="Message" className="block outline-0 bg-white px-4 py-2 rounded-md w-full"></textarea>
          <button className="btn rounded-full text-[#331A15] border-2 border-[#331A15] bg-transparent text-xl">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
