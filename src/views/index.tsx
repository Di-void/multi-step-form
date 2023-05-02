import { PersonalInfo, Plans, Addons, FinishUp, Thanks } from "./Screens";
import FooterNav from "@/components/FooterNav";

const Views = () => {
  return (
    <section className="bg-white shadow-lg xl:shadow-none xl:w-3/5 rounded-lg xl:rounded-none mt-7 xl:mt-0 xl:flex xl:flex-col xl:justify-between px-5 py-6 lg:px-6 lg:py-8">
      {/* <PersonalInfo /> */}
      {/* <Plans /> */}
      {/* <Addons /> */}
      {/* <FinishUp /> */}
      <Thanks />

      <FooterNav />
    </section>
  );
};

export default Views;
