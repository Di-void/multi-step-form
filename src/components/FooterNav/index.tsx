interface FooterNavProps {
  backBtnIsVisible: boolean;
  nextBtnStyles?: string;
  nextBtnLabel?: string;
  nextPageManualTrigger?: () => void;
  prevPage: () => void;
}

const nextBtnDefaultStyles =
  "capitalize text-white font-bold bg-marine-blue hover:bg-marine-blue-lighter transition-all duration-150 px-4 xl:px-6 py-3 rounded-md cursor-pointer";

const FooterNav = ({
  backBtnIsVisible,
  nextBtnLabel = "next step",
  nextBtnStyles = nextBtnDefaultStyles,
  nextPageManualTrigger,
  prevPage,
}: FooterNavProps) => {
  return (
    <footer className="fixed xl:absolute bottom-0 xl:bottom-3 left-0 w-full p-6 xl:p-0 xl:pl-9 flex justify-between bg-white">
      <button
        type="button"
        onClick={prevPage}
        className={`capitalize ${
          backBtnIsVisible ? "" : "invisible"
        } text-cool-gray hover:text-marine-blue transition-all duration-150 font-bold`}
      >
        go back
      </button>
      <button
        type="submit"
        onClick={nextPageManualTrigger}
        className={nextBtnStyles}
      >
        {nextBtnLabel}
      </button>
    </footer>
  );
};

export default FooterNav;
