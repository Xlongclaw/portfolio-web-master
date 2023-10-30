import React from "react";
import { ProjectWrapper } from "./components";
import MyProjects from "../../../constants/MyProjects";
import { motion } from "framer-motion";

const ProjectSection: React.FC = () => {
  return (
    <div className="px-16 mb-24 relative flex justify-start tracking-widest mt-44">
      <motion.div
        initial={{ opacity: 0,top:0,rotate:'270deg' }}
        whileInView={{ opacity: 1,top:200, rotate:'270deg', transition: { duration: 1, delay: 0.3 } }}
        className="flex flex-col absolute top-40 -rotate-90"
      >
        <h3 className="text-6xl relative font-semibold">
          PROJECTS<span className="text-custom-ascent">.</span>
        </h3>
        <h3 className="text-sm mb-16 text-teal-900 font-semibold">
          SOME OF MY VENTURES OF CREATIVITY.
        </h3>
      </motion.div>
      <div className="flex flex-wrap gap-8 ml-72">
        {MyProjects.map((project, index) => (
          <ProjectWrapper project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
