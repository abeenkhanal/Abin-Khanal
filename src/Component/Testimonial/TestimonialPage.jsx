"use client";
import React, { useState } from "react";


const testimonials = [
  {
    id: 1,
    name: "Robert P.",
    image: "/logo1.png", 
    feedback:
      "Working with John was a pleasure. He transformed our ideas into a polished product with impressive attention to detail in both design and development.",
  },
  {
    id: 2,
    name: "Emma W.",
    image: "/logo1.png", 
    feedback:
      "Emma helped us create a stunning website that exceeded our expectations. She was professional and her design skills are unmatched.",
  },
  {
    id: 3,
    name: "John D.",
    image: "/logo1.png", 
    feedback:
      "John's work ethic and creativity blew us away. He truly cares about delivering the best for his clients, and it shows in his work.",
  },
];

const TestimonialPage = () => {

        const [current, setCurrent] = useState(0);
      
        const handleNext = () => {
          setCurrent((prev) => (prev + 1) % testimonials.length);
        };
      
        const handlePrev = () => {
          setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        };
      

  return (
    <div className="bg-black text-white py-16 px-6">
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">
          What Clients Say About My <span className="text-purple-500">Work</span>
        </h2>
      </div>

      {/* Arrows */}
      <div className="flex justify-end items-right space-x-4 mb-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
        >
          →
        </button>
      </div>

      {/* Testimonial Content */}
      <div
        className="flex items-center space-x-6 p-8 bg-gray-900 rounded-lg shadow-lg transition-all duration-500 ease-in-out"
        key={testimonials[current].id}
      >
        {/* Profile Image */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Testimonial Details */}
        <div>
          <h3 className="text-lg font-bold">{testimonials[current].name}</h3>
          <p className="text-gray-400 mt-2">{testimonials[current].feedback}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TestimonialPage;
