import React from "react";
import * as Icon from "react-feather";
import { motion } from "framer-motion";

const ProjectWrapper: React.FC<{
  project: {
    name: string;
    githubLink: string;
    link: string;
    figmaLink: string;
    image: string;
  };
}> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {duration:1,delay:0.3} }}
      className="flex flex-col gap-3"
    >
      <div className="border border-custom-dark-gray h-[60vw] md:h-64 ">
        <img className="h-[60vw] md:h-64" src={project.image} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="border border-custom-dark-gray h-12 w-[48%] flex justify-center items-center gap-2">
          <h4 className="text-xs">{project.name}</h4>
        </div>
        <a href={project.githubLink} className="border border-custom-dark-gray h-12 w-[15%] flex justify-center items-center hover:bg-custom-ascent transition-all duration-300">
          <Icon.GitHub size={15} />
        </a>
        <a href={project.figmaLink} className="border border-custom-dark-gray h-12 w-[15%] flex justify-center items-center hover:bg-custom-ascent transition-all duration-300">
          <Icon.Figma size={15} />
        </a>
        <a href={project.link} className="border border-custom-dark-gray h-12 w-[15%] flex justify-center items-center hover:bg-custom-ascent transition-all duration-300">
          <Icon.ChevronRight size={15} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectWrapper;
