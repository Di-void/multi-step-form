const AddonsForm = () => {
  return (
    <form className="flex flex-col gap-3">
      {[
        {
          id: "a1",
          label: "Online service",
          description: "Access to multiplayer games",
          price: 1,
        },
        {
          id: "a2",
          label: "Larger storage",
          description: "Extra 1TB of cloud save",
          price: 2,
        },
        {
          id: "a3",
          label: "Customizable profile",
          description: "Custom theme on your profile",
          price: 2,
        },
      ].map((addon) => {
        return (
          <div key={addon.id} className="relative">
            <input
              type="checkbox"
              className="absolute peer w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              // className="absolute peer w-4 h-4 border-light-gray rounded"
              value=""
              name="addons"
              id={addon.id}
            />
            <label
              htmlFor={addon.id}
              className="border border-light-gray rounded-md peer-checked:border-purplish-blue flex items-center gap-3 p-4 cursor-pointer hover:border-purplish-blue"
            >
              <div className="w-2 h-2 border border-black"></div>

              <div className="flex gap-3 justify-between items-center w-full">
                <div className="">
                  <h3 className="text-marine-blue text-lg font-extrabold">
                    {addon.label}
                  </h3>
                  <p className="text-base text-cool-gray">
                    {addon.description}
                  </p>
                </div>

                <h2 className="text-purplish-blue">+${addon.price}/mo</h2>
              </div>
            </label>
          </div>
        );
      })}
    </form>
  );
};

export default AddonsForm;
