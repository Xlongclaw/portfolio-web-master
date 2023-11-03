import React from "react";

const Button: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title,children }) => {
  return (
    <button className="border p-2 hover:p-0 transition-all duration-500 cursor-pointer flex items-center border-custom-light-gray">
      <div className=" hover:px-8 transition-all hover:text-custom-ascenta hover:bg-custom-ascent duration-500 py-2 px-4 text-white tracking-widest text-xs flex">{title}</div>
      <div>{children}</div>
    </button>
  );
};

export default Button;
