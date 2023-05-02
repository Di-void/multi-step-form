const FooterNav = () => {
  return (
    <footer className="fixed bottom-0 w-full p-6 flex justify-between bg-white xl:hidden">
      <button className="capitalize invisible text-cool-gray hover:text-marine-blue transition-all duration-150 font-bold">
        go back
      </button>
      <button className="capitalize text-white bg-marine-blue hover:bg-marine-blue-lighter transition-all duration-150 px-4 py-3 rounded-md cursor-pointer">
        next step
      </button>
    </footer>
  );
};

export default FooterNav;
