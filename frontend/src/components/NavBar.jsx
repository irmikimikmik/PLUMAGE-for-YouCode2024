import companyLogo from "../../public/arcteryx.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="absolute inset-x-0 top-0 h-32 bg-white inline py-7 align-middle">
      <div className="pl-6 align-middle float-start">
        <Image width="121px" src={companyLogo} />
        </div>
        <div className="float-end pr-6">
          <Link href="/login">
            <button type="button">LOGIN</button>
          </Link>
        </div>
      </div>
  );
}
