import React from "react";
import { SkillsWrapper } from "./components";

const SkillsSection: React.FC = () => {
  return (
    <div className="text-white px-16">
      <div className="my-16">
        <h2 className="text-7xl">SKILLS</h2>
        <h3 className="tracking-widest">SOME OF THE SUPERPOWERS THAT I OWN.</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <SkillsWrapper/>
        <SkillsWrapper/>
        <SkillsWrapper/>
        <SkillsWrapper/>
        <SkillsWrapper/>
        <SkillsWrapper/>
        <SkillsWrapper/>
      </div>
    </div>
  );
};

export default SkillsSection;
