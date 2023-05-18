import FooterNav from "@/components/FooterNav";
import { useStore } from "@/stores/generic-store";

const AddonsForm = () => {
  const bill = useStore((state) => state.bills);
  const billingMode = useStore((state) => state.billingMode);

  return (
    <form className="flex flex-col gap-3">
      {[
        {
          id: "a1",
          label: "Online service",
          description: "Access to multiplayer games",
          price:
            billingMode === "monthly"
              ? `${bill["oneline-service"].monthly}/mo`
              : `${bill["oneline-service"].yearly}/yr`,
        },
        {
          id: "a2",
          label: "Larger storage",
          description: "Extra 1TB of cloud save",
          price:
            billingMode === "monthly"
              ? `${bill["larger-storage"].monthly}/mo`
              : `${bill["larger-storage"].yearly}/yr`,
        },
        {
          id: "a3",
          label: "Customizable profile",
          description: "Custom theme on your profile",
          price:
            billingMode === "monthly"
              ? `${bill["customizable-profile"].monthly}/mo`
              : `${bill["customizable-profile"].yearly}/yr`,
        },
      ].map((addon) => {
        return (
          <div key={addon.id} className="relative">
            <input
              type="checkbox"
              className="absolute top-[40%] left-4 lg:left-3 peer w-5 h-5 border-light-gray rounded form-checkbox text-purplish-blue focus:ring-offset-0 focus:ring-0"
              value=""
              name="addons"
              id={addon.id}
            />
            <label
              htmlFor={addon.id}
              className="border border-light-gray rounded-md peer-checked:border-purplish-blue peer-checked:bg-magnolia flex items-center gap-5 lg:gap-10 p-4 cursor-pointer hover:border-purplish-blue"
            >
              {/* placeholder */}
              <div className="w-5"></div>

              <div className="flex gap-3 justify-between items-center w-full">
                <div className="">
                  <h3 className="text-marine-blue text-lg font-extrabold">
                    {addon.label}
                  </h3>
                  <p className="text-base text-cool-gray">
                    {addon.description}
                  </p>
                </div>

                <h2 className="text-purplish-blue">+${addon.price}</h2>
              </div>
            </label>
          </div>
        );
      })}

      <FooterNav backBtnIsVisible={true} />
    </form>
  );
};

export default AddonsForm;
