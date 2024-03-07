import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Gentle Paws Cat Care Logo.png";

function Navbar() {
  const [isNav, setIsNav] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-8 min-h-20">
        <div>
          <img className="h-12" src={Logo} alt={Logo} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/store"}>Store</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
        </nav>
        <nav
          className={
            isNav
              ? "flex flex-col justify-between py-8 pt-20 md:hidden fixed top-0 left-0 h-full w-[30%] bg-white border-r px-8 ease-in-out duration-500 shadow-lg"
              : "fixed left-[-100%] py-8 pt-20"
          }
        >
          <ul className="grid gap-12" onClick={() => setIsNav(false)}>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/store"}>Store</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-2">
            <button className="hover:font-semibold">Sign In</button>
            <button className="py-2 px-4 rounded-full bg-myBlue-light hover:bg-myBlue-dark text-white">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:font-semibold">Sign In</button>
          <button className="py-2 px-4 rounded-full bg-myBlue-light hover:bg-myBlue-dark text-white">
            Sign Up
          </button>
        </div>
        <button className="block md:hidden" onClick={() => setIsNav(!isNav)}>
          {isNav ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
