import bg_desktop from "@/assets/images/bg-sidebar-desktop.svg";
import { useGenericStore } from "@/stores/generic-store";

const DesktopNav = () => {
  const page = useGenericStore((state) => state.page);
  return (
    <section className="relative hidden xl:block w-[30%] overflow-hidden rounded-lg">
      <div className="absolute w-full h-full">
        <img
          src={bg_desktop}
          className="w-full h-full object-cover"
          alt="background"
        />
      </div>

      <nav className="relative flex flex-col gap-8 px-8 py-10">
        {[
          { label: "step 1", desc: "your info" },
          { label: "step 2", desc: "select plan" },
          { label: "step 3", desc: "add-ons" },
          { label: "step 4", desc: "summary" },
        ].map(({ label, desc }, index) => {
          return (
            <div key={label} className="flex gap-6 items-center">
              <div
                className={`border ${
                  page === index
                    ? "text-black bg-light-blue border-transparent"
                    : "border-white text-white"
                } font-bold rounded-full p-4 w-3 h-3 flex items-center justify-center`}
              >
                <span>{index + 1}</span>
              </div>

              <div>
                <h4 className="text-pastel-blue text-sm uppercase">{label}</h4>
                <h1 className="uppercase text-white tracking-wide font-semibold">
                  {desc}
                </h1>
              </div>
            </div>
          );
        })}

        {/* <div className="flex gap-6 items-center">
          <div className="border border-white font-bold text-white rounded-full p-4 w-3 h-3 flex items-center justify-center">
            <span>2</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 2</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              select plan
            </h1>
          </div>
        </div> */}

        {/* <div className="flex gap-6 items-center">
          <div className="border border-white font-bold text-white rounded-full p-4 w-3 h-3 flex items-center justify-center">
            <span>3</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 3</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              add-ons
            </h1>
          </div>
        </div> */}

        {/* <div className="flex gap-6 items-center">
          <div className="border border-white font-bold text-white rounded-full p-4 w-3 h-3 flex items-center justify-center">
            <span>4</span>
          </div>

          <div>
            <h4 className="text-pastel-blue text-sm uppercase">step 4</h4>
            <h1 className="uppercase text-white tracking-wide font-semibold">
              summary
            </h1>
          </div>
        </div> */}
      </nav>
    </section>
  );
};

export default DesktopNav;
