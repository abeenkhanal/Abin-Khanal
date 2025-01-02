import React from 'react';
import { FaHome, FaFolder, FaTools, FaSuitcase, FaPen, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-6 bg-gray-800 p-4 rounded-2xl w-fit mx-auto">
      <NavButton icon={FaHome} label="Home" />
      <NavButton icon={FaFolder} label="Projects" />
      <NavButton icon={FaTools} label="Tools" />
      <NavButton icon={FaSuitcase} label="Experience" />
      <NavButton icon={FaPen} label="Blog" />
      <NavButton icon={FaEnvelope} label="Contact" />
    </div>
  );
};

const NavButton = ({ icon: Icon, label }) => {
  return (
    <div className="relative group">
      {/* Button */}
      <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700 hover:bg-purple-500 text-gray-300 group-hover:text-white">
        <Icon size={20} />
      </button>

      {/* Tooltip */}
      <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
        {label}
      </span>
    </div>
  );
};

export default Navbar;
