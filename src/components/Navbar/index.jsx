'use client'
import { useState } from "react";
import { FiMenu, FiX, FiBell, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const menuItems = ["Home", "Build Your Box", "About", "Shop", "Contact Us"];

  return (
    <nav className="w-full bg-[#FFFFFF80] bg-blur-2xl shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1353px] mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">

        <img src="/assets/logo.png " className="h-[37px] w-[191px]" alt="" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 lg:gap-10 xl:gap-20 ml-8 font-medium">
          {menuItems.map((item, i) => (
              <li key={i} className="cursor-pointer text-nowrap hover:text-[#D72638]">{item}</li>
            ))}
        </ul>
            </div>

        {/* Icons + Account */}
        <div className="hidden lg:flex items-center gap-5">
          <FiBell className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />

          {/* Account Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer px-2.5 h-10 bg-white rounded-[8px]"
              onClick={() => setOpenAccount(!openAccount)}
            >
                <span className="bg-[#FF606080] h-6 w-6 rounded-full flex items-center justify-center">
                    <FaUser size={10} />
                </span>
               <span>Account</span>
            </div>

            {openAccount && (
              <ul className="absolute right-0 bg-white shadow-lg rounded-md w-32 mt-2 text-sm">
                <li className="px-4 py-2 hover:bg-[#D72638] cursor-pointer">Account</li>
                <li className="px-4 py-2 hover:bg-[#D72638] cursor-pointer">Orders</li>
                <li className="px-4 py-2 hover:bg-[#D72638] cursor-pointer">Payment</li>
                <li className="px-4 py-2 hover:bg-[#D72638] cursor-pointer">Cart</li>
                <li className="px-4 py-2 hover:bg-[#D72638] cursor-pointer">Logout</li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={() => setOpenSidebar(true)}>
          <FiMenu />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          openSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <FiX className="text-2xl cursor-pointer" onClick={() => setOpenSidebar(false)} />
        </div>

        <ul className="flex flex-col gap-4 p-4 text-lg">
          {menuItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-red-500" onClick={() => setOpenSidebar(false)}>
              {item}
            </li>
          ))}

          <hr />
          <li className="flex gap-2 items-center"><FiBell /> Notifications</li>
          <li className="flex gap-2 items-center"><FiShoppingCart /> Cart</li>
          <li className="flex gap-2 items-center"><FiSearch /> Search</li>
          <li className="flex gap-2 items-center"><FiUser /> Account</li>
        </ul>
      </div>
    </nav>
  );
}
