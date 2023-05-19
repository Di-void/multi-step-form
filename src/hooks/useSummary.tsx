import { useStore } from "@/stores/generic-store";
import { shallow } from "zustand/shallow";
import type { IAddon } from "@/types";

export const useSummary = () => {
  const { billingMode, bills, plan } = useStore(
    (state) => ({
      billingMode: state.billingMode,
      bills: state.bills,
      plan: state.plan,
    }),
    shallow
  );

  const finalPlanPrice: IAddon["price"] = `${bills[plan][billingMode]}${
    billingMode === "monthly" ? "/mo" : "/yr"
  }`;

  return { finalPlanPrice, billingMode, plan };
};
