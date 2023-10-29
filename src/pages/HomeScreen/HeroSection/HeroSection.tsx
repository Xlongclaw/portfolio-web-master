import React from "react";
import { MAN, MAN_FULL } from "./assets/images";
import { HeroInfo } from "./components";
import * as Icon from "react-feather";


const HeroSection: React.FC = () => {
  return (
    <div className=" relative gap- py- pr-32 text-white flex items-center">
      <div className="w-32 flex items-center justify-center text-xs text-teal-950 font-bold tracking-[6px] -rotate-90">
        xlongclaw@gmail.com
      </div>
      <img className="h-[43rem] relative z-10 mr-10" src={MAN} alt="" />
      <HeroInfo />
      <div className="h-52 w-72  absolute bg-teal-500 blur-[12rem] right-30 bottom-0 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
