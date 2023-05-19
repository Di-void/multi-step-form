import { useAddons } from "./useAddons";
import type { IAddon, FilteredAddons } from "@/types";
import { getGrandTotal } from "@/utils";

export const useSummary = () => {
  const {
    addOnsCheckedState,
    Addons,
    bill: bills,
    billingMode,
    plan,
  } = useAddons();

  const finalPlanPrice: IAddon["price"] = `${bills[plan][billingMode]}${
    billingMode === "monthly" ? "/mo" : "/yr"
  }`;

  const AddonsSummary = Addons.reduce(
    (acc: FilteredAddons[], { id, label, price }) => {
      if (addOnsCheckedState[id]) {
        acc.push({ id, label, price });
      }
      return acc;
    },
    []
  );

  const grandTotal = getGrandTotal(plan, billingMode, bills, AddonsSummary);

  return { finalPlanPrice, AddonsSummary, grandTotal };
};
