import React from "react";


const Cursor: React.FC<{
  scrollPosition: number;
  mousePos: { x: number; y: number };
}> = ({ scrollPosition, mousePos }) => {
  return (
      <div className="hidden md:block">
        <div
          style={{
              left: `${mousePos.x - 48}px`,
              top: `${mousePos.y + scrollPosition - 48}px`,
              display: `${
              scrollPosition > document.body.scrollHeight - 800
                ? "none"
                : "block"
            }`,
        }}
          className={`h-24 w-24  absolute bg-teal-5 bg-custom-ascent blur-[8rem] top-0 rounded-full pointer-events-none`}
        ></div>
        <div
          style={{
              left: `${mousePos.x - 4}px`,
              top: `${mousePos.y + scrollPosition - 4}px`,
              height: `${0.5}rem`,
              width: `${0.5}rem`,
            }}
          className={` absolute border-2 z-30  shadow-2xl top-0 rounded-full pointer-events-none`}
        ></div>
      </div>
  );
};

export default Cursor;
