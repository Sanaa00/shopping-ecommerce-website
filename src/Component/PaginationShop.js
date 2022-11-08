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
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    /* calculations for the react paginate */

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setIsLoading(false);
    console.log("current items:", currentItems);
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
      <div className="flex flex-row  justify-start mx-20  text-md text-spi mb-5 ">
        <button
          className="rounded-full bg-xanay px-4 py-1 mr-4 hover:bg-rasasy shadow-lg  "
          onClick={() => setCurrentItems(products)}
        >
          All
        </button>
        <button
          className="rounded-full bg-xanay px-4 py-1 mr-4 hover:bg-rasasy shadow-lg  "
          onClick={() => filterHandle("electronics")}
        >
          Electronics
        </button>
        <button
          className="rounded-full bg-xanay px-4 py-1 mx-4 hover:bg-rasasy  shadow-lg"
          onClick={() => filterHandle("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="rounded-full bg-xanay px-4 py-1 mx-4 hover:bg-rasasy shadow-lg "
          onClick={() => filterHandle("men's clothing")}
        >
          Men
        </button>
        <button
          className="rounded-full bg-xanay px-4 py-1 mx-4 hover:bg-rasasy shadow-lg "
          onClick={() => filterHandle("women's clothing")}
        >
          Momen
        </button>
      </div>

      <div className="grid grid-cols-4  gap-10 grid-rows-2 mx-20  items-center">
        {currentItems.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl mb-5 w-60 flex flex-col justify-start shadow-2xl "
            >
              <div className="flex flex-row  justify-between items-center mb-2 mt-6  px-4">
                {" "}
                <h2 className="text-l font-medium   ">
                  {product.title.slice(0, 10)}
                </h2>
                <h2 className="text-l font-medium">{product.price}$</h2>
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <img
                  alt="product"
                  src={product.image}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="flex flex-row justify-between items-center px-4 pb-2 mt-6">
                <button
                  onClick={onBuyHandle}
                  className="font-semibold text-spi bg-xanay hover:bg-rasasy rounded-full px-4 py-1 mb-2 shadow-xl"
                >
                  Buy
                </button>

                <button onClick={() => {}} className="flex justify-end  mb-2">
                  <AiFillHeart className="w-6 h-6" />
                </button>
              </div>
            </div>
          );
        })}
        {/* pagination component here */}
      </div>

      <div className="container mx-auto flex justify-center my-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
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
