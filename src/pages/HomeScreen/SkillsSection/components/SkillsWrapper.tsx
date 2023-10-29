import React from "react";
import * as Icon from "react-feather";

const SkillsWrapper: React.FC = () => {
  return (
    <div className="p-6 bg-custom-black/50 tracking-widest relative flex  gap-8">
      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <Icon.Codesandbox color="#007acc" className="" size={40} />
        <h4 className="text-lg font-semibold">HTML</h4>
      </div>
      <div className="text-sm w-full">
        <h3 className="mb-2">Skill Level</h3>
        <div className="bg-gradient-to-br from-emerald-600 to-teal-500 h-3"></div>
        <h3 className="mt-2 text-xs">INTERMEDIATE</h3>
      </div>
    </div>
  );
};

export default SkillsWrapper;
