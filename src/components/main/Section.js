import React from "react";

import imageherodesktop from "../../images/image-hero-desktop.png";
import clientaudiophile from "../../images/client-audiophile.svg";
import clientdatabiz from "../../images/client-databiz.svg";
import clientmaker from "../../images/client-maker.svg";
import clientmeet from "../../images/client-meet.svg";
import "../../styling/section.css";


const Section = () => {

  return (
    <div className="section">
      <div className="flex-row pb-0 mb-0" >
        <h1 className="text-6xl font-bold">
          Make <br /> remote work
        </h1><br /> <br /> 
        <h2>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </h2>
        <button className="mx-0 px-4 py-3 bg-black text-white box-border border-2 border-gray-500 rounded-xl min-w-max my-10 ">
          Learn more
        </button>
        <h2 className="flex">
          <img src={clientdatabiz} />
          <img src={clientaudiophile} />
          <img src={clientmeet} />
          <img src={clientmaker} />
        </h2>
      </div>
      <div>
        <img className="image " src={imageherodesktop} />
      </div>
    </div>
  );
};

export default Section;
