import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SpinnerRoundFilled } from "spinners-react";
function PaginationShop({ products, onBuyHandle }) {
  function filterHandle(category) {
    const result = products.filter((currentDate) => {
      return currentDate.category === category;
    });
    setCurrentItems(result);
  }
  const itemPerPageWindowSize = () => {
    if (window.innerWidth < 640) {
      return 2;
    } else if (window.innerWidth < 768) {
      return 4;
    } else {
      return 8;
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemPerPageWindowSize);
  const [save, setSave] = useState(false);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setIsLoading(false);
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <SpinnerRoundFilled
          size={90}
          thickness={180}
          speed={57}
          color="rgba(146, 85, 61, 1)"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 sm:flex sm:flex-row  justify-start md:mx-20  text-md text-spi mb-5 ">
        <button
          className="rounded-full bg-xanay mx-1 sm:px-4 py-1 sm:mr-4 hover:bg-rasasy shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1   duration-300 "
          onClick={() => setCurrentItems(products)}
        >
          All
        </button>
        <button
          className="rounded-full bg-xanay sm:px-4 mx-1 py-1 sm:mr-4 hover:bg-rasasy shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1   duration-300"
          onClick={() => filterHandle("electronics")}
        >
          Electronics
        </button>
        <button
          className="rounded-full bg-xanay sm:px-4 py-1 mx-1 sm:mx-4 hover:bg-rasasy  shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1   duration-300"
          onClick={() => filterHandle("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="rounded-full bg-xanay sm:px-4 py-1 mx-1 mt-4 sm:mt-0 sm:mx-4 hover:bg-rasasy shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1   duration-300"
          onClick={() => filterHandle("men's clothing")}
        >
          Men
        </button>
        <button
          className="rounded-full bg-xanay sm:px-4 py-1 mx-1  mt-4 sm:mt-0  sm:mx-4 hover:bg-rasasy shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1   duration-300"
          onClick={() => filterHandle("women's clothing")}
        >
          Momen
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4  sm:mt-6 md:mt-0  gap-10 sm:gap-x-16 md:gap-10 grid-rows-2 md:mx-20  justify-center sm:items-center">
        {currentItems.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl mb-5 w-60 flex flex-col justify-start  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"
            >
              <div className="flex flex-row  justify-between items-center mb-2 mt-6  px-4">
                <h2 className="text-l font-medium   ">
                  {product.title.slice(0, 10)}
                </h2>
                <h2 className="text-l font-medium">{product.price}$</h2>
              </div>
              <div className="flex justify-center items-center">
                <img
                  alt="product"
                  src={product.image}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="flex flex-row justify-between items-center px-4 pb-2 mt-6">
                <button
                  onClick={() => onBuyHandle(product)}
                  className="font-semibold text-spi bg-xanay hover:bg-rasasy rounded-full px-4 py-1 mb-2 shadow-xl  transition ease-in-out delay-150  duration-300"
                >
                  Buy
                </button>

                <button
                  onClick={() => {
                    setSave(!save);
                  }}
                  className="flex justify-end  mb-2"
                >
                  {save ? (
                    <AiFillHeart className="w-6 h-6" />
                  ) : (
                    <AiOutlineHeart className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto flex justify-center my-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          className="flex"
          previousLabel={false}
          nextLabel={false}
          pageClassName="text-rash mx-2 "
          activeClassName="text-rash border-b-2 border-rash"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default PaginationShop;
