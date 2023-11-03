import React from "react";

const AboutWrapper: React.FC<{
  title: string;
  description: string;
  buttonTitle: string;
  images: Array<string>;
}> = ({ title, description, buttonTitle, images }) => {
  return (
    <div  className=" bg-custom-black/0 relative z-10 flex flex-col xl:flex-row justify-between bg-custom-gray shadow-2xl">
      <div className=" relative h-[12rem] lg:h-[15rem] xl:h-[35rem] w-auto xl:w-1/3 bg-center flex justify-center items-center bg-cover bg-[url('./common/assets/images/about_pic_33.webp')]">
        <div className="relative h-16">
          <h3 className="font-oswald text-4xl xl:text-5xl font-medium relative left-[0px] top-[12px] text-custom-ascent">
            {title}
          </h3>
          <h3 className="font-oswald text-4xl xl:text-5xl font-medium absolute left-[2px] top-[14px]">
            {title}
          </h3>
        </div>
      </div>
      <div className="w-auto xl:w-2/3 px-[5vw] xl:px-32 mb-14 xl:mb-0 flex flex-col items-center justify-center">
        <h4 className="mb-5 xl:mb-10 mt-5 xl:mt-0 tracking-wider lg:tracking-widest: text-xs lg:text-sm xl:text-base">{description}</h4>
        <h5 className="my-4 text-yellow-500 font-semibold text-xs">TECHSTACK</h5>
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4">
          {images.map((image, index) => (
            <img key={index}
              className="w-10 md:w-12 lg:w-14 xl:w-16 border border-custom-light-gray p-1 lg:p-2"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutWrapper;
