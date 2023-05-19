// Export all utility functions from here
import type {
  FilteredAddons,
  Plans,
  BillingMode,
  Bills,
  IAddon,
} from "@/types";

export const getGrandTotal = (
  plan: Plans,
  billingMode: BillingMode,
  bills: Bills,
  addons: FilteredAddons[]
) => {
  let addonsCost = 0;
  const planCost = bills[plan][billingMode];
  if (addons.length > 0) {
    for (let item of addons) {
      addonsCost += bills[item.id][billingMode];
    }
  }

  const total: IAddon["price"] =
    billingMode === "monthly"
      ? `${planCost + addonsCost}/mo`
      : `${planCost + addonsCost}/yr`;

  return total;
};
