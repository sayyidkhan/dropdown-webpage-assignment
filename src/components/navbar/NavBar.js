import React from "react";
import "../../styling/navbar.css";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import { useState, useEffect } from "react";
import FeatureDropdown from "./FeatureDropdown";
import CompanyDropDown from "./CompanyDropDown";
import { featuresDropDownIcons, companyDropDownIcons } from "../../resources/data";

const NavBar = () => {
  const [featureList, setFeatureList] = useState(0);
  const [companyList, setCompanyList] = useState(0);

  const onHoverFeatures = (e) => {};

  useEffect(() => {}, [featureList]);

  useEffect(() => {}, [companyList]);

  return (
    <div className="navbar flex w-full">
      <div>
        <span className="pb-2 text-3xl">snap</span>
        <div
          onMouseEnter={() => setFeatureList(1)}
          // onMouseLeave={() => setFeatureList(0)}
          className="dropdown inline-block"
        >
          <button>Features</button>
          <img src={iconarrowdown} />

          {featureList ? (
            <span>
              <FeatureDropdown
                icon={featuresDropDownIcons[0].icon}
                name={featuresDropDownIcons[0].name}
              />
              <FeatureDropdown
                icon={featuresDropDownIcons[1].icon}
                name={featuresDropDownIcons[1].name}
              />
              <FeatureDropdown
                icon={featuresDropDownIcons[2].icon}
                name={featuresDropDownIcons[2].name}
              />
              <FeatureDropdown
                icon={featuresDropDownIcons[3].icon}
                name={featuresDropDownIcons[3].name}
              />
            </span>
          ) : null}
        </div>
        <div
          onClick={() => setCompanyList(1)}
          // onMouseLeave={() => setCompanyList(0)}
          className="dropdown"
        >
          <button>Company</button>
          <img src={iconarrowdown} />
          {companyList ? (
            <span>
              <CompanyDropDown text={companyDropDownIcons[0].text} />
              <CompanyDropDown text={companyDropDownIcons[1].text} />
              <CompanyDropDown text={companyDropDownIcons[2].text} />
            </span>
          ) : null}
        </div>
        <span>Careers</span>
        <button>About</button>
      </div>
      <div>
        <button>Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
};

export default NavBar;
