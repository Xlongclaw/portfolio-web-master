import React from "react";
import * as Icon from "react-feather";

const MoreAboutMe: React.FC = () => {
  return (
    <div className="text-white mt-32 mx-16 tracking-widest relative">
      <h3 className="text-6xl font-semibold">ABOUT ME.</h3>
      <h3 className="text-sm mb-16">A LITTLE MORE INFORMATION ABOUT ME.</h3>
      <div className="grid grid-cols-2 items-center justify-center px-16 mb-32">
        <div className=" p-6 ">
          <h3 className="text-4xl font-semibold mb-4 text-custom-ascent">Design.</h3>
          <h4 className="">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </h4>
        </div>
        <div className="flex justify-center items-center">
          <Icon.Anchor size={100} />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center px-16 ">
        <div className="flex justify-center items-center">
          <Icon.Award size={100} />
        </div>
        <div className=" p-6">
          <h3 className="text-4xl mb-4 font-semibold text-custom-ascent">Engineering.</h3>
          <h4 className="">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </h4>
        </div>
      </div>
      <div className="h-52 w-72  absolute bg-teal-500 blur-[10rem] right-0 bottom-0 rounded-full"></div>
    </div>
  );
};

export default MoreAboutMe;
