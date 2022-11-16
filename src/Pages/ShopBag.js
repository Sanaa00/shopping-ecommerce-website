import React from "react";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

import { RiDeleteBin6Line } from "react-icons/ri";
function ShopBag({ shopItem, deleteHandle, onBuyHandle, deleteButton }) {
  let sum = 0;

  shopItem.reduce((_, current) => (sum += current.price * current.quantity), 0);

  return (
    <>
      <div className="min-h-screen  bg-spi py-6 sm:py-2 px-6 md:px-10 lg:px-16 xl:px-20 ">
        <NavBar shopItem={shopItem} />{" "}
        <p className="text-xl font-semibold text-rash xl:px-20 my-10 ">
          Shopping Bag
        </p>
        <div className="flex flex-col justify-between xl:px-20">
          <div>
            {shopItem.length === 0 && (
              <div className="h-96 text-xanay sm:text-5xl  font-semibold flex justify-center items-center">
                your bag is empty
              </div>
            )}
          </div>
          <div className="">
            {shopItem.length !== 0 && (
              <div className="flex flex-col lg:flex-row justify-between items-center ">
                <div className="lg:w-2/3">
                  <div className=" bg-white rounded-3xl  p-6 xl:mr-20 shadow-xl">
                    {shopItem.map((item) => {
                      return (
                        <div key={item.id} className="">
                          <div
                            key={item.id}
                            className=" rounded-2xl mb-5  flex flex-row justify-start p-2 sm:p-6"
                          >
                            <img
                              className="rounded-xl shadwo-md   w-28 h-28 sm:w-36 sm:h-36 object-contain"
                              src={item.image}
                              alt="carditem"
                            />
                            <div className="py-2 pl-10 flex flex-col justify-between ">
                              <div className="flex flex-row justify-between items-center sm:w-60">
                                <div className="text-xs sm:text-xl font-medium  text-xanay  ">
                                  {item.title.slice(0, 10)}
                                </div>
                                <button
                                  onClick={() => deleteButton(item)}
                                  className="flex flex-row items-center  "
                                >
                                  <RiDeleteBin6Line className="sm:w-6 sm:h-6 text-rash transition ease-in-out delay-150   duration-300  hover:scale-125 " />
                                </button>
                              </div>
                              <div className="flex flex-row justify-between items-center sm:w-60">
                                <div className="text-s sm:text-xl font-medium  text-rash sm:my-5 ">
                                  {item.price.toFixed(2)}$
                                </div>
                                <div className="flex flex-row">
                                  <button
                                    onClick={() => deleteHandle(item)}
                                    className="text-s sm:px-1 font-bold text-rash"
                                  >
                                    -
                                  </button>
                                  <div className="text-s px-1 sm:px-3 font-bold text-rash">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="sm:px-1 font-bold text-rash"
                                    onClick={() => onBuyHandle(item)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-center sm:w-60 ">
                                <p className="text-s sm:text-xl font-medium  text-rash  ">
                                  Total Price
                                </p>
                                <p className=" text-s sm:text-xl font-medium  text-rash  ">
                                  {(item.price * item.quantity).toFixed(2)}$
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className=" flex flex-col w-3/4 lg:w-1/3 bg-white h-fit lg:ml-20 p-10 rounded-2xl shadow-xl my-10 lg:mt-0 md:w-1/3">
                  <div className="flex flex-row justify-between w-full">
                    <p className="text-s sm:text-lg font-medium  text-rash  ">
                      Products
                    </p>
                    <p className=" text-s sm:text-lg font-medium  text-rash ">
                      {shopItem.length}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center my-6">
                    <p className="text-s sm:text-lg font-medium  text-rash ">
                      Total price
                    </p>
                    <p className="text-s sm:text-lg font-medium  text-rash">
                      {sum.toFixed(2)}$
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>{" "}
        <Footer />
      </div>{" "}
    </>
  );
}

export default ShopBag;
