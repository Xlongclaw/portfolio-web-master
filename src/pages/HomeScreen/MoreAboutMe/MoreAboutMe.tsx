import React, { useState } from "react";
import { AboutWrapper } from "./components";
import AboutMe from "../../../constants/AboutMe";
import * as Icon from "react-feather";
import { motion, useAnimationControls } from "framer-motion";

const MoreAboutMe: React.FC = () => {
  const controls = useAnimationControls();
  const [aboutIndex, setAboutIndex] = useState(0);
  const handleBackPress = () => {
    controls.start({
      // x:['0%','150%','-150%','0%'],
      opacity: [1, 0, 0, 0, 1],
      transition: { duration: 1 },
    });
    setTimeout(() => {
      if (aboutIndex !== 0) setAboutIndex(aboutIndex - 1);
      else setAboutIndex(AboutMe.length - 1);
    }, 500);
  };
  const handleNextPress = () => {
    controls.start({
      // x:['0%','150%','-150%','0%'],
      opacity: [1, 0, 0, 0, 1],
      transition: { duration: 1 },
    });
    setTimeout(() => {
      if (aboutIndex !== AboutMe.length - 1) setAboutIndex(aboutIndex + 1);
      else setAboutIndex(0);
    }, 500);
  };
  return (
    <div className="text-white flex flex-col items-center mt-32 mx-16 mb-32 tracking-widest relative">
      <h3 className="text-6xl relative font-semibold">
        ABOUT ME<span className="text-custom-ascent">.</span>
      </h3>
      <h3 className="text-sm mb-16 text-teal-900 font-semibold">
        A LITTLE MORE INFORMATION ABOUT ME.{" "}
      </h3>
      <motion.div animate={controls} className="relative z-20 w-4/5 mb-16">
        <AboutWrapper
          buttonTitle={AboutMe[aboutIndex].buttonTitle}
          description={AboutMe[aboutIndex].description}
          title={AboutMe[aboutIndex].title}
          images={AboutMe[aboutIndex].images}
        />
        <div className=" absolute bottom-0 right-0 flex items-end z-20">
          <button
            onClick={() => handleBackPress()}
            className="bg-black w-[3rem] justify-center items-center flex h-[3rem] hover:w-[4rem] transition-all duration-300 hover:h-[4rem]"
          >
            <Icon.ChevronLeft
              // size={48}
              className=""
            />
          </button>
          <button
            onClick={() => handleNextPress()}
            className="bg-custom-ascent w-[3rem] justify-center items-center flex h-[3rem] hover:w-[4rem] transition-all duration-300 hover:h-[4rem]"
          >
            <Icon.ChevronRight
              // size={48}
              className=""
            />
          </button>
        </div>
      </motion.div>
      <div className="h-52 w-72  absolute bg-teal-500 blur-[10rem] right-0 bottom-0 rounded-full"></div>
    </div>
  );
};

export default MoreAboutMe;
