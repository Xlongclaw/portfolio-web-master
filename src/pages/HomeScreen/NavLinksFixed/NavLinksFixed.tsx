import React from "react";
import { NavLink } from "react-router-dom";
import NavigationLinks from "../../../constants/NavigationLinks";

const NavLinksFixed: React.FC<{ scrollPosition: number }> = ({
  scrollPosition,
}) => {
  
  return (
    <div
      className={`gap-5 bg-custom-gray px-8 text-xs 
      hidden md:flex tracking-widest fixed z-20 top-0 left-8
       h-16 justify-center items-center transition-all duration-500 ${scrollPosition>100?"opacity-100":"opacity-0 pointer-events-none"}`}
    >
      {NavigationLinks.map((currentLink, index) => (
        <NavLink onClick={()=>window.scrollTo({top:currentLink.minScrollPosition,behavior:"smooth"})}
          className={`hover:text-custom-ascent ${
            currentLink.minScrollPosition <= scrollPosition &&
            currentLink.maxScrollPosition >= scrollPosition
              ? "text-custom-ascent font-semibold"
              : "text-white"
          }`}
          key={index}
          to={currentLink.link}
        >
          {currentLink.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinksFixed;
