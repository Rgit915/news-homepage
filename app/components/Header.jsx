"use client"
import { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const handleShowMenu = () =>{
    setToggleMenu(!toggleMenu);
  }
  const handleCloseMenu = () =>{
    setToggleMenu(false);
  }

  return (
    <header className="flex justify-between items-center w-full p-4 xl:w-[80%]">
      {toggleMenu && <div className=" overlay fixed top-0 left-0 h-full w-1/3 bg-very-dark-blue opacity-50 md:hidden"></div>}
      <div className="logo">
        <Image
          src="./assets/images/logo.svg"
          alt="logo image "
          width={45}
          height={28}
          className="cursor-pointer lg:w-16 lg:h-10"
          priority
        />
      </div>
      <div className="menu md:hidden">
        <Image
          src="./assets/images/icon-menu.svg"
          alt="logo image "
          width={40}
          height={17}
          onClick={handleShowMenu}
          className=" cursor-pointer"
          priority
        />
      </div>
      { toggleMenu && <Navbar closeMenu={handleCloseMenu} toggleMenu={toggleMenu}/>}
      {/* Large Screen Navbar */}
      <div className="hidden md:flex">
        <NavLinks/>
      </div>
    </header>
  );
};

export default Header;
