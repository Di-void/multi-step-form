import { useStore } from "@/stores/generic-store";
import { shallow } from "zustand/shallow";
import type { addons } from "@/types";

interface IAddon {
  id: addons;
  label: string;
  description: string;
  price: `${number}/mo` | `${number}/yr`;
}

const useAddons = () => {
  const { bill, billingMode, updateAddon, addOnsCheckedState } = useStore(
    (state) => ({
      bill: state.bills,
      billingMode: state.billingMode,
      updateAddon: state.updateAddon,
      addOnsCheckedState: state.addOns,
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
  return { Addons, addOnsCheckedState, updateAddon };
};

export default useAddons;
