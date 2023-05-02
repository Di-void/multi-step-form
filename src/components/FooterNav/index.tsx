const FooterNav = () => {
  return (
    <footer className="fixed xl:relative bottom-0 left-0 w-full p-6 xl:p-0 flex justify-between bg-white">
      <button className="capitalize invisible text-cool-gray hover:text-marine-blue transition-all duration-150 font-bold">
        go back
      </button>
      <button className="capitalize text-white bg-marine-blue hover:bg-marine-blue-lighter transition-all duration-150 px-4 xl:px-6 py-3 rounded-md cursor-pointer">
        next step
      </button>
    </footer>
  );
};

export default FooterNav;
