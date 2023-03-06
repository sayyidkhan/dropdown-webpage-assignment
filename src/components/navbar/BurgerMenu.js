import React from "react";
import iconclosemenu from "../../images/icon-close-menu.svg";

const DropDownSample = ({ burgerMenuBar }) => {
  return (
    <div
      class="absolute pt-[62rem] right-0 mt-12 text-xs leading-8 text-black shadow-[0px_22px_100px_400px_rgba(0,0,0,0.5)]"
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
