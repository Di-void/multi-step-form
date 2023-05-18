// Re-usables
export type BillingMode = "monthly" | "yearly";
export type Plans = "arcade" | "advanced" | "pro";
export type addons =
  | "oneline-service"
  | "larger-storage"
  | "customizable-profile";

// Store-specific
type Addons = Record<addons, boolean>;
type Bills = Record<addons | Plans, Record<BillingMode, number>>;
export interface GenericState {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  formIsValid: boolean;
  billingMode: BillingMode;
  setBillingMode: (mode: BillingMode) => void;
  plan: Plans;
  setPlan: (plan: Plans) => void;
  addOns: Addons;
  bills: Bills;
}
