import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
function NavBar({ shopItem }) {
  const [open, setOpen] = useState(false);
  // let menu;
  // const onNavbarHandler = () => setShowMenu(!showMenu);

  // if (showMenu) {
  //   menu = (
  //     <div className="flex flex-col fixed bg-gray-50 w-3/5  top-0 z-40 left-0 shadow-lg ">
  //       <div className=" flex pl-2 h-28  ">
  //         <button className="" onClick={onNavbarHandler}>
  //           <IoIosClose className="text-5xl" fill="#3d3d3d" />
  //         </button>
  //       </div>

  //       <div className=" w-3/5 h-screen shadow-sm">
  //         <div className="bg-gray-50  py-4 text-2xl text-rash text-bold w-full flex pl-6 font-semibold  mb-2">
  //           <Link onClick={onNavbarHandler} to="/">
  //             Home
  //           </Link>
  //         </div>
  //         <div className="bg-gray-50  py-4 text-2xl text-rash text-bold  w-full flex pl-6 font-semibold mb-2">
  //           <Link onClick={onNavbarHandler} to="/shop">
  //             Shop
  //           </Link>
  //         </div>
  //         <div className="bg-gray-50  py-4 text-2xl text-rash text-bold  w-full flex pl-6 font-semibold   ">
  //           <Link onClick={onNavbarHandler} to="/contact">
  //             Contact
  //           </Link>
  //         </div>
  //       </div>
  //       <div></div>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className=" flex flex-row items-center justify-between bg-white text-rash bg-opacity-80 shadow-lg rounded-full lg:text-xl 2xl:text-2xl font-semibold p-4 my-10 xl:mx-20">
        <NavLink to="/" className="hidden sm:block px-4 ">
          Free Shoping
        </NavLink>
        <button onClick={() => setOpen(!open)}>
          <FiMenu className="sm:hidden mx-6 h-5 w-5 " />
        </button>{" "}
        <NavLink to="/" className="sm:hidden block px-4 ">
          Free Shoping
        </NavLink>
        <div
          className={`rounded-sm sm:hidden flex flex-col fixed bg-gray-50 w-3/5  top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" flex pl-2 h-28  ">
            <button onClick={() => setOpen(!open)} className="">
              <IoIosClose
                className="text-3xl mx-2 mt-16 h-10 w-10"
                fill="#3d3d3d"
              />
            </button>
          </div>

          <div className=" w-3/5 h-screen shadow-sm ">
            <div className="bg-gray-50  py-2 text-xl text-rash text-bold w-full flex pl-6 font-semibold  mb-2">
              <Link to="/" onClick={() => setOpen(!open)}>
                Home
              </Link>
            </div>

            <div className="bg-gray-50  py-2 text-xl text-rash text-bold  w-full flex pl-6 font-semibold mb-2">
              <Link to="/shop" onClick={() => setOpen(!open)}>
                Shop
              </Link>
            </div>

            <div className="bg-gray-50  py-2 text-xl text-rash text-bold  w-full flex pl-6 font-semibold   ">
              <Link to="/contact" onClick={() => setOpen(!open)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <nav className="hidden   px-4 sm:flex  items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-rash " : "") +
              "  sm:px-2 md:px-4 p-1 transition ease-in-out delay-150  duration-300   hover:scale-110"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-rash " : "") +
              " sm:px-2 md:px-4 p-1 transition ease-in-out delay-150  duration-300   hover:scale-110"
            }
            to="/shop"
          >
            Shop
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-rash  " : "") +
              "  sm:px-2 md:px-4 p-1 transition ease-in-out delay-150  duration-300   hover:scale-110"
            }
            to="/contact"
          >
            Contact
          </NavLink>{" "}
          <NavLink to="/shopbag" className="flex px-4">
            <span>
              {shopItem.length !== 0 && (
                <span className="absolute px-2 py-1 translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full text-xs text-white shadow-sm">
                  {shopItem.length}
                </span>
              )}
              <HiOutlineShoppingBag className="mr-6 w-7 h-7 transition ease-in-out delay-150  duration-300   hover:scale-125" />
            </span>
          </NavLink>
        </nav>
      </div>

      {/* <div className="hidden sm:flex flex-row items-center justify-between bg-white text-rash bg-opacity-80 shadow-lg rounded-full lg:text-xl 2xl:text-3xl font-semibold p-4 my-10 xl:mx-20">
        <div className="hidden sm:inline-block px-4">
          <p className="hidden sm:inline-block">Free Shopping</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="mx-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") +
                "hidden sm:inline-block  sm:px-2 md:px-4 p-1"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash " : "") +
                "hidden sm:inline-block sm:px-2 md:px-4 p-1"
              }
              to="/shop"
            >
              Shop
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-rash  " : "") +
                "hidden sm:inline-block  sm:px-2 md:px-4 p-1"
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
        </div>{" "}
      </div>{" "}
      <div className="sm:hidden hover:cursor-pointer items-center justify-between z-50 flex ">
        <button className="" onClick={onNavbarHandler}>
          <FiMenu className="w-10 h-10 " fill="#3d3d3d" />
        </button>
        {menu}
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
      </div> */}
    </>
  );
}

export default NavBar;
