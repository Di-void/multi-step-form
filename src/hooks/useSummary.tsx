import { useAddons } from "./useAddons";
import type { IAddon, FilteredAddons } from "@/types";

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

  return { finalPlanPrice, AddonsSummary };
};
