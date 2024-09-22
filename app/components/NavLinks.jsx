import Link from "next/link";

const NavLinks = () => {
  return (
    <nav>
      <ul className="nav-link">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">New</Link>
        </li>
        <li>
          <Link href="#">Popular</Link>
        </li>
        <li>
          <Link href="#">Trending</Link>
        </li>
        <li>
          <Link href="#">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
