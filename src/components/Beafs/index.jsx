'use client'
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    label: "Best Seller",
    name: "Premium Beef Breast Boneless",
    price: 299,
    oldPrice: 350,
    img: "/assets/bf1.png",
  },
  {
    id: 2,
    label: "New",
    name: "Premium Beef Breast Boneless",
    price: 299,
    oldPrice: 350,
    img: "/assets/bf2.png",
  },
  {
    id: 3,
    label: "17% OFFER",
    name: "Premium Beef Breast Boneless",
    price: 299,
    oldPrice: 350,
    img: "/assets/bf3.png",
  },
  {
    id: 4,
    label: "Premium",
    name: "Premium Beef Breast Boneless",
    price: 299,
    oldPrice: 350,
    img: "/assets/bf4.png",
  },
  {
    id: 5,
    label: "New / 17% OFF",
    name: "Premium Beef Breast Boneless",
    price: 299,
    oldPrice: 350,
    img: "/assets/bf5.png",
  },
];

const Beafs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl self-center flex-1 md:text-[40px] font-semibold leading-[125%] livvic-font text-center text-gray-900">
            Make The Switch To Halal
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-[#D72638] text-white  transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Scrollable product list */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] p-4 sm:min-w-[250px] bg-white border border-[#DBDDE3] rounded-lg  transition duration-300 flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[161px] object-cover rounded-t-lg"
                />
                {product.label && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.label}
                  </span>
                )}
              </div>
              <div className="">
                <h3 className="text-gray-800 font-medium leading-[150%] text-[15px]  mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xl leading-[24px] font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-[#717171] line-through">
                    ${product.oldPrice}
                  </span>
                </div>
                <button className="w-full bg-[#D72638]  text-white font-medium py-2 rounded transition">
                  Build a Box
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beafs;
