import React from "react";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import iconmenu from "../../images/icon-menu.svg";
import { useState, useEffect } from "react";
import FeatureDropdown from "./FeatureDropdown";
import CompanyDropDown from "./CompanyDropDown";
import {
  featuresDropDownIcons,
  companyDropDownIcons,
} from "../../resources/data";

const NavBar = () => {
  const [featureList, setFeatureList] = useState(0);
  const [companyList, setCompanyList] = useState(0);

  const onHoverFeatures = (e) => {};

  useEffect(() => {}, [featureList]);

  useEffect(() => {}, [companyList]);

  return (
    <div className="navbar flex w-full md:p-2 p-8 mx-auto justify-between font-bold h-16">
      <div className="flex items-center [&>*]:mx-2 md:[&>*]:mx-4 sm:text-base text-sm [&>.webview]:hidden sm:[&>.webview]:inline">
        <div className="pb-2 text-3xl">snap</div>
        <div
          onMouseEnter={() => setFeatureList(1)}
          // onMouseLeave={() => setFeatureList(0)}
          className="webview dropdown inline-block cursor-pointer hover:mt-12"
        >
          <button>Features</button>
          <img className="inline ml-2" src={iconarrowdown} />

          {featureList ? (
            <div className="border-solid border-gray-700 border-2 rounded-xl ">
              <FeatureDropdown
                icon={featuresDropDownIcons[0].icon}
                name={featuresDropDownIcons[0].name}
              />
              <FeatureDropdown
                icon={featuresDropDownIcons[1].icon}
                name={featuresDropDownIcons[1].name}
              />
              {/* <FeatureDropdown
                icon={featuresDropDownIcons[2].icon}
                name={featuresDropDownIcons[2].name}
              />
              <FeatureDropdown
                icon={featuresDropDownIcons[3].icon}
                name={featuresDropDownIcons[3].name}
              /> */}
            </div>
          ) : null}
        </div>
        <div
          className="webview dropdown cursor-pointer hover:pt-6"
          onMouseEnter={() => setCompanyList(1)}
          onMouseLeave={() => setCompanyList(0)}
        >
          <button>Company</button>
          <img className="inline ml-2" src={iconarrowdown} />
          {companyList ? (
            <span>
              <CompanyDropDown text={companyDropDownIcons[0].text} />
              {/* <CompanyDropDown text={companyDropDownIcons[1].text} /> */}
              {/* <CompanyDropDown text={companyDropDownIcons[2].text} /> */}
            </span>
          ) : null}
        </div>
        <div className="webview">Careers</div>
        <button className="webview">About</button>
      </div>
      <div className="flex items-center md:[&>*]:mx-4 [&>*]:mx-2 sm:text-base text-sm [&>button]:hidden sm:[&>button]:inline">
        <button>Login</button>
        <button className="border-solid border-gray-700 border-2 rounded-xl py-1 px-4">
          Register
        </button>
        <div>
          <button className="sm:hidden inline my-auto">
            <img src={iconmenu} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
