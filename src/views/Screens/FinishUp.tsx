import Summary from "@/components/Summary";

const FinishUp = () => {
  return (
    <div>
      <header className="mb-2">
        <h1 className="text-marine-blue text-2xl xl:text-3xl font-bold">
          Finishing up
        </h1>
      </header>

      <p className="text-cool-gray text-lg mb-4 xl:mb-7">
        Double-check everything looks OK before confirming.
      </p>

      <Summary />
    </div>
  );
};

export default FinishUp;
