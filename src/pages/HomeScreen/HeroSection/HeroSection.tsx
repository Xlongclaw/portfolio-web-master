import React from "react";
import { MAN } from "./assets/images";
import { HeroInfo } from "./components";
import { motion } from "framer-motion";
import PersonalInfo from "../../../constants/PersonalInfo";

const HeroSection: React.FC = () => {
  return (
    <div id={'hero'} className=" relative md:pr-32 text-white mb-[-25rem] md:mb-0 flex items-center md:flex-row flex-row-reverse ">
      <motion.div
        initial={{ letterSpacing: 0 }}
        animate={{
          letterSpacing: "8px",
          transition: { type: "spring", stiffness: 100 },
        }}
        className=" hidden w-16 sm:w-24 md:w-32 md:flex items-center justify-center text-xs text-teal-95 text-custom-ascent/20 font-bold tracking-[6px] -rotate-90"
      >
        {PersonalInfo.email}
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center">

      <motion.img
        initial={{ opacity:0,right:'100px'}}
        whileInView={{
          opacity:1,
          right:'0px',
          transition: {type: "spring", stiffness: 20 , delay:0 },
        }}
        className="h-[30rem] md:h-[43rem] relative z-10 md:mr-10 shadow-2xl"
        src={MAN}
        alt=""
      />
      <HeroInfo />
      </div>
      <div className="h-52 w-72 hidden md:block  absolute bg-teal-5 bg-custom-ascent blur-[12rem] right-30 bottom-0 rounded-full"></div>
      <h1 className="absolute bottom-[-3rem] right-[45rem] text-9xl text-custom-ascent/20">
        {PersonalInfo.name}
      </h1>
    </div>
  );
};

export default HeroSection;
