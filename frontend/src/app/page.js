
import NavBar from "../components/NavBar";
import plumageLogo from "../../public/plumage.svg";
import Link from 'next/link';
import Image from "next/image";

export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <NavBar />
      <div id="parent" className="flex flex-col items-center justify-center h-full w-full">
        <div className="space-y-9">
          <div className="flex items-center space-x-4">
            <Image width="121" height="30" src={plumageLogo} alt="Company Logo" />
            <h1 id="title">PLUMAGE</h1>
          </div>
          <p id="slogan">Built for the outdoors, tailored to your adventure</p>
          <div className="flex space-x-40">
            <Link href="/signup">
              <button type="button" className="signup-link-button">CREATE ACCOUNT</button>
            </Link>
            <Link href="/login">
              <button type="button" className="login-link-button">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
