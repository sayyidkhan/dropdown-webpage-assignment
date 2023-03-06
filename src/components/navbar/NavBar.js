import React from "react";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import iconmenu from "../../images/icon-menu.svg";

import { useState, useEffect } from "react";
import FeatureDropdown from "./FeatureDropdown";
import {
  featuresDropDownIcons,
  companyDropDownIcons,
} from "../../resources/data";
import DropDownSample from "./BurgerMenu";
import CompanyDropDown from "./CompanyDropDown";

const NavBar = () => {
  const [featureList, setFeatureList] = useState(false);
  const [companyList, setCompanyList] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuBar = () => {
    setBurgerMenu((current) => !current);
  };

  useEffect(() => {
    console.log(
      "featureList",
      featureList,
      "companyList",
      companyList,
      "burgerMenu",
      burgerMenu
    );
  }, [featureList, companyList, burgerMenu]);

  return (
    <div className="navbar flex w-full md:p-2 p-8 mx-auto justify-between font-bold h-16">
      <div className="flex items-center [&>*]:mx-2 md:[&>*]:mx-4 text-sm md:text-base [&>.webview]:hidden sm:[&>.webview]:inline">
        <div className="pb-2 text-4xl">snap</div>
        <div
          onMouseEnter={() => setFeatureList(1)}
          // onMouseLeave={() => setFeatureList(0)}
          className="webview dropdown inline-block cursor-pointer"
        >
          <button>Features</button>
          <img className="inline ml-2" src={iconarrowdown} />
          {featureList ? (
            <div
              class="absolute left-0 p-2 px-32 m-2 text-xs leading-8 text-black drop-shadow-2xl"
              type="button"
            >
              {featuresDropDownIcons.map((v) => (
                <FeatureDropdown icon={v.icon} name={v.name} />
              ))}
            </div>
          ) : null}
        </div>
        <div
          className="webview dropdown inline-block cursor-pointer"
          onMouseEnter={() => setCompanyList(1)}
          onMouseLeave={() => setCompanyList(0)}
        >
          <button>Company</button>
          <img className="inline ml-2" src={iconarrowdown} />
          {companyList ? (
            <div
              class="absolute left-24 m-2 p-2 px-32 text-xs leading-8 text-black drop-shadow-2xl"
              type="button"
            >
              {companyDropDownIcons.map((v) => (
                <CompanyDropDown text={v.text} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="webview">Careers</div>
        <button className="webview">About</button>
      </div>
      <div
        className="flex items-center md:[&>*]:mx-4 [&>button]:mx-2 text-sm md:text-base 
      [&>button]:hidden sm:[&>button]:inline"
      >
        <button>Login</button>
        <button className="border-solid border-gray-700 border-2 rounded-xl py-1 px-4">
          Register
        </button>
        <div className="sm:hidden">
          <button
            onClick={() => setBurgerMenu((current) => !current)}
            className="inline my-auto"
          >
            <img src={!burgerMenu && iconmenu} />
          </button>
        </div>
        {burgerMenu && <DropDownSample burgerMenuBar={burgerMenuBar} />}
      </div>
    </div>
  );
};

export default NavBar;
