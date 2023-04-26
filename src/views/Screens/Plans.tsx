import PlansForm from "@/components/Forms/PlansForm";

const Plans = () => {
  return (
    <div>
      <header className="mb-2">
        <h1 className="text-marine-blue text-2xl font-bold">
          Select your plan
        </h1>
      </header>

      <p className="text-cool-gray text-lg mb-4">
        You have the option of monthly or yearly billing.
      </p>

      <PlansForm />
    </div>
  );
};

export default Plans;
