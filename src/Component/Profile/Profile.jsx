import { Playwrite_AR } from "next/font/google";
import React from "react";
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const newe= Playwrite_AR({
  subsets: ["latin"],
  weight: ["400"],
})

const Profile = () => {
  return (
    <div className="p-6  md:p-12 bg-[#1c1c1e] rounded-xl shadow-lg mx-auto w-full  text-center">
      {/* Profile Picture */}
      <img
        src="./logo1.png"
        alt="Abeen Khanal"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg mx-auto object-cover"
      />

      {/* Name */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-center text-white`}>
        Abin Khanal
      </h2>
      <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mt-2">
        Product Designer & Developer
      </p>
      <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg">
        Butwal, Nepal
      </p>

      {/* Social Icons */}
      <div className="flex justify-center mt-8 space-x-6 md:space-x-8">
        {/* Dribbble Icon */}
        <a
          href="https://www.facebook.com/abeen.khanal"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 md:p-4 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 group"
        >
          <FaDribbble className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com/your-profile-link"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 md:p-4 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 group"
        >
          <FaTwitter className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/abeenkhanal/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 md:p-4 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 group"
        >
          <FaInstagram className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:abeenkhanal16@gmail.com"
          className="p-3 md:p-4 rounded-full bg-[#252525] transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 group"
        >
          <FaEnvelope className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </a>
      </div>
      {/* Button */}
      <button className="mt-12 w-full bg-purple-600 hover:bg-purple-800 text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold">
        Let's Talk
      </button>
    </div>
  );
};

export default Profile;
