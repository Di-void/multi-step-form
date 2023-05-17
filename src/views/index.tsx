import type { Page } from "@/App";
import { PersonalInfo, Plans, Addons, FinishUp, Thanks } from "./Screens";

const Views = ({ page }: Page) => {
  return (
    <section className="bg-white shadow-lg xl:shadow-none xl:w-3/5 rounded-lg xl:rounded-none mt-7 xl:mt-0 xl:relative xl:flex xl:flex-col xl:justify-between px-5 py-6 lg:px-6 lg:py-8">
      {page === 0 ? (
        <PersonalInfo />
      ) : page === 1 ? (
        <Plans />
      ) : page === 2 ? (
        <Addons />
      ) : page === 3 ? (
        <FinishUp />
      ) : (
        <Thanks />
      )}
    </section>
  );
};

export default Views;
