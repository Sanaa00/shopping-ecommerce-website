import React from "react";
import NavBar from "../Component/NavBar";

function Home() {
  return (
    <>
      <div className="h-screen bg-spi py-2 px-20">
        <NavBar />
        <div>
          <div className="flex flex-col justify-between w-1/2 px-20">
            <p className="text-rash text-6xl font-semibold">
              Decent light. Awesome life
            </p>
            <p className="text-rasasy text-2xl mt-10">
              the best quality lamps with excellent lighting and long service
              life.
            </p>
            <button className="text-spi font-semibold text-xl shadow-lg bg-rasasy px-10 py-2 rounded-full w-fit mt-10">
              Add to cart
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-5 px-20 w-1/2 mt-20 justify-between">
            <div className="">
              <p className="text-rash text-2xl font-semibold">Durability</p>
              <p className="text-rasasy text-lg mt-5">
                We make chandeleirs and lamps with a guarantee of a long service
                life. we use only durable material.
              </p>
            </div>
            <div className="">
              <p className="text-rash text-2xl font-semibold ">Luminosity</p>
              <p className="text-rasasy text-lg mt-5">
                We only use light bulbs with a wide field of illumination its
                always light with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
