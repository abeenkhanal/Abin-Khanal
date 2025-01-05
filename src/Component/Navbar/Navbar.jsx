import React from 'react';
import Link from 'next/link';
import { FaHome, FaFolder, FaTools, FaSuitcase, FaPen, FaEnvelope } from 'react-icons/fa';
import { BsFillPersonVcardFill } from "react-icons/bs";

const Navbar = () => {
    const navItems = [
        { icon: FaHome, label: 'Home', href: '/' },
        { icon: BsFillPersonVcardFill, label: 'About', href: '/AboutPage' },
        { icon: FaFolder, label: 'Projects', href: '/ProjectPage' },
        { icon: FaTools, label: 'Tools', href: '/tools' },
        { icon: FaSuitcase, label: 'Experience', href: '/experience' },
        { icon: FaPen, label: 'Blog', href: '/blog' },
        { icon: FaEnvelope, label: 'Contact', href: '/contact' },
    ];

    return (
        <div className="flex justify-center space-x-6 bg-[#242627] p-4 rounded-2xl w-fit mx-auto overflow-visible">
            {navItems.map((item, index) => (
                <NavButton key={index} icon={item.icon} label={item.label} href={item.href} />
            ))}
        </div>
    );
};

const NavButton = ({ icon: Icon, label, href }) => (
    <div className="relative group">
        <Link href={href}>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-purple-500 text-gray-300">
                <Icon size={20} />
            </div>
        </Link>
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all z-50">
            {label}
        </span>
    </div>
);

export default Navbar;
