import React from "react";
import { FiGithub } from "react-icons/fi";
import assets from "../assets"; // Assuming your assets are exported like { project1, project2, project3 }

const Projects = () => {
  const projects = [
    {
      title: "Keeper",
      description: "A decentralized application using blockchain canisters for secure data storage.",
      image: assets.keeper, // Replace with your actual asset names
      repoLink: "https://github.com/Sreeduvarakarajendran/Keeper.git",
    },
    {
      title: "LMS",
      description: "A scalable learning platform for course management and progress tracking.",
      image: assets.courses,
      repoLink: "https://github.com/Sreeduvarakarajendran/LMS.git",
    },
    {
      title: "DBank",
      description: "A secure blockchain banking platform for managing accounts, transactions, and interest.",
      image: assets.wallet,
      repoLink: "https://github.com/Sreeduvarakarajendran/Dbank_blockChain.git",
    },
  ];

  return (
    <section className="w-full py-16 bg-transparent relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#7400b8] mb-12 font-playfair drop-shadow-lg">
          My Projects
        </h2>

        {/* Responsive Grid: smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/10               
                border-2 border-white    
                rounded-xl
                overflow-hidden
                hover:bg-white/20
                hover:border-purple-300
                transition-all duration-300
                flex flex-col
                h-full
              "
            >
              {/* Fixed height image - no blur on card */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow text-white">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm flex-grow mb-4">
                  {project.description}
                </p>

                {/* GitHub Button */}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-5 py-2 bg-white/20 border border-white text-white text-sm font-medium rounded-lg hover:bg-white/30 hover:border-purple-200 transition duration-300"
                >
                  <FiGithub className="text-xl" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;