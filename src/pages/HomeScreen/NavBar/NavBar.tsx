import React from "react";
import { Hamburger, Logo, NavLinks } from "./components";
import { Button } from "../../../common/components";
import PersonalInfo from "../../../constants/PersonalInfo";

const NavBar: React.FC = () => {
  return (
    <nav className="h-16 md:px-16 px-8 bg-gradient-to-l border- border-custom-gray from-custom-gray shadow-2xl to-black text-custom-lite flex  justify-between items-center">
      <NavLinks />
      <Logo />
      <Hamburger />
      <a href={`mailto:${PersonalInfo.email}`} className=" min-w-[8rem] md:flex hidden gap-6 justify-center items-center">
        <Button title="HIRE ME" />
      </a>
    </nav>
  );
};

export default NavBar;
