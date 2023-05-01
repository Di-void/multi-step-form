import Summary from "@/components/Summary";

const FinishUp = () => {
  return (
    <div>
      <header className="mb-2">
        <h1 className="text-marine-blue text-2xl font-bold">Finishing up</h1>
      </header>

      <p className="text-cool-gray text-lg mb-4">
        Double-check everything looks OK before confirming.
      </p>

      <Summary />
    </div>
  );
};

export default FinishUp;
