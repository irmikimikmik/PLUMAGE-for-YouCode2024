
import NavBar from "../components/NavBar";
import plumageLogo from "../../public/plumage.svg";
import Link from 'next/link';
import Image from "next/image";

export default function Landing() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div>
      <NavBar />
      </div>
      <div id="parent" className="mx-auto flex-grow flex flex-col items-center justify-center w-full m-auto">
        <div className="space-y-9 w-full items-center justify-center mx-auto">
          <div className="flex items-center space-x-4 justify-center">
            <Image width="121" height="30" src={plumageLogo} alt="Company Logo" />
            <h1 id="title" className="items-center">PLUMAGE</h1>
          </div>
          <p id="slogan">Built for the outdoors, tailored to your adventure</p>
          <div className="flex space-x-40 items-center pl-1/2 justify-center">
            <Link href="/signup">
              <button type="button" className="signup-link-button">CREATE ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
