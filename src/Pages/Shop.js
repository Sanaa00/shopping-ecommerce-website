import React from "react";
import NavBar from "../Component/NavBar";
import { GrDown } from "react-icons/gr";
import PaginationShop from "../Component/PaginationShop";
function Shop() {
  return (
    <>
      <div className=" bg-spi py-2 px-20">
        <NavBar />
        <div className="flex flex-row justify-between  px-20">
          <p className="text-xl font-semibold text-rash  ">Shop</p>
          <button className="flex items-center text-rash">
            <p className="text-xl font-semibold mr-1">Sort</p>
            <GrDown className="w-5 h-5 text-rash  " />
          </button>
        </div>
        <div className="mt-10">
          <PaginationShop />
        </div>
      </div>
    </>
  );
}

export default Shop;
