import bg_desktop from "@/assets/images/bg-sidebar-desktop.svg";

const DesktopNav = () => {
  return (
    <section className="relative hidden xl:block w-[30%] overflow-hidden rounded-lg">
      <div className="absolute w-full h-full">
        <img
          src={bg_desktop}
          className="w-full h-full object-cover"
          alt="background"
        />
      </div>

      <nav className="relative flex flex-col gap-10 px-8 py-10">
        <div className="flex gap-6 items-center">
          <div className="border-2 border-white text-black font-bold bg-light-blue rounded-full p-5 w-3 h-3 flex items-center justify-center">
            <span>1</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 1</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              your info
            </h1>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="border-2 border-white font-bold text-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
            <span>2</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 2</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              select plan
            </h1>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="border-2 border-white font-bold text-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
            <span>3</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 3</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              add-ons
            </h1>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="border-2 border-white font-bold text-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
            <span>4</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 4</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              summary
            </h1>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default DesktopNav;
