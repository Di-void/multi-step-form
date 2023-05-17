import type { Page } from "@/App";

const MobileNavigation = ({ page }: Page) => {
  return (
    <section className="text-white font-bold w-2/3 lg:w-3/4 mx-auto flex justify-between xl:hidden">
      {["1", "2", "3", "4"].map((number, index) => {
        return (
          <div
            key={number}
            className={`border ${
              page === index
                ? "text-black bg-light-blue border-transparent"
                : "border-white"
            } rounded-full p-5 w-3 h-3 flex items-center justify-center`}
          >
            <span>{number}</span>
          </div>
        );
      })}
    </section>
  );
};

export default MobileNavigation;
