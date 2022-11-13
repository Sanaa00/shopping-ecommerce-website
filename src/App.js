import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopBag from "./Pages/ShopBag";
function App() {
  const [products, setProducts] = useState([]);
  const [shopItem, setShopItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onBuyHandle = (product) => {
    const exist = shopItem.find((item) => item.id === product.id);
    if (exist) {
      setShopItem(
        shopItem.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setShopItem([...shopItem, { ...product, quantity: 1 }]);
    }
  };
  const deleteHandle = (product) => {
    const exist = shopItem.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setShopItem(shopItem.filter((item) => item.id !== product.id));
    } else {
      setShopItem(
        shopItem.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  const deleteButton = (product) => {
    const exist = shopItem.find((item) => item.id === product.id);
    if (exist.quantity !== 0) {
      setShopItem(shopItem.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home shopItem={shopItem} />} />
        <Route
          path="shop"
          element={
            <Shop
              products={products}
              setProducts={setProducts}
              onBuyHandle={onBuyHandle}
              setShopItem={setShopItem}
              shopItem={shopItem}
            />
          }
        />

        <Route path="contact" element={<Contact shopItem={shopItem} />} />
        <Route
          path="shopbag"
          element={
            <ShopBag
              shopItem={shopItem}
              onBuyHandle={onBuyHandle}
              deleteHandle={deleteHandle}
              deleteButton={deleteButton}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
