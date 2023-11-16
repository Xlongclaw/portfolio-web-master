import React from "react";
import { Button } from "../../../../common/components";
import * as Icon from "react-feather";
import PersonalInfo from "../../../../constants/PersonalInfo";

const HeroInfo: React.FC = () => {
  const handleAboutPress = () => {
    const aboutSection = document.getElementById("aboutme");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col py-10 relative top-[-15rem] md:top-0 z-40 mx-4 md:mx-0">
      <div className="text-4xl md:text-5xl tracking-widest">
        <span className="text-custom-ascent md:text-white font-semibold">HELLO</span>,
      </div>
      <div className="text-lg md:text-2xl tracking-widest">
        MY NAME IS <span className="font-bold">{PersonalInfo.name}</span>
      </div>
      <div className="text-xs md:text-base text-white/70 mt-6 tracking-widest">
        {PersonalInfo.description}
      </div>
      <button onClick={() => handleAboutPress} className="flex mt-6">
        <Button title="A LITTLE ABOUT ME">
          <Icon.ChevronRight size={18} />
        </Button>
      </button>
      <div className="flex gap-3 mx-1 mt-5">
        <a href={PersonalInfo.github}>
          <Icon.GitHub
            size={35}
            className="bg-custom-ascent md:hover:bg-custom-ascent p-2 transition-all"
          />
        </a>
        <a href={PersonalInfo.linkedin}>
          <Icon.Linkedin
            size={35}
            className="hover:bg-custom-ascent p-2 transition-all"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroInfo;
