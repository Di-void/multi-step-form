import type { FilteredAddons, Plans, BillingMode } from "@/types";
import { useSummary } from "@/hooks";

interface AddonDetailsProps {
  arr: FilteredAddons[];
}

interface SummaryProps {
  plan: Plans;
  billingMode: BillingMode;
}

const Summary = ({ plan, billingMode }: SummaryProps) => {
  const { finalPlanPrice, AddonsSummary, grandTotal } = useSummary();
  return (
    <section>
      <div className="bg-alabaster p-4 flex flex-col gap-4 rounded-md">
        <header className="flex justify-between items-center border-b-2 border-b-light-gray pb-4">
          <div>
            <h3 className="capitalize font-bold text-marine-blue">
              {plan} ({billingMode})
            </h3>
            <button className="text-cool-gray underline capitalize hover:text-purplish-blue">
              change
            </button>
          </div>

          <h3 className="text-marine-blue font-bold">${finalPlanPrice}</h3>
        </header>

        <AddonsDetails arr={AddonsSummary} />
      </div>

      <footer className="flex justify-between items-center px-4 mt-6">
        <h3 className="text-cool-gray">
          Total (per {billingMode === "monthly" ? "month" : "year"}){" "}
        </h3>
        <span className="font-bold text-purplish-blue text-lg">
          +${grandTotal}
        </span>
      </footer>
    </section>
  );
};

export default Summary;

const AddonsDetails = ({ arr }: AddonDetailsProps) => {
  if (arr.length === 0) {
    return (
      <div className="flex justify-between items-center">
        <h3 className="text-cool-gray">No addons {":)"}</h3>
        <span className="text-marine-blue font-medium">+$0.00</span>
      </div>
    );
  }
  return (
    <>
      {arr.map((item) => {
        return (
          <div key={item.id} className="flex justify-between items-center">
            <h3 className="text-cool-gray">{item.label}</h3>
            <span className="text-marine-blue font-medium">+${item.price}</span>
          </div>
        );
      })}
    </>
  );
};
