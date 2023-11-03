import React from "react";
import { MAN } from "./assets/images";
import { HeroInfo } from "./components";
import { motion } from "framer-motion";
import PersonalInfo from "../../../constants/PersonalInfo";

const HeroSection: React.FC = () => {
  return (
    <div id={'hero'} className=" relative gap- py- pr-32 text-white flex items-center">
      <motion.div
        initial={{ letterSpacing: 0 }}
        animate={{
          letterSpacing: "8px",
          transition: { type: "spring", stiffness: 100 },
        }}
        className="w-32 flex items-center justify-center text-xs text-teal-950 font-bold tracking-[6px] -rotate-90"
      >
        {PersonalInfo.email}
      </motion.div>
      <motion.img
        initial={{ opacity:0,right:'100px'}}
        whileInView={{
          opacity:1,
          right:'0px',
          transition: {type: "spring", stiffness: 40 , delay:0.3 },
        }}
        className="h-[43rem] relative z-10 mr-10 shadow-2xl"
        src={MAN}
        alt=""
      />
      <HeroInfo />
      <div className="h-52 w-72  absolute bg-teal-500 blur-[12rem] right-30 bottom-0 rounded-full"></div>
      <h1 className="absolute bottom-[-3rem] right-[45rem] text-9xl text-teal-950/20">
        {PersonalInfo.name}
      </h1>
    </div>
  );
};

export default HeroSection;
