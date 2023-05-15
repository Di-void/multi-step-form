import { useGenericStore } from "@/stores/generic-store";
import { useState } from "react";

const Switch = () => {
  const [toggle, setToggle] = useState(false);
  const setBillingMode = useGenericStore((state) => state.setBillingMode);

  if (toggle === false) {
    setBillingMode("monthly");
  } else {
    setBillingMode("yearly");
  }

  return (
    <div className="h-fit">
      <input
        type="checkbox"
        id="toggle"
        className="hidden peer"
        checked={toggle}
        readOnly
      />
      <label
        className="md:w-12 md:h-7 w-10 h-5 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer"
        htmlFor="toggle"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <div className="bg-white md:w-5 md:h-5 h-3 w-3 rounded-full -mt-4 ml-1 md:-mt-6 pointer-events-none shadow-md transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-5"></div>
    </div>
  );
};

export default Switch;
