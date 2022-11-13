import React from "react";
import Slider from "react-slick";
import { AiOutlineHeart } from "react-icons/ai";
function RecommendationSlider({ products, onBuyHandle }) {
  const slideToshoww = () => {
    if (window.innerWidth < 640) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 3;
    } else {
      return 4;
    }
  };
  const slideToscrolll = () => {
    if (window.innerWidth < 640) {
      return 1;
    } else {
      return 3;
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: { slideToshoww },
    slidesToScroll: { slideToscrolll },
    arrows: false,
  };
  return (
    <>
      <div>
        <h2 className="mb-10 text-xl font-semibold text-rash md:px-20">
          Recomendations for today
        </h2>

        <Slider
          {...settings}
          className="flex flex-row justify-center items-center"
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className=" sm:mx-4 flex flex-row justify-center items-center"
              >
                <div className="bg-white rounded-2xl mb-5 w-60 flex flex-col justify-start shadow-lg ">
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
                      className="font-semibold text-spi bg-xanay hover:bg-rasasy rounded-full px-4 py-1 mb-2 shadow-xl transition ease-in-out delay-150  duration-300"
                    >
                      Buy
                    </button>

                    <button
                      onClick={() => {}}
                      className="flex justify-end  mb-2"
                    >
                      <AiOutlineHeart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default RecommendationSlider;
