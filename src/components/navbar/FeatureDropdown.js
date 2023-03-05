import React from "react";

const FeatureDropdown = (props) => {
  return (
    <div className="[&>*]:inline mx-2">
      <img  src={props.icon}></img>
      <a> {props.name} </a>
    </div>
  );
};

export default FeatureDropdown;
