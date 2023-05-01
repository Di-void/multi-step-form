const Summary = () => {
  return (
    <section>
      <div className="bg-alabaster p-4 flex flex-col gap-4 rounded-md">
        <header className="flex justify-between items-center border-b-2 border-b-light-gray pb-4">
          <div>
            <h3 className="capitalize font-bold text-marine-blue">
              arcade (monthly)
            </h3>
            <button className="text-cool-gray underline capitalize">
              change
            </button>
          </div>

          <h3 className="text-marine-blue font-bold">$9/mo</h3>
        </header>

        <div className="flex justify-between items-center">
          <h3 className="text-cool-gray">Online service</h3>
          <span className="text-marine-blue font-medium">+$1/mo</span>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-cool-gray">Larger storage</h3>
          <span className="text-marine-blue font-medium">+$2/mo</span>
        </div>
      </div>

      <footer className="flex justify-between items-center px-4 mt-6">
        <h3 className="text-cool-gray">Total (per month) </h3>
        <span className="font-bold text-purplish-blue text-lg">+$12/mo</span>
      </footer>
    </section>
  );
};

export default Summary;
