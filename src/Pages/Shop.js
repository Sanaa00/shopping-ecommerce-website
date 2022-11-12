import React from "react";
import NavBar from "../Component/NavBar";
import { GrDown } from "react-icons/gr";
import PaginationShop from "../Component/PaginationShop";
import Footer from "../Component/Footer";
import RecommendationSlider from "../Component/RecommendationSlider";

function Shop({ products, isLoading, onBuyHandle, shopItem }) {
  return (
    <>
      <div className=" bg-spi py-2 px-20">
        <NavBar shopItem={shopItem} />
        <div className="flex flex-row justify-between  px-20">
          <p className="text-xl font-semibold text-rash  ">Shop</p>
          <button className="flex items-center text-rash">
            <GrDown className="w-5 h-5 text-rash  " />
          </button>
        </div>
        <div className="mt-10  ">
          <PaginationShop
            products={products}
            isLoading={isLoading}
            onBuyHandle={onBuyHandle}
            shopItem={shopItem}
          />
        </div>
        <RecommendationSlider products={products} onBuyHandle={onBuyHandle} />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
