import React from "react";
import NavBar from "../Component/NavBar";

function Home({ shopItem }) {
  return (
    <>
      <div className="h-screen bg-spi py-6 sm:py-2 px-6 md:px-10 lg:px-20">
        <NavBar shopItem={shopItem} />

        <div className="flex flex-col justify-between md:w-1/2 mt-10 sm:mt-0 md:px-10 lg:px-20">
          <p className="text-rash text-4xl sm:text-6xl md:text-4xl font-semibold">
            Decent light. Awesome life
          </p>
          <p className="text-rasasy w-4/5 sm:w-full text-xl sm:text-2xl md:text-xl mt-10">
            the best quality lamps with excellent lighting and long service
            life.
          </p>
          <button className="text-spi font-semibold text-xl shadow-lg bg-xanay px-6 sm:px-10 py-2 rounded-full w-fit mt-10 transition ease-in-out delay-150   duration-300  hover:-translate-y-1 hover:scale-105 ">
            Add to cart
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-x-5 md:px-10 lg:px-20 sm:w-1/2 md:w-full mt-20 sm:mt-10 lg:mt-20 justify-between">
          <div className="">
            <p className="text-rash text-2xl font-semibold">Durability</p>
            <p className="text-rasasy text-lg mt-5">
              We make chandeleirs and lamps with a guarantee of a long service
              life. we use only durable material.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <p className="text-rash text-2xl font-semibold ">Luminosity</p>
            <p className="text-rasasy text-lg mt-5">
              We only use light bulbs with a wide field of illumination its
              always light with us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
