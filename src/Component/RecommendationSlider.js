import React from "react";
import Slider from "react-slick";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function RecommendationSlider({ products }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4.4,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <>
      <div>
        <h2 className="mb-10 text-xl font-semibold text-rash px-20">
          {" "}
          Recomendations for today{" "}
        </h2>
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <div className="mx-4">
                <div
                  key={product.id}
                  className="bg-white rounded-2xl mb-5 w-60 flex flex-col justify-start shadow-xl  "
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
                    <button className="font-semibold text-spi bg-xanay hover:bg-rasasy rounded-full px-4 py-1 mb-2 shadow-xl">
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
