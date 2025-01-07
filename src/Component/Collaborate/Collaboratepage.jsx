import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const Collaboratepage = () => {
  return (
    <div className="mb-44">
      <div className="relative p-8 bg-gray-800 text-white rounded-lg transition-all duration-500 ease-in-out hover:bg-purple-600 group shadow-lg">
        {/* Top-Right Circle with Arrow */}
        <div className="absolute top-4 right-4">
          {/* Default Circle with Arrow */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-400 transition-transform  duration-500 ease-in-out  group-hover:opacity-0">
            <FiArrowUpRight className="w-5 h-5 text-white" />
          </div>
          {/* Hover Circle with Arrow */}
          <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full bg-white transition-transform duration-500 ease-in-out opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <FiArrowDownLeft className="w-5 h-5 text-purple-600" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-6xl font-bold leading-tight w-4/6">
          Let’s{' '}
          <span className="text-purple-400 transition-colors duration-500 ease-in-out group-hover:text-white">
            collaborate
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-gray-300 text-base font-semibold">
          Unlock the potential of your product with expert design and
          development services. Let’s collaborate to create user-centered
          solutions that not only meet your goals but also delight your users.
        </p>
      </div>
    </div>
  );
};

export default Collaboratepage;
