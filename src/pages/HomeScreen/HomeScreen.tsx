import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
// import { SkillsSection } from "./SkillsSection";
import { MoreAboutMe } from "./MoreAboutMe";
import { Footer } from "./Footer";
import { NavLinksFixed } from "./NavLinksFixed";
import { ProjectSection } from "./ProjectSection";

const HomeScreen: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-gradient-to-r from-black to-custom-gray cursor-none text-white">
      <NavBar />
      <NavLinksFixed scrollPosition={scrollPosition}/>
      <HeroSection />
      <ProjectSection/>
      <MoreAboutMe />
      <Footer />
      <div
        style={{
          left: `${mousePos.x - 64}px`,
          top: `${mousePos.y + scrollPosition - 64}px`,
        }}
        className={`h-32 w-32  absolute bg-teal-500 blur-[8rem] top-0 rounded-full pointer-events-none`}
      ></div>
      <div
        style={{
          left: `${mousePos.x - 4}px`,
          top: `${mousePos.y + scrollPosition - 4}px`,
        }}
        className={`h-2 w-2  absolute border-2  shadow-2xl top-0 rounded-full pointer-events-none`}
      ></div>
      {/* <SkillsSection/> */}
    </div>
  );
};

export default HomeScreen;
