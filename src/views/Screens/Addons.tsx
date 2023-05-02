import AddonsForm from "@/components/Forms/AddonsForm";

const Addons = () => {
  return (
    <div>
      <header className="mb-2">
        <h1 className="text-marine-blue text-2xl xl:text-3xl font-bold">
          Pick add-ons
        </h1>
      </header>

      <p className="text-cool-gray text-lg mb-4 xl:mb-7">
        Add-ons help enhance your gaming experience.
      </p>

      <AddonsForm />
    </div>
  );
};

export default Addons;
