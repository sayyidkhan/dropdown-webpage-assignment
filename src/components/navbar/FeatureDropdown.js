import React from "react";
import "../../styling/featureDropdown.css";

const FeatureDropdown = (props) => {
  return (
    <div className="featureDropdown">
      <img  src={props.img}></img>
      <a > {props.text} </a>
    </div>
  );
};

export default FeatureDropdown;
