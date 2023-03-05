import React from "react";
import iconarrowdown from "../../images/icon-arrow-down.svg";
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
    <div className="navbar flex w-full p-2 mx-auto justify-between font-bold h-16">
      <div className="flex items-center [&>*]:mx-4">
        <div className="pb-2 text-3xl ">snap</div>
        <div
          onMouseEnter={() => setFeatureList(1)}
          // onMouseLeave={() => setFeatureList(0)}
          className="dropdown inline-block cursor-pointer hover:mt-12"
        >
          <button className="">Features</button>
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
          className="dropdown cursor-pointer hover:pt-6"
          onMouseEnter={() => setCompanyList(1)}
          onMouseLeave={() => setCompanyList(0)}
        >
          <button className="">Company</button>
          <img className="inline ml-2" src={iconarrowdown} />
          {companyList ? (
            <span>
              <CompanyDropDown text={companyDropDownIcons[0].text} />
              {/* <CompanyDropDown text={companyDropDownIcons[1].text} /> */}
              {/* <CompanyDropDown text={companyDropDownIcons[2].text} /> */}
            </span>
          ) : null}
        </div>
        <div>Careers</div>
        <button>About</button>
      </div>
      <div className="flex items-center my-auto [&>button]:mx-4 ">
        <button>Login</button>
        <button className="register border-solid border-gray-700 border-2 rounded-xl py-1 px-4">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
