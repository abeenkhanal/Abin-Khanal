import React from "react";

const tools = [
    {
        name: "SiteFlow",
        description: "Website Builder",
        logo: "/logo1.png",
        bgColor: "bg-gray-900",
    },
    {
        name: "Pixelo",
        description: "Design Tool",
        logo: "/logo2.png",
        bgColor: "bg-gray-900",
    },
    {
        name: "JuiceBox",
        description: "Payment Provider",
        logo: "/logo3.png",
        bgColor: "bg-gray-900",
    },
    {
        name: "TalkAI",
        description: "AI Assistant",
        logo: "/logo4.png",
        bgColor: "bg-gray-900",
    },
    {
        name: "NoteSpace",
        description: "Productivity Tool",
        logo: "/logo5.png",
        bgColor: "bg-gray-900",
    },
    {
        name: "WebCraft",
        description: "React Framework",
        logo: "/logo1.png",
        bgColor: "bg-gray-900",
    },
];

const ToolsPage = () => {
    return (
        <div className="bg-black text-white py-20">
            {/* Title */}
            <div className="mb-12">
                <h2 className="text-6xl font-bold">
                    Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
                </h2>
            </div>

            {/* Tools Grid */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {tools.map((tool, index) => (
                    <button>
                    <div
                        key={index}
                        className={`flex items-center space-x-4 p-6 rounded-lg shadow-lg bg-[#1c1c1e]  hover:bg-purple-700 transition-colors duration-700 `}
                    >
                        {/* Tool Logo */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg ">
                            <img src={tool.logo} alt={tool.name} className="w-8 h-8" />
                        </div>

                        {/* Tool Details */}
                        <div>
                            <h3 className="text-lg font-bold">{tool.name}</h3>
                            <p className="text-sm text-gray-400">{tool.description}</p>
                        </div>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ToolsPage;
