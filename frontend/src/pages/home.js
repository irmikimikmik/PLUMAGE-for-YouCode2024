import AppNavBar from "@/components/AppNavBar";
import "../app/globals.css";
import WelcomeBanner from "@/components/WelcomeBanner";
import CuratedEvents from "@/components/CuratedEvents";
import Products from "@/components/Products";
import { useState } from "react";
import closeDropdown from "../../public/closeDropdown.svg";
import Image from "next/image";


export default function Home() {
  const [isOpen, setOpen] = useState(true);
  function toggle() {
    setOpen((isOpen) => !isOpen);
  }

  return (
    <div className="">
      <div className="block">
        <AppNavBar />
      </div>
      <div className="block">
        <WelcomeBanner />
        <div className="w-full pt-11 space-y-3.5 justify-center items-center">
          <div className="space-x-5 flex w-full place-content-center">
            <h2>Curated events</h2>
            <Image onClick={toggle} src={closeDropdown} />
          </div>
          <hr></hr>
        </div>
        {isOpen && <CuratedEvents />}
        <Products />
      </div>
    </div>
  );
}
