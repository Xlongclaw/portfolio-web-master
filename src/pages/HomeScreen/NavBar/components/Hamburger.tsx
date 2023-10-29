import React, { useState } from "react";
import * as Icon from "react-feather";
import HamburgerLinks from "../../../../constants/HamburgerLinks";
import { NavLink } from "react-router-dom";

const Hamburger: React.FC = () => {
    const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className="block md:hidden relative cursor-pointer">
      <div onClick={()=>setOpenMenu(!openMenu)} className="">
        <Icon.Menu />
      </div>
      <div className={` ${openMenu?"flex":"hidden"} absolute flex-col bg-custom-light-gray text-xs tracking-widest right-0 top-8`}>
      {
            HamburgerLinks.map((currentLink,index)=>(
                <NavLink className={' hover:text-custom-red py-3 px-5 hover:bg-custom-dark-gray border-l-4 border-[#262626]  hover:border-custom-red transition-all'} key={index} to={currentLink.link}>{currentLink.title}</NavLink>
            ))
        }
      </div>
    </div>
  );
};

export default Hamburger;
