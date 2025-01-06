import React from 'react'
const testimonials = [
    {
      id: 1,
      name: "William M.",
      image: "/logo1.png", 
      feedback:
        "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
    },
   
  ];
  
const TestimonialPage = () => {
  return (
    <div className='h-screen bg-black text-white py-20'>
       <div className=" mb-8 ">
          <h2 className="text-6xl font-medium w-4/6">
            What Clients Say About My <span className="text-purple-500">Work</span>
          </h2>
        </div>
        <div className=" top-1/2 transform -translate-y-1/2 flex gap-8 justify-end  px-4">
            <button
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
            >
              ←
            </button>
            <button
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-300"
            >
              →
            </button>
          </div> 
          <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex items-start space-x-4 p-6 bg-gray-900 rounded-lg shadow-md"
          >
            {/* Profile Image */}
            <div className="w-16 h-16 flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Testimonial Details */}
            <div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-gray-400 mt-8">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialPage
