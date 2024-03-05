import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNav, setIsNav] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-12 min-h-20">
        <div>
          <p className="font-bold text-xl">Cat Care Clinic</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <NavLink to={"/"} className="hover:font-semibold">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="hover:font-semibold">About</NavLink>
            </li>
            <li>
              <button className="hover:font-semibold">Service</button>
            </li>
            <li>
              <button className="hover:font-semibold">Shop</button>
            </li>
            <li>
              <button className="hover:font-semibold">Blog</button>
            </li>
          </ul>
        </nav>
        <nav
          className={
            isNav
              ? "block md:hidden fixed top-0 left-0 h-full w-[30%] bg-white border-r px-8 ease-in-out duration-500 shadow-lg"
              : "fixed left-[-100%]"
          }
        >
          <ul className="grid gap-12 mt-20">
            <li>
              <button className="hover:font-semibold">Home</button>
            </li>
            <li>
              <button className="hover:font-semibold">About</button>
            </li>
            <li>
              <button className="hover:font-semibold">Service</button>
            </li>
            <li>
              <button className="hover:font-semibold">Shop</button>
            </li>
            <li>
              <button className="hover:font-semibold">Blog</button>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:font-semibold">Sign In</button>
          <button className="py-2 px-4 rounded-full bg-orange-400 hover:bg-orange-500 text-white">
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
