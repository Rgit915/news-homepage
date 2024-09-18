import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <div className="logo">
        <Image
          src="./assets/images/logo.svg"
          alt="logo image "
          width={45}
          height={28}
        />
      </div>
      <div className="menu md:hidden">
        <Image
          src="./assets/images/icon-menu.svg"
          alt="logo image "
          width={40}
          height={17}
        />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
