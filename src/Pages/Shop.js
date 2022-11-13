import React from "react";
import NavBar from "../Component/NavBar";
import PaginationShop from "../Component/PaginationShop";
import Footer from "../Component/Footer";
import RecommendationSlider from "../Component/RecommendationSlider";

function Shop({ products, isLoading, onBuyHandle, shopItem }) {
  return (
    <>
      <div className=" bg-spi py-6 sm:py-2 px-6 md:px-10 lg:px-20">
        <NavBar shopItem={shopItem} />
        <div className="flex flex-row justify-between lg:px-20">
          <p className="text-xl font-semibold text-rash mt-10 sm:mt-0 ">Shop</p>
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
