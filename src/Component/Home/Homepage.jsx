"use client";
import React from "react";

const Homepage = () => {
  const logos = [
    "./logo1.png",
    "./logo2.png",
    "./logo3.png",
    "./logo4.png",
    "./logo5.png",
  ];

  return (
    <div className="bg-black text-white py-20 px-6">
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
        <div className="flex space-x-2 mt-12">
          {[
            { number: "+12", label: "YEARS OF EXPERIENCE" },
            { number: "+46", label: "PROJECTS COMPLETED" },
            { number: "+20", label: "WORLDWIDE CLIENTS" },
          ].map((stat, index) => (
            <div key={index} className="">
              <h2 className="text-7xl font-extrabold">{stat.number}</h2>
              <p className="text-gray-400 w-4/6 ">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="flex mt-8 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-12 rounded-lg text-sm font-semibold">
            Let's Talk
          </button>
          <button className="text-purple-500 font-semibold">
            My Work →
          </button>
        </div>

        {/* Logo Bar (Infinite Loop with Gap Between Logos) */}
        <div className="mt-12 w-full">
          <p className="text-gray-400">
            Relied on by companies near, far, and worldwide
          </p>
          <div className="mt-6 overflow-hidden">
            {/* Logo Slider */}
            <div
              className="flex animate-scroll"
              style={{
                animation: "scroll 30s linear infinite", // Adjusted to a slower pace
              }}
            >
              {/* Logos with Gap */}
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-20 mx-6" // Added horizontal margin for the gap
                />
              ))}
              {/* Duplicating logos for seamless loop with the gap */}
              {logos.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-20 mx-6" // Added horizontal margin for the gap
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for infinite scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Change from -50% to -100% for full reset */
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
