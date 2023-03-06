import React from "react";
import iconclosemenu from "../../images/icon-close-menu.svg";

const DropDownSample = ({ burgerMenuBar }) => {
  return (
    <div
      class="absolute pt-16 right-0 mt-12 text-xs uppercase leading-8 text-black drop-shadow-2xl"
      type="button"
    >
      <button onClick={burgerMenuBar}>
        <img src={iconclosemenu} />
      </button>

      <div>Dropdown button</div>
      <div>Dropdown button</div>
      <div>Dropdown button</div>
    </div>
  );
};

export default DropDownSample;
