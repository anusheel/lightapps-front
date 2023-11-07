import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/showcase">
              <button>Showcase</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button>Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/">
        <button className="text-2xl font-bold">Lightapps</button>
      </Link>
    </header>
  );
}