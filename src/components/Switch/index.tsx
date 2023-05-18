import { useStore } from "@/stores/generic-store";
import type { MonthYearToggleProps } from "../Forms/PlansForm";

const Switch = ({ billing }: MonthYearToggleProps) => {
  const setBillingMode = useStore((state) => state.setBillingMode);

  const handleToggleStateChange = () => {
    if (billing === "monthly") {
      setBillingMode("yearly");
    } else {
      setBillingMode("monthly");
    }
  };

  return (
    <div className="h-fit">
      <input
        type="checkbox"
        id="toggle"
        className="hidden peer"
        checked={billing === "yearly"}
        readOnly
      />
      <label
        className="md:w-12 md:h-7 w-10 h-5 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer"
        htmlFor="toggle"
        onClick={handleToggleStateChange}
      />
      <div className="bg-white md:w-5 md:h-5 h-3 w-3 rounded-full -mt-4 ml-1 md:-mt-6 pointer-events-none shadow-md transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-5"></div>
    </div>
  );
};

export default Switch;
