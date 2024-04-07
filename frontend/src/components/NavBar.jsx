import companyLogo from "../../public/logo-small.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="absolute inset-x-0 top-0 h-32 bg-white inline py-7 align-middle">
      <div className="pl-6 align-middle float-start">
        <Image width="121px" src={companyLogo} />
      </div>
      <div className="flex justify-end space-x-4 float-end pr-6">
        <button>Log in</button>
        <Image width="38" src=""/>
      </div>
    </div>
  );
}