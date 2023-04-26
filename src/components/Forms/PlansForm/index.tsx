import { Arcade, Advanced, Pro } from "@/components/Icons";

const PlansForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <input
          type="radio"
          id="arcade"
          name="plan"
          value="arcade"
          className="hidden peer"
          required
        />
        <label
          htmlFor="arcade"
          className="p-4 flex gap-3 border border-light-gray hover:border-purplish-blue peer-checked:bg-alabaster peer-checked:border-purplish-blue rounded-md cursor-pointer transition-all duration-300"
        >
          <Arcade />

          <div>
            <h4 className="capitalize text-marine-blue text-lg font-bold">
              arcade
            </h4>
            <h2 className="text-cool-gray">$9/mo</h2>
            <p className="text-marine-blue font-medium transition-all duration-300 -mt-0">
              2 months free
            </p>
          </div>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="advanced"
          className="hidden peer"
          name="plan"
          value="arcade"
        />
        <label
          htmlFor="advanced"
          className="p-4 flex gap-3 border border-light-gray hover:border-purplish-blue peer-checked:bg-alabaster peer-checked:border-purplish-blue rounded-md cursor-pointer transition-all duration-300"
        >
          <Advanced />

          <div>
            <h4 className="capitalize text-marine-blue text-lg font-bold">
              advanced
            </h4>
            <h2 className="text-cool-gray">$12/mo</h2>
            <p className="text-marine-blue font-medium transition-all duration-300 -mt-0">
              2 months free
            </p>
          </div>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="pro"
          className="hidden peer"
          name="plan"
          value="pro"
        />
        <label
          htmlFor="pro"
          className="p-4 flex gap-3 border border-light-gray hover:border-purplish-blue peer-checked:bg-alabaster peer-checked:border-purplish-blue rounded-md cursor-pointer transition-all duration-300"
        >
          <Pro />

          <div>
            <h4 className="capitalize text-marine-blue text-lg font-bold">
              pro
            </h4>
            <h2 className="text-cool-gray">$15/mo</h2>
            <p className="text-marine-blue font-medium transition-all duration-300 -mt-0">
              2 months free
            </p>
          </div>
        </label>
      </div>
    </form>
  );
};

export default PlansForm;
