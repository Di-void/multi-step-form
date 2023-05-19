// Re-usables
export type BillingMode = "monthly" | "yearly";
export type Bills = Record<addons | Plans, Record<BillingMode, number>>;
export type Plans = "arcade" | "advanced" | "pro";
export type addons =
  | "oneline-service"
  | "larger-storage"
  | "customizable-profile";
export type FilteredAddons = Pick<IAddon, "id" | "label" | "price">;
export interface IAddon {
  id: addons;
  label: string;
  description: string;
  price: `${number}/mo` | `${number}/yr`;
}

// Store-specific
type Addons = Record<addons, boolean>;
export interface GenericState {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  billingMode: BillingMode;
  setBillingMode: (mode: BillingMode) => void;
  plan: Plans;
  setPlan: (plan: Plans) => void;
  addOns: Addons;
  updateAddon: (addon: addons) => void;
  bills: Bills;
}
