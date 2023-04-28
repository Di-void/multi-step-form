import { useState } from "react";

const Switch = () => {
  //   const [enabled, setEnabled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleClass = " transform translate-x-5";

  return (
    // <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    //   <div className="flex">
    //     <label className="inline-flex relative items-center mr-5 cursor-pointer">
    //       <input
    //         type="checkbox"
    //         className="sr-only peer"
    //         checked={enabled}
    //         readOnly
    //       />
    //       <div
    //         onClick={() => {
    //           setEnabled(!enabled);
    //         }}
    //         className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
    //       ></div>
    //     </label>
    //   </div>
    // </div>
    <div className="h-fit">
      <input
        type="checkbox"
        id="toggle"
        className="hidden peer"
        checked={toggle}
      />
      <label
        className="md:w-12 md:h-7 w-10 h-5 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer"
        htmlFor="toggle"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <div
        className={
          "bg-white md:w-5 md:h-5 h-3 w-3 rounded-full -mt-4 ml-1 md:-mt-6 pointer-events-none shadow-md transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-5"
        }
      ></div>
    </div>
  );
};

export default Switch;
