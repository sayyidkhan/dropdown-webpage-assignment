import React from "react";
import "../../styling/navbar.css";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import iconCalendar from "../../images/icon-calendar.svg";
import iconTodo from "../../images/icon-todo.svg";
import iconReminders from "../../images/icon-reminders.svg";
import iconPlanning from "../../images/icon-planning.svg";
import { useState, useEffect } from "react";
import FeatureDropdown from "./FeatureDropdown";
import CompanyDropDown from "./CompanyDropDown";

const NavBar = () => {
  const [featureList, setFeatureList] = useState(0);
  const [companyList, setCompanyList] = useState(0);

  const onHoverFeatures = (e) => {};

  useEffect(() => {
    console.log("featureList hovered! ", featureList);
  }, [featureList]);

  useEffect(() => {
    console.log("companyList hovered! ", companyList);
  }, [companyList]);

  return (
    <div className="navbar">
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
              <FeatureDropdown img={iconTodo} text={"Todo List"} />
              <FeatureDropdown img={iconCalendar} text={"Calendar"} />
              <FeatureDropdown img={iconReminders} text={"Reminders"} />
              <FeatureDropdown img={iconPlanning} text={"Planning"} />
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
              <CompanyDropDown text={"History"} />
              <CompanyDropDown text={"Our Team"} />
              <CompanyDropDown text={"Blog"} />
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
