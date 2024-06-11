import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-[#f4f7ff] py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Leave Us a Message</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Briefly describe your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#1b5bf7] text-white font-bold rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#1b5bf7] text-2xl mr-3" />
              <span>Tashkent, Mirzo-Ulugbek district, 5th street, Kurgan, 32</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#1b5bf7] text-2xl mr-3" />
              <span>+998 33 66 00 999</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#1b5bf7] text-2xl mr-3" />
              <span>azizbek.b@udevs.io</span>
            </li>
            <li className="flex items-center">
              <FaTelegramPlane className="text-[#1b5bf7] text-2xl mr-3" />
              <span>t.me/azizbekbakhodirov</span>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-[#1b5bf7] text-2xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-[#1b5bf7] text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#1b5bf7] text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#1b5bf7] text-2xl">
              <FaTwitter />
            </a>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.335183740217!2d144.96487381531836!3d-37.80985397975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452f6f76f9%3A0xe1a438fffc0b8b62!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1630928912324!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
