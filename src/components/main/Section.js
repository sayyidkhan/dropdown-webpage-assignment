import React from "react";
import imageherodesktop from "../../images/image-hero-desktop.png";
import iamgeheromobile from "../../images/image-hero-mobile.png";
import {clientIcon} from "../../resources/data";

const Section = () => {
    return (
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-4">
                {/* div used to center align */}
                <div className="flex justify-center items-center vertical-align:bottom h-full">
                    <div className="w-full sm:w-3/5">
                        {/* header 1 */}
                        <div className=" xl:text-8xl md:text-6xl text-4xl font-bold text-center lg:text-left lg:pb-10 lg:pt-10">
                            Make remote work
                        </div>
                        <br/>
                        {/* description */}
                        <div className="w-8/12 font-medium text-center sm:text-left whitespace-normal overflow-hidden ml-20 lg:ml-0">
                            Get your team in sync, no matter your location. Streamline processes,
                            create team rituals, and watch productivity soar
                        </div>
                        {/* button */}
                        <div className="text-center lg:text-left">
                            <button className="
                            items-center mx-0 px-8 py-3
                            box-border border-2 border-gray-500 rounded-2xl min-w-max my-10
                            text-white lg:text-black
                            bg-black lg:bg-transparent
                            ">
                                Learn more
                            </button>
                        </div>
                        {/* icons */}
                        <div className="mt-auto w-full columns-4 space-between p-3 lg:pt-48">
                            <img src={clientIcon[0].icon} />
                            <img src={clientIcon[1].icon} />
                            <img src={clientIcon[2].icon} />
                            <img src={clientIcon[3].icon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 p-4">
                <div className="lg:ml-48">
                    <img className="object-fill hidden sm:block w-9/12" src={imageherodesktop} alt="Large image" />
                    <img className="object-fill sm:hidden" src={iamgeheromobile} alt="Small image" />
                </div>
            </div>
        </div>
    );
};

export default Section;
