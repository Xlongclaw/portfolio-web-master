import React from "react";
import { useNavigate } from "react-router-dom";


const Logo: React.FC = () => {
  const navigate = useNavigate()
  return (
    <h1 onClick={()=>navigate('/')} className="text-xl font-bold cursor-pointer">
      <span className=" hover:text-4xl transition-all">X</span>LC
    </h1>
  );
};

export default Logo;
