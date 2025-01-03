// components/Profile.js
import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="p-10 bg-[#1c1c1e] rounded-xl shadow-lg mx-auto max-w-sm">
      {/* Profile Picture */}
      <img
        src="./pp.png"
        alt="Aabraham James"
        className="w-50 h-60 rounded-2xl mx-auto object-cover"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold mt-4 text-center text-white">
        Abin Khanal
      </h2>
      <p className="text-center text-gray-400">Product Designer & Developer</p>
      <p className="text-center text-gray-400">Butwal, Nepal</p>

      {/* Social Icons */}
      <div className="flex justify-center mt-4 space-x-6 text-purple-500">
        <FaDribbble className="hover:text-purple-700" />
        <FaTwitter className="hover:text-purple-700" />
        <FaInstagram className="hover:text-purple-700" />
        <FaEnvelope className="hover:text-purple-700" />
      </div>

      {/* Button */}
      <button className="mt-6 w-full bg-purple-600 hover:bg-purple-800 text-white py-3 rounded-lg text-base font-semibold">
        Let's Talk
      </button>
    </div>
  );
};

export default Profile;
