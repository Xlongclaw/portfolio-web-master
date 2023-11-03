import React from "react";
import { NavLink } from "react-router-dom";
import NavigationLinks from "../../../../constants/NavigationLinks";

const NavLinks: React.FC = () => {
  return (
    <div className="gap-5 text-xs hidden md:flex tracking-widest">
      {NavigationLinks.map((currentLink, index) => {
        const element = document.getElementById(currentLink.id)
        return (
          <NavLink
          onClick={()=>element?.scrollIntoView({behavior:"smooth"})}
            // onClick={()=>window.scrollTo({top:currentLink.minScrollPosition,behavior:"smooth"})}
            className={` ${
              index === 0 ? "text-custom-ascent" : ""
            } hover:text-custom-ascent`}
            key={index}
            to={currentLink.link}
          >
            {currentLink.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
