import MobileNavigation from "./components/Navigation/mobile";
import DesktopNav from "./components/Navigation/desktop";
import bg_mobile from "@/assets/images/bg-sidebar-mobile.svg";
import Views from "@/views";
import FooterNav from "@/components/FooterNav";

function App() {
  return (
    <main className="overflow-auto no-scrollbar">
      <div className="h-[25%] w-full fixed xl:hidden">
        <img
          src={bg_mobile}
          className="h-full w-full object-cover"
          alt="background"
        />
      </div>

      <section className="w-[90%] lg:w-[70%] xl:w-10/12 floating relative xl:flex xl:justify-between gap-6 xl:rounded-lg xl:p-4 mt-12 mx-auto xl:bg-white xl:shadow-lg">
        <MobileNavigation />
        <DesktopNav />

        <Views />
      </section>

      <FooterNav />
    </main>
  );
}

export default App;
