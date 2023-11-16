import React, {useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
// import { SkillsSection } from "./SkillsSection";
import { MoreAboutMe } from "./MoreAboutMe";
import { Footer } from "./Footer";
import { NavLinksFixed } from "./NavLinksFixed";
import { ProjectSection } from "./ProjectSection";
import { Cursor } from "./CustomCursor";

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
      <div
        id="home"
        className=" bg-black md:bg-gradient-to-r from-black to-custom-gray overflow-hidden cursor-none text-white"
      >
        <NavBar />
        <NavLinksFixed scrollPosition={scrollPosition} />
        <HeroSection />
        <ProjectSection />
        <MoreAboutMe />
        <Footer />
        <div
          style={{
            left: `${0}px`,
            top: `${500 + scrollPosition / 1.3}px`,
          }}
          className={`h-32 w-32 hidden sm:block absolute bg-teal-5 bg-custom-ascent blur-[6rem] top-0 rounded-full pointer-events-none`}
        ></div>
        <Cursor mousePos={mousePos} scrollPosition={scrollPosition}/>
      </div>
  );
};

export default HomeScreen;
