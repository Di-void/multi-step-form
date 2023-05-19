import { useStore } from "@/stores/generic-store";
import { shallow } from "zustand/shallow";
import type { IAddon } from "@/types";

export const useAddons = () => {
  const { bill, billingMode, updateAddon, addOnsCheckedState, nextPage, plan } =
    useStore(
      (state) => ({
        bill: state.bills,
        billingMode: state.billingMode,
        updateAddon: state.updateAddon,
        addOnsCheckedState: state.addOns,
        nextPage: state.nextPage,
        plan: state.plan,
      }),
      shallow
    );
  const Addons: IAddon[] = [
    {
      id: "oneline-service",
      label: "Online service",
      description: "Access to multiplayer games",
      price:
        billingMode === "monthly"
          ? `${bill["oneline-service"].monthly}/mo`
          : `${bill["oneline-service"].yearly}/yr`,
    },
    {
      id: "larger-storage",
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      price:
        billingMode === "monthly"
          ? `${bill["larger-storage"].monthly}/mo`
          : `${bill["larger-storage"].yearly}/yr`,
    },
    {
      id: "customizable-profile",
      label: "Customizable profile",
      description: "Custom theme on your profile",
      price:
        billingMode === "monthly"
          ? `${bill["customizable-profile"].monthly}/mo`
          : `${bill["customizable-profile"].yearly}/yr`,
    },
  ];
  return {
    Addons,
    addOnsCheckedState,
    updateAddon,
    nextPage,
    plan,
    billingMode,
    bill,
  };
};
