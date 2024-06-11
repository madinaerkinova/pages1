import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f4f7ff] py-10 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#1b5bf7]">Services</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Team</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Tools</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Clients</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#1b5bf7]">Mobile App Development</a></li>
            <li><a href="#" className="text-[#1b5bf7]">ERP System Development</a></li>
            <li><a href="#" className="text-[#1b5bf7]">UI/UX Design</a></li>
            <li><a href="#" className="text-[#1b5bf7]">IT Consulting</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Infrastructure Optimization</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Portfolio</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#1b5bf7]">Delever</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Sms.uz</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Goodzone</a></li>
            <li><a href="#" className="text-[#1b5bf7]">Iman</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-8 space-x-6 container mx-auto px-5">
        <a href="#" aria-label="Instagram"><FaInstagram className="text-[#1b5bf7] text-2xl" /></a>
        <a href="#" aria-label="Twitter"><FaTwitter className="text-[#1b5bf7] text-2xl" /></a>
        <a href="#" aria-label="YouTube"><FaYoutube className="text-[#1b5bf7] text-2xl" /></a>
      </div>
      <div className="mt-10 text-center">
        <p>© 2024 Udevs. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
