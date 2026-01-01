"use client";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import React from "react";
import { allProjects } from "../data/projectsData";
import { iconMap } from "../data/iconsMap";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "FullStack"];

  // Filter projects based on selected category
  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-center text-sm md:text-md text-gray-500 mb-10">
        Explore by category
      </p>

      {/* Category Tabs */}
      <div className="relative w-fit mx-auto mb-12 bg-gray-100 p-1 rounded-full shadow-inner flex">
        <span
          className={`absolute top-1 left-1 w-1/4 h-10 rounded-full bg-blue-600 transition-all duration-300 ${
            activeCategory === "Frontend"
              ? "translate-x-full"
              : activeCategory === "Backend"
              ? "translate-x-[200%]"
              : activeCategory === "FullStack"
              ? "translate-x-[300%]"
              : "translate-x-0"
          }`}
        ></span>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative z-10 w-[70px] md:w-40 h-10 text-xs md:text-sm px-2 font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
              activeCategory === cat ? "text-white" : "text-gray-800"
            }`}
          >
            {React.cloneElement(iconMap[cat], {
              className: `w-5 h-5 ${
                activeCategory === cat ? "text-white" : "text-blue-600"
              }`,
            })}
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
         // enables smooth position transitions
      >
        <AnimatePresence mode="wait">
          {filtered.map((project) => (
            <motion.div
              key={project.title} // unique key
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg flex flex-col justify-between transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full text-blue-600 text-2xl mb-4 mx-auto">
                {project.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-center text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-center text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
