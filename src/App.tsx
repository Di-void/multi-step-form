import MobileNavigation from "./components/Navigation/mobile";
import DesktopNav from "./components/Navigation/desktop";
import bg_mobile from "@/assets/images/bg-sidebar-mobile.svg";
import Views from "@/views";

function App() {
  return (
    <main className="overflow-auto no-scrollbar xl:h-screen xl:flex justify-center items-center">
      <div className="h-[25%] w-full fixed xl:hidden">
        <img
          src={bg_mobile}
          className="h-full w-full object-cover"
          alt="background"
        />
      </div>

      <section className="w-[90%] lg:w-[70%] xl:w-9/12 relative floating mx-auto mt-12 xl:flex gap-6 xl:justify-between xl:rounded-lg xl:p-4 xl:mt-0 xl:bg-white xl:shadow-lg">
        <MobileNavigation />
        <DesktopNav />

        <Views />
      </section>
    </main>
  );
}

export default App;
