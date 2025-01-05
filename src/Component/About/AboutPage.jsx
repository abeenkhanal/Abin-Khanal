"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-black text-white py-20 sm:py-8">
      {/* Centered Container */}
      <div className="max-w-5xl  ">
        {/* About Me Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ">
          About <span className="text-purple-500">Me</span>
        </h1>
        <p className="text-gray-400 mt-6 text-base sm:text-lg ">
          I’m a passionate developer and problem solver with a mission to create impactful digital experiences. With a
          background in both front-end and back-end development, I bring ideas to life with precision and creativity.
          My work blends technical expertise, artistic vision, and a relentless drive for perfection.
        </p>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-500">What I Do</h3>
            <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base">
              <li>Develop scalable and efficient web applications.</li>
              <li>Design seamless and intuitive user experiences.</li>
              <li>Build robust APIs and backend services.</li>
              <li>Optimize websites for performance and accessibility.</li>
              <li>Collaborate with diverse teams to deliver cutting-edge solutions.</li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-500">My Vision</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Technology is the driving force behind change, and my vision is to use it to create a better, more
              connected world. I aim to build products that not only solve problems but also inspire, engage, and
              delight users across the globe. Every line of code I write is a step towards this mission.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-500 ">
            Expertise & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">Full-Stack Development</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Crafting scalable solutions using React, Node.js, and databases like MongoDB and PostgreSQL.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">UI/UX Design</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Designing user-centric interfaces with tools like Figma and Adobe XD for seamless user experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">Agile Project Management</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Driving project success with agile methodologies, ensuring timely and high-quality deliverables.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-500 ">
            Beyond the Code
          </h3>
          <p className="text-gray-400 text-sm sm:text-base  max-w-3xl mx-auto">
            When I’m not coding, you’ll find me exploring new technologies, mentoring aspiring developers, or enjoying
            outdoor adventures. I believe in continuous learning and staying curious to push boundaries both
            personally and professionally.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 ">
          <button className="bg-purple-600 hover:bg-purple-800 text-white py-3 px-6 sm:px-12 rounded-lg text-sm sm:text-lg font-semibold">
            Let’s Build Something Amazing Together
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
