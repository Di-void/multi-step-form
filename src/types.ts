type BillingMode = "monthly" | "yearly";
type Plans = "arcade" | "advanced" | "pro";
type addons = "oneline-service" | "larger-storage" | "customizable-profile";
type Addons = Record<addons, boolean>;

type Bills = Record<addons | Plans, Record<BillingMode, number>>;

export interface GenericState {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  formIsValid: boolean;
  billingMode: BillingMode;
  plans: Plans;
  addOns: Addons;
  bills: Bills;
}
