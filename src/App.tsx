import MobileNavigation from "@/components/Navigation/mobile";
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

      <section className="w-[85%] lg:w-[70%] xl:w-10/12 floating relative mt-12 mx-auto">
        <MobileNavigation />

        <Views />
      </section>

      <FooterNav />
    </main>
  );
}

export default App;
