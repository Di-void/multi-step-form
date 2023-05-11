import Summary from "@/components/Summary";
import FooterNav from "@/components/FooterNav";

const nxtBtnStyles =
  "capitalize text-white font-bold bg-purplish-blue hover:opacity-80 transition-all duration-150 px-4 xl:px-6 py-3 rounded-md cursor-pointer";

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

      <FooterNav
        backBtnIsVisible={true}
        nextBtnLabel="confirm"
        nextBtnStyles={nxtBtnStyles}
      />
    </div>
  );
};

export default FinishUp;
