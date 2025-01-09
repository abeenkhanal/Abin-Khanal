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
                <a href="/Projects" className="text-gray-400 hover:text-gray-200 flex items-center gap-2">
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
    {project.images && project.images.length > 0 ? (
        project.images.map((image, index) => (
            <img 
                key={index} 
                src={image} 
                alt={`Project Image ${index + 1}`} 
                className="w-full mb-4" // Add margin between images
            />
        ))
    ) : (
        <p>No images available</p> // Fallback if no images exist
    )}
</div>

        </div>
    )
}

export default page
