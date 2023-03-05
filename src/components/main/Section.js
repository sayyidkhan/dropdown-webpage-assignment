import React from "react";
import imageherodesktop from "../../images/image-hero-desktop.png";
import { clientIcon } from "../../resources/data";

const Section = () => {
  return (
    <div className=" flex justify-between [&>*]:w-full [&>div]:p-20">
      <div className="flex-row content-evenly w-full">
        <div className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-bold">
          Make <br /> remote work
        </div>
        <br /> <br />
        <h2>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </h2>
        <button className="mx-0 px-4 py-3 bg-black text-white box-border border-2 border-gray-500 rounded-xl min-w-max my-10 ">
          Learn more
        </button>
        <h2 className="flex">
          <img src={clientIcon[0].icon} />
          <img src={clientIcon[1].icon} />
          <img src={clientIcon[2].icon} />
          <img src={clientIcon[3].icon} />
        </h2>
      </div>
      <div>
        <img className="image w-full" src={imageherodesktop} />
      </div>
    </div>
  );
};

export default Section;
