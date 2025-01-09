import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects.json';
const ProjectPage = () => {

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-6xl font-semibold leading-tight w-4/6 md:w-5/6">
          Recent Projects and <span className="text-purple-500 ">Achievements</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {projects.map((project, i) => (
           <Link href={'/Projects/'+project.id} key={project.id}>
          {/* // <Link href={project.link} key={i}> */}
           <div
              key={project.id}
              className="group relative bg-pink rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={project.primaryimage}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 group-hover:bg-gray-900 transition-colors duration-300">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">{project.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
