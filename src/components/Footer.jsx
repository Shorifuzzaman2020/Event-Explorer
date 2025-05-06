import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Event Explorer</h2>
            <p className="text-sm opacity-80">Discover events, anytime, anywhere.</p>
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-6">
            <li>
              <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-yellow-400">Events</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-yellow-400">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-t border-white opacity-30 my-4"></div>
        <div className="flex justify-center space-x-6 text-lg">
          <a href="#" className="hover:text-yellow-400"><FaFacebook></FaFacebook></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram></FaInstagram></a>
          <a href="#" className="hover:text-yellow-400"><FaSquareXTwitter></FaSquareXTwitter></a>
        </div>
        <div className="mt-4 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Event Explorer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
