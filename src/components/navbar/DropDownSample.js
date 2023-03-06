import React from 'react'
import iconclosemenu from "../../images/icon-close-menu.svg";

const DropDownSample = (props) => {
  return (
    <div class="relative" >
      <div
        class="flex-row items-center whitespace-nowrap rounded bg-primary pt-4 top-2 px-6 ml-0 mt-24 py-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
        type="button"
        data-te-ripple-color="light">
              <button onClick={!props.burgerMenu}
          >
            <img src={iconclosemenu} />
          </button>
          <div>Dropdown button</div>
          <div>Dropdown button</div>
          <div>Dropdown button</div>
          <div>Dropdown button</div>
          <div>Dropdown button</div>
          <div>Dropdown button</div>
        
      </div>
    
</div>
  )
}

export default DropDownSample