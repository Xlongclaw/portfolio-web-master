import React from "react";
import { Hamburger, Logo, NavLinks } from "./components";
import { Button } from "../../../common/components";

const NavBar: React.FC = () => {
  return (
    <nav className="h-16 md:px-16 px-8 bg-gradient-to-l border- border-custom-gray from-custom-gray shadow-2xl to-black text-custom-lite flex  justify-between items-center">
      <NavLinks />
      <Logo />
      <Hamburger />
      <div className=" min-w-[8rem] md:flex hidden gap-6 justify-center items-center">
        <Button title="HIRE ME" />
      </div>
    </nav>
  );
};

export default NavBar;
