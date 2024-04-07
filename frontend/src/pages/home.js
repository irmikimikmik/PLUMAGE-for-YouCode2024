import NavBar from "@/components/NavBar";
import "../app/globals.css";
import WelcomeBanner from "@/components/WelcomeBanner";
import CuratedEvents from "@/components/CuratedEvents"
import Products from "@/components/Products"

export default function Home() {
  return (
    <div className="">
      <div className="block">
        <NavBar />
      </div>
      <div className="block">
        <WelcomeBanner />
        <CuratedEvents />
        <Products />
      </div>
    </div>
  );
}
