import "../app/globals.css";
import AppNavBar from "../components/AppNavBar";
import WelcomeBanner from "../components/WelcomeBanner";
import CuratedEvents from "../components/CuratedEvents";
import Products from "../components/Products";
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
      <AppNavBar />
      <div className="content">
        <WelcomeBanner />
        <div className="w-full pt-32 space-y-10 justify-center items-center">
          <div className="space-x-5 flex w-full place-content-center">
            <h2>Curated events</h2>
            <Image onClick={toggle} src={closeDropdown} />
          </div>
        </div>
        <hr></hr>
        {isOpen && <CuratedEvents />}
        <Products />
      </div>
    </div>
  );
}
