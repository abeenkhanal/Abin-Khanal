import React from 'react';
import { FaHome, FaFolder, FaTools, FaSuitcase, FaPen, FaEnvelope } from 'react-icons/fa';
import { BsFillPersonVcardFill } from "react-icons/bs";

const Navbar = () => {
    const navItems = [
        { icon: FaHome, label: 'Home' },
        { icon: BsFillPersonVcardFill, label: 'About' },
        { icon: FaFolder, label: 'Projects' },
        { icon: FaTools, label: 'Tools' },
        { icon: FaSuitcase, label: 'Experience' },
        { icon: FaPen, label: 'Blog' },
        { icon: FaEnvelope, label: 'Contact' },
    ];

    return (
        <div className="flex justify-center space-x-6 bg-[#242627] p-4 rounded-2xl w-fit mx-auto overflow-visible">
            {navItems.map((item, index) => (
                <NavButton key={index} icon={item.icon} label={item.label} />
            ))}
        </div>
    );
};

const NavButton = ({ icon: Icon, label }) => (
    <div className="relative group">
        <button className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-purple-500 text-gray-300">
            <Icon size={20} />
        </button>
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all z-50">
            {label}
        </span>
    </div>
);

export default Navbar;
