const InfoForm = () => {
  return (
    <form className="flex flex-col gap-4">
      {[
        {
          id: "name",
          field: "name",
          placeholder: "e.g. Stephen King",
          type: "text",
        },
        {
          id: "email",
          field: "email address",
          placeholder: "e.g. stephenking@lorem.com",
          type: "email",
        },
        {
          id: "telephone",
          field: "phone number",
          placeholder: "e.g. +1 234 567 890",
          type: "number",
        },
      ].map((item) => {
        return (
          <div>
            <header className="flex justify-between">
              <label
                htmlFor={item.id}
                className="capitalize text-marine-blue font-medium"
              >
                {item.field}
              </label>

              <h4 className="text-strawberry-red capitalize font-bold">{""}</h4>
            </header>
            <input
              className="block border border-cool-gray focus:border-purplish-blue mt-1 p-3 rounded-md text-marine-blue font-bold w-full outline-none"
              type={item.type}
              id={item.id}
              placeholder={item.placeholder}
            />
          </div>
        );
      })}
    </form>
  );
};

export default InfoForm;
