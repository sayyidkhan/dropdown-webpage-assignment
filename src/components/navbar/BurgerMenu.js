import React from "react";
import iconclosemenu from "../../images/icon-close-menu.svg";

const DropDownSample = ({ burgerMenuBar }) => {
  return (
    <div
      class="absolute pt-[62rem] right-0 mt-12 text-xs leading-8 text-black drop-shadow-2xl"
      type="button"
    >
      <div className="p-4 h-[70rem]">
        <div className=" pt-2 pl-6 ml-28">
          <button className="" onClick={burgerMenuBar}>
            <img src={iconclosemenu} />
          </button>
        </div>

        <div>Dropdown button buttonbutton</div>
        <div>Dropdown button</div>
        <div>Dropdown button</div>
      </div>
    </div>
  );
};

export default DropDownSample;
