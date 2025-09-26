"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="p-5 pb-0">
      <ul className="flex flex-row gap-x-5 border-b-2 pb-2.5 uppercase">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link href="/users" className={pathname === "/users" ? "active" : ""}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
