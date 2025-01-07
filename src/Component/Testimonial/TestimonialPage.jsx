"use client";
import React, { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "William M.",
        image: "/logo1.png",
        feedback:
            "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
    },
    {
        id: 2,
        name: "Sophia L.",
        image: "/logo2.png",
        feedback:
            "Sophia’s insight and creativity elevated our project to a whole new level. Highly recommend her!",
    },
    {
        id: 3,
        name: "James P.",
        image: "/logo3.png",
        feedback:
            "James provided us with excellent solutions, and his attention to detail is incredible. A true professional!",
    },
];

const TestimonialPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(""); // Tracks the direction of the animation

    const handleNext = () => {
        setDirection("next");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 500); // Wait for animation to finish
    };

    const handlePrev = () => {
        setDirection("prev");
        setTimeout(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
            );
        }, 500); // Wait for animation to finish
    };

    return (
        <div className="h-screen bg-black text-white py-20">
            {/* Title Section */}
            <div className="mb-8">
                <h2 className="text-6xl font-medium w-4/6">
                    What Clients Say About My <span className="text-purple-500">Work</span>
                </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="top-1/2 transform -translate-y-1/2 flex gap-8 justify-end px-4">
                <button
                    className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
                    onClick={handlePrev}
                >
                    ←
                </button>
                <button
                    className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
                    onClick={handleNext}
                >
                    →
                </button>
            </div>

            {/* Testimonial Cards */}
            <div className="max-w-4xl mx-auto relative overflow-hidden h-48">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`absolute top-0 left-0 w-full h-full  items-start space-x-4 p-6 bg-gray-900 rounded-lg shadow-md  transition-transform duration-500 ease-in-out ${index === currentIndex
                                ? "translate-x-0 opacity-100"
                                : direction === "next" && index === (currentIndex + testimonials.length - 1) % testimonials.length
                                    ? "-translate-x-full opacity-0"
                                    : "translate-x-full opacity-0"
                            }`}
                    >
                        {/* Profile Image */}
                        <div className="flex gap-8 items-center">
                            <div className="w-16 h-16 text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            {/* Testimonial Details */}
                            <div>
                                <h3 className="text-lg font-bold ">{testimonial.name}</h3>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-400 mt-3">{testimonial.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialPage;
