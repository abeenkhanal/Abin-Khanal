import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="p-10 bg-[#1c1c1e] rounded-xl shadow-lg mx-auto w-[400px] ">
      {/* Profile Picture */}
      <img
        src="./pp.png"
        alt="Aabraham James"
        className="w-60 h-70 rounded-2xl mx-auto object-cover"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold mt-4 text-center text-white">
        Abin Khanal
      </h2>
      <p className="text-center text-gray-400">Product Designer & Developer</p>
      <p className="text-center text-gray-400">Butwal, Nepal</p>

      {/* Social Icons */}
      <div className="flex justify-center mt-9 space-x-6">
        {/* Dribbble Icon */}
        <a
          href="https://www.facebook.com/abeen.khanal" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 group"
        >
          <FaDribbble className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com/your-profile-link"  // Add your Twitter link here
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 group"
        >
          <FaTwitter className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/abeenkhanal/"  // Add your Instagram link here
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 group"
        >
          <FaInstagram className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:abeenkhanal16@gmail.com"  // Add your email link here
          className="p-3 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 group"
        >
          <FaEnvelope className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>
      </div>

      {/* Button */}
      <button className="mt-24 w-full bg-purple-600 hover:bg-purple-800 text-white py-3 rounded-lg text-base font-semibold">
        Let's Talk
      </button>
    </div>
  );
};

export default Profile;
