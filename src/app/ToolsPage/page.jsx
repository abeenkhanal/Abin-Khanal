import Tools from '@/Component/Tools/ToolsPage'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Tools/> */}
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md">
        <div className="text-lg font-bold text-blue-600">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <nav className="space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#join" className="text-gray-700 hover:text-blue-600">Join us</a>
          <a
            href="#contact"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Contact us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-between px-8 py-20 md:px-20">
        <div className="max-w-lg space-y-6">
          <div className="flex items-center space-x-3 text-blue-600">
            <span className="px-3 py-1 text-sm bg-blue-100 rounded-full">
              Latest Innovations
            </span>
            <a href="#features" className="hover:underline">
              Discover our new efficiency tools →
            </a>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-800">
            Optimize Your <br />
            Pharmacy Operations
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to PharmaEase, where we simplify pharmacy management with
            cutting-edge solutions.
          </p>
          <div className="flex flex-wrap space-x-4">
            <a
              href="#features"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Explore Our Features
            </a>
            <a href="#about" className="flex items-center space-x-2 text-blue-600">
              <span>Learn About Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#demo"
              className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
            >
              Click for Demo
            </a>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <img
            src="/images/pharmacy-hero.jpg"
            alt="Pharmacy"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
    </div>
  )
}

export default page
