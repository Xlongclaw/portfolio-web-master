import React from "react";

const AboutWrapper: React.FC<{
  title: string;
  description: string;
  buttonTitle: string;
  images: Array<string>;
}> = ({ title, description, buttonTitle, images }) => {
  return (
    <div  className=" bg-custom-black/0 relative z-10 flex justify-between bg-custom-gray shadow-2xl">
      <div className=" relative h-[35rem] w-1/3 flex justify-center items-center bg-cover bg-[url('./common/assets/images/about_pic_33.jpg')]">
        <div className="relative h-16">
          <h3 className="font-oswald text-5xl font-medium relative left-[0px] top-[12px] text-custom-ascent">
            {title}
          </h3>
          <h3 className="font-oswald text-5xl font-medium absolute left-[2px] top-[14px]">
            {title}
          </h3>
        </div>
      </div>
      <div className="w-2/3 px-32 flex flex-col items-center justify-center">
        <h4 className="mb-10">{description}</h4>
        <h5 className="my-4 text-yellow-500 font-semibold text-xs">TECHSTACK</h5>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {images.map((image, index) => (
            <img key={index}
              className="w-16 border border-custom-light-gray p-2"
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
