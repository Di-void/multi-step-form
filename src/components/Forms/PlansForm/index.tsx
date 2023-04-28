import React from "react";
import { Arcade, Advanced, Pro } from "@/components/Icons";
import Switch from "@/components/Switch";

const PlansForm = () => {
  return (
    <React.Fragment>
      <form className="flex flex-col gap-3">
        {[
          {
            plan: "arcade",
            icon: <Arcade />,
            fee: 9,
          },
          {
            plan: "advanced",
            icon: <Advanced />,
            fee: 12,
          },
          {
            plan: "pro",
            icon: <Pro />,
            fee: 15,
          },
        ].map(({ plan, icon, fee }) => {
          return (
            <div>
              <input
                type="radio"
                id={plan}
                name="plan"
                value={plan}
                className="hidden peer"
                required
              />
              <label
                htmlFor={plan}
                className="p-4 flex gap-3 border border-light-gray hover:border-purplish-blue peer-checked:bg-alabaster peer-checked:border-purplish-blue rounded-md cursor-pointer transition-all duration-300"
              >
                {icon}

                <div>
                  <h4 className="capitalize text-marine-blue text-lg font-bold">
                    {plan}
                  </h4>
                  <h2 className="text-cool-gray">${fee}/mo</h2>
                  <p className="text-marine-blue font-medium transition-all duration-300 -mt-0">
                    2 months free
                  </p>
                </div>
              </label>
            </div>
          );
        })}
      </form>

      <MonthYearToggle />
    </React.Fragment>
  );
};

const MonthYearToggle = () => {
  return (
    <div className="bg-alabaster rounded-lg mt-6 py-4 flex justify-center items-center gap-4 around">
      <h3 className="capitalize font-bold text-base text-marine-blue">
        monthly
      </h3>

      <Switch />

      <h3 className="capitalize font-bold text-base text-cool-gray">yearly</h3>
    </div>
  );
};

export default PlansForm;
