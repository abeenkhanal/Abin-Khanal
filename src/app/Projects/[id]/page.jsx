import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import Projects from '@/data/projects.json';
import { notFound } from 'next/navigation';


const page = async ({ params }) => {
    const { id } = await params;
    const project = Projects.find((project) => project.id === id);

    if (!project) notFound();



    return (
        // <div>
        //   this is one  {Stabraq}
        // </div>
        <div className="bg-black text-white min-h-screen py-20  md:px-12 lg:px-20">
            {/* Back Button */}
            <div className="mb-8">
                <a href="/projects" className="text-gray-400 hover:text-gray-200 flex items-center gap-2">
                    <span className="text-lg"><IoIosArrowRoundBack /> </span>
                    <span>All Projects</span>
                </a>
            </div>
            <div className=" ">
                <div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/logo3.png"valt="Project Image" className="w-full"/> 
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold mb-4 mt-4">{project.title}</h1>
                    <h2 className="text-lg text-gray-400 mb-6">
                        {project.description}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        {project.aboutdescription} 
                    </p>
                    
                       
                    
                </div>
                <div className="rounded-lg overflow-hidden shadow-md mt-7">
                        <img src={project.image} alt="Project Image" className="w-full"/> 
                    </div>
            </div>
        </div>
    )
}

export default page
