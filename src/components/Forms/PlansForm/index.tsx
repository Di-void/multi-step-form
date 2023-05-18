import { shallow } from "zustand/shallow";
import FooterNav from "@/components/FooterNav";
import { Arcade, Advanced, Pro } from "@/components/Icons";
import Switch from "@/components/Switch";
import { useStore } from "@/stores/generic-store";
import { BillingMode } from "@/types";
import type { Plans } from "@/types";
import React from "react";

export type MonthYearToggleProps = { billing: BillingMode };

const PlansForm = () => {
  const { billingMode, bill, plan, nextPage, setPlan } = useStore(
    (state) => ({
      billingMode: state.billingMode,
      bill: state.bills,
      plan: state.plan,
      setPlan: state.setPlan,
      nextPage: state.nextPage,
    }),
    shallow
  );

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <>
      <form
        className="flex flex-col xl:flex-row gap-3 xl:justify-evenly"
        onSubmit={onSubmit}
      >
        {[
          {
            plan: "arcade",
            icon: <Arcade />,
            fee:
              billingMode === "monthly"
                ? `${bill.arcade.monthly}/mo`
                : `${bill.arcade.yearly}/yr`,
          },
          {
            plan: "advanced",
            icon: <Advanced />,
            fee:
              billingMode === "monthly"
                ? `${bill.advanced.monthly}/mo`
                : `${bill.advanced.yearly}/yr`,
          },
          {
            plan: "pro",
            icon: <Pro />,
            fee:
              billingMode === "monthly"
                ? `${bill.pro.monthly}/mo`
                : `${bill.pro.yearly}/yr`,
          },
        ].map(({ plan: option, icon, fee }) => {
          return (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="plan"
                value={option}
                className="hidden peer"
                required
                checked={option === plan}
                onChange={(e) => {
                  setPlan(e.target.value as Plans);
                }}
              />
              <label
                htmlFor={option}
                className="p-4 xl:p-6 flex xl:flex-col gap-3 border border-light-gray hover:border-purplish-blue peer-checked:bg-alabaster peer-checked:border-purplish-blue rounded-md cursor-pointer transition-all duration-300"
              >
                {icon}

                <div className="xl:mt-8">
                  <h4 className="capitalize text-marine-blue text-lg font-bold">
                    {option}
                  </h4>
                  <h2 className="text-cool-gray">${fee}</h2>
                  <p
                    className={`text-marine-blue font-medium transition-all duration-300 ${
                      billingMode === "yearly"
                        ? "-mt-0"
                        : "-mt-6 opacity-0 pointer-events-none"
                    }`}
                  >
                    2 months free
                  </p>
                </div>
              </label>
            </div>
          );
        })}

        <FooterNav backBtnIsVisible={true} />
      </form>

      <MonthYearToggle billing={billingMode} />
    </>
  );
};

const MonthYearToggle = ({ billing }: MonthYearToggleProps) => {
  return (
    <div className="bg-alabaster rounded-lg mt-6 py-4 flex justify-center items-center gap-4 around">
      <h3
        className={`capitalize font-bold text-base transition-all duration-300 ${
          billing === "monthly" ? "text-marine-blue" : "text-cool-gray"
        }`}
      >
        monthly
      </h3>

      <Switch billing={billing} />

      <h3
        className={`capitalize font-bold text-base transition-all duration-300 ${
          billing === "yearly" ? "text-marine-blue" : "text-cool-gray"
        }`}
      >
        yearly
      </h3>
    </div>
  );
};

export default PlansForm;
