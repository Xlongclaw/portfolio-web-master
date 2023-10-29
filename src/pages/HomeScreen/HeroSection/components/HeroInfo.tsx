import React from "react";
import { Button } from "../../../../common/components";
import * as Icon from "react-feather";

const HeroInfo: React.FC = () => {
  return (
    <div className="flex flex-col py-10">
      <div className="text-5xl tracking-widest">
        <span className=" font-semibold">HELLO</span>,
      </div>
      <div className="text-2xl tracking-widest">
        MY NAME IS <span className="font-bold">LONGCLAW</span>
      </div>
      <div className="text- mt-6 tracking-widest">
        I'm a Web Designer and Developer from India, helping companies deliver
        beautiful, intuitive online experiences through solid research,
        thoughtfull design an accessible codes.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate illum veritatis, ducimus quia eos expedita? Quia incidunt eveniet sunt aperiam deserunt obcaecati, temporibus officia laudantium dolore aliquam repudiandae! Necessitatibus, consectetur.
      </div>
      <div className="flex mt-6">
        <Button title="A LITTLE ABOUT ME">
          <Icon.ChevronRight size={18} />
        </Button>
      </div>
      <div className="flex gap-3 mx-1 mt-5">
        <Icon.GitHub
          size={35}
          className="hover:bg-custom-ascent p-2 transition-all"
        />
        <Icon.Linkedin
          size={35}
          className="hover:bg-custom-ascent p-2 transition-all"
        />
      </div>
    </div>
  );
};

export default HeroInfo;
