import React from 'react'
import Image from 'next/image';
const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Stabraq',
      description: 'Portfolio Framer Template',
      image: '/logo1.png',
    },
    {
      id: 2,
      title: 'NajmAI',
      description: 'Modern Framer Template',
      image: '/logo2.png',    },
    {
      id: 3,
      title: 'TaskAI',
      description: 'SaaS Framer Template',
      image: '/logo3.png',    },
    {
      id: 4,
      title: 'Ruya',
      description: 'SaaS Framer Template',
      image: '/logo4.png',    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-10">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-6xl font-semibold leading-tight w-4/6">
          Recent Projects and <span className="text-purple-500 ">Achievements</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
