"use client"
import React from "react";

const Homepage = () => {
  return (
    <div className="bg-black text-white py-44 px-6">
      {/* Centered Container for Text and Content */}
      <div className="max-w-3xl mx-auto ">
        {/* Title and Subtitle */}
        <h1 className="text-7xl font-bold leading-tight">
          Transforming Your Ideas into <span className="text-purple-500">Reality</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg w-3/4 ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center space-x-12 mt-12">
          {[
            { number: "+12", label: "Years of Experience" },
            { number: "+46", label: "Projects Completed" },
            { number: "+20", label: "Worldwide Clients" },
          ].map((stat, index) => (
            <div key={index} className="">
              <h2 className="text-4xl font-extrabold">{stat.number}</h2>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-6 rounded-lg text-sm font-semibold">
            Let's Talk
          </button>
          <button className="text-purple-500 underline font-semibold">
            My Work →
          </button>
        </div>

        {/* Logo Bar */}
        <div className="mt-12">
          <p className="text-center text-gray-400">Relied on by companies near, far, and worldwide</p>
          <div className="flex justify-center space-x-6 mt-6">
            <img src="./logo1.png" alt="Logo 1" className="h-8" />
            <img src="./logo2.png" alt="Logo 2" className="h-8" />
            <img src="./logo3.png" alt="Logo 3" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
