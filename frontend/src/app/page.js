import NavBar from "@/components/NavBar";
import Link from 'next/link';

export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <NavBar />
        <div id="parent" className="justify-center align-middle flex bottom-0 inset-x-0">
          <div className="absolute space-y-9 inset-y-2/4 place-content-center">
            <div className="space-y-9">
            <h1 id="title">PRODUCT TITLE</h1>
            <p id="slogan">Built for the outdoors, tailored to your adventure</p>
            </div>

            <div className="signup-link">
              <Link href="/signup"><button type="button" className="signup-link-button">CREATE ACCOUNT</button></Link>
            </div>

            <div className="login-link">
              <Link href="/login"><button type="button" className="login-link-button">LOGIN</button></Link>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
