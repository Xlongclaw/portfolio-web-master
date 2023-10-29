import React from "react";
import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { MoreAboutMe } from "./MoreAboutMe";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black to-custom-gray pb-24">
      <NavBar />
      <HeroSection/>
      <MoreAboutMe/>
      {/* <SkillsSection/> */}
    </div>
  );
};

export default HomeScreen;
