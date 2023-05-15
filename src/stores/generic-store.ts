import { create } from "zustand";
import type { GenericState } from "@/types";

export const useGenericStore = create<GenericState>((set) => ({
  page: 0,
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
  setPage: (page) => set(() => ({ page })),
  formIsValid: false,
  billingMode: "monthly",
  plans: "arcade",
  addOns: {
    "oneline-service": false,
    "larger-storage": false,
    "customizable-profile": false,
  },
  bills: {
    "oneline-service": {
      monthly: 1,
      yearly: 10,
    },
    "larger-storage": {
      monthly: 2,
      yearly: 20,
    },
    "customizable-profile": {
      monthly: 2,
      yearly: 20,
    },
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
  },
}));
