import React from "react";
import { ProjectWrapper } from "./components";
import MyProjects from "../../../constants/MyProjects";
import { motion } from "framer-motion";

const ProjectSection: React.FC = () => {
  return (
    <div id="projects" className="px-0 md:px-16 mb-24 relative flex flex-col md:flex-row justify-center items-center md:justify-start tracking-widest pt-24 mt-20">
      <motion.div
        initial={{ opacity: 0,top:0 }}
        whileInView={{ opacity: 1,top:200, transition: { duration: 1, delay: 0.3 } }}
        className="flex flex-col md:absolute md:top-40 md:-rotate-90"
      >
        <h3 className="text-4xl md:text-6xl relative font-semibold">
          PROJECTS<span className="text-custom-ascent">.</span>
        </h3>
        <h3 className="text-xs tracking-normal md:tracking-widest md:text-sm mb-8 md:mb-16 text-teal-900 font-semibold">
          SOME OF MY VENTURES OF CREATIVITY.
        </h3>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-8 md:ml-72 md:overflow-y-scroll md:h-[41.5rem] scroll hide-scroll">
        {MyProjects.map((project, index) => (
          <ProjectWrapper key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
