import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <a><Image src={logo} width="200px" height="200px" /></a>

      </Link>
    </header>
  );
}
