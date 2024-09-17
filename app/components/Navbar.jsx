import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Image
        src="./assets/images/icon-menu-close.svg"
        alt="logo image "
        width={30}
        height={30}
      />
      <div className="nav-link">
        <ul>
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
      </div>
    </div>
  );
};

export default Navbar;
