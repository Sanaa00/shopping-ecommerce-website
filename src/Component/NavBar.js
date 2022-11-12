import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
function NavBar({ shopItem }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white text-rash bg-opacity-80 shadow-lg rounded-full text-xl font-semibold p-4 my-10 mx-20">
        <div className="px-4">
          <p>Free Shopping</p>
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
                (isActive ? "border-b-2 border-rash  " : "") + "px-4 p-1"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <NavLink to="/shopbag" className="flex">
            <span>
              {shopItem.length !== 0 && (
                <span className="absolute px-2 py-1 translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full text-xs text-white shadow-sm">
                  {shopItem.length}
                </span>
              )}
              <HiOutlineShoppingBag className="mr-6 w-7 h-7 transition ease-in-out delay-150  duration-300   hover:scale-125" />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
