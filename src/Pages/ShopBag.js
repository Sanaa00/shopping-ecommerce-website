import React from "react";
import NavBar from "../Component/NavBar";

function ShopBag({ shopItem }) {
  return (
    <>
      <div className=" bg-spi py-2 px-20">
        <NavBar />
        <div>{shopItem.length === 0 && <div> your bag is empty</div>}</div>
      </div>
    </>
  );
}

export default ShopBag;
