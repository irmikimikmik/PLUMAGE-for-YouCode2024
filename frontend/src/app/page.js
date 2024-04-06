import NavBar from "@/components/NavBar";

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
            <button>
              Create account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
