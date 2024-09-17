import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
    <div className="logo">
      <Image
       src="./assets/images/logo.svg"
       alt="logo image "
       width={45}
       height={28}
       />

    </div>
    <div className="menu">
    <Image
       src="./assets/images/icon-menu.svg"
       alt="logo image "
       width={20}
       height={20}
    />
    </div>
    <div className="nav-bar">
      <Navbar/>
    </div>
  </header>
  )
}

export default Header