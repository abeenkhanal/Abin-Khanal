"use client";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs.",
    },
    {
      question: "What is your design process?",
      answer:
        "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs.",
    },
    {
      question: "How do you handle project timelines?",
      answer:
        "I work closely with clients to establish clear timelines and milestones, ensuring that projects stay on track and are delivered on time.",
    },
    {
      question: "Can you work with existing teams?",
      answer:
        "Absolutely! I can collaborate seamlessly with existing teams, integrating into your workflow to enhance design and development efforts.",
    },
    {
      question: "What tools do you use?",
      answer:
        "I utilize various tools for design and development, including Figma, Adobe XD, HTML, CSS, JavaScript, and React, ensuring high-quality outcomes for all projects.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-7xl  font-bold  mb-12">
          Frequently Asked <span className="text-purple-500">Questions</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-white"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <AiOutlineUp className="text-purple-500" />
                ) : (
                  <AiOutlineDown className="text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
