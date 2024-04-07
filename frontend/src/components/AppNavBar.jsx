import companyLogo from "../../public/logo-small.png";
import Image from "next/image";
import Link from 'next/link';

export default function AppNavBar() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '128px', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px' }}>
        <div style={{ paddingLeft: '24px' }}>
          <Image width="121" height="30" src={companyLogo} alt="Company Logo" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingRight: '24px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: '"PT Sans", sans-serif' }}
          />
          <Link href="/profile" style={{ padding: '8px 16px', color: 'black', textDecoration: 'none', borderRadius: '8px', fontFamily: '"PT Sans", sans-serif' }}>
            View Profile
          </Link>
        </div>
      </div>
    );
}
