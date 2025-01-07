import React from "react";

const posts = [
  {
    id: 1,
    date: "Apr 8, 2022",
    title: "Starting and Growing a Career in Web Design",
    image: "logo1.png",
  },
  {
    id: 2,
    date: "Mar 15, 2022",
    title: "Create a Landing Page That Performs Great",
    image: "logo2.png",
  },
  {
    id: 3,
    date: "Feb 28, 2022",
    title: "How Can Designers Prepare for the Future?",
    image: "logo3.png",
  },
  {
    id: 4,
    date: "Jan 12, 2022",
    title: "How to Create an Effective Design Portfolio",
    image: "logo4.png",
  },
];

const Thoughtspage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-6xl font-bold mb-8 text-center w-4/6  ">
          Design Thoughts and <span className="text-purple-500">Perspectives</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Entire card hover */}
              <div className="relative h-56 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute w-full h-full object-cover"
                />
              </div>
              {/* Text content */}
              <div className="p-6 group-hover:bg-gray-900 transition-colors duration-300">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughtspage;
