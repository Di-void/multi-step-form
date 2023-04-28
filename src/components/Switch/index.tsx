import { useState, useEffect } from "react";

const Switch = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div className="h-fit">
      <label className="md:w-12 md:h-7 w-10 h-5 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={(e) => {
            setToggle(e.target.checked);
          }}
          checked={toggle}
          readOnly
        />
        <div
          className={
            "bg-white md:w-5 md:h-5 h-3 w-3 rounded-full pointer-events-none shadow-md transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-5"
          }
        ></div>
      </label>
    </div>
  );
};

export default Switch;
