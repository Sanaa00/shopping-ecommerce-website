import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white text-rash bg-opacity-80 shadow-lg rounded-full text-xl font-semibold p-4 my-10 mx-20">
        <div>
          <CgMenuRightAlt className="mx-6 w-9 h-9" />
        </div>
        <div className="flex flex-row items-center">
          <div className="mx-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") + "px-4 p-1"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") + "px-4 p-1"
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") + "px-4 p-1"
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") + "px-4 p-1"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <HiOutlineShoppingBag className="mx-6 w-7 h-7" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
