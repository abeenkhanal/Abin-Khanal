import React from 'react'

const TestimonialPage = () => {
  return (
    <div>
       <div className=" mb-8">
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
    </div>
  )
}

export default TestimonialPage
