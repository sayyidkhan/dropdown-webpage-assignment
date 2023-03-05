import React from "react";
import "../../styling/featureDropdown.css";

const FeatureDropdown = (props) => {
  return (
    <div className="featureDropdown">
      <img src={props.icon}></img>
      <a> {props.name} </a>
    </div>
  );
};

export default FeatureDropdown;
