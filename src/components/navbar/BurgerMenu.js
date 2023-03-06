import React from "react";
import iconclosemenu from "../../images/icon-close-menu.svg";

const DropDownSample = ({ burgerMenuBar }) => {
  return (
    <div class="relative h-40">
      <div
        class="flex-row pt-6 px-6 mt-12 -mr-10 text-xs uppercase leading-8 text-black shadow-2xl"
        type="button"
      >
        <button onClick={burgerMenuBar}>
          <img src={iconclosemenu} />
        </button>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
      </div>
    </div>
  );
};

export default DropDownSample;
