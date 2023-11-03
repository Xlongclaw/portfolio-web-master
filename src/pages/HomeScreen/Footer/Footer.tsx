import React from "react";
import { Logo } from "../NavBar/components";
import * as Icon from "react-feather";
import PersonalInfo from "../../../constants/PersonalInfo";

const Footer: React.FC = () => {
  return (
    <section className="text-white tracking-widest py-4 bg-gradient-to-r to-custom-gray from-black  flex flex-co gap-6 justify-center items-center">
      <Logo />
      <div className="flex gap-3 my-3">
        <a href={PersonalInfo.github}>
          <Icon.GitHub size={16} color="#17d3ba" />
        </a>
        <a href={PersonalInfo.twitter}>
          <Icon.Twitter size={16} color="#17d3ba" />
        </a>
        <a href={PersonalInfo.linkedin}>
          <Icon.Linkedin size={16} color="#17d3ba" />
        </a>
      </div>
      <h4 className="text-xs text-">Copyright © 2023 xlongclaw.com</h4>
    </section>
  );
};

export default Footer;
