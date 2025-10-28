'use client'
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const promoCards = [
  {
    id: 1,
    title: "100% Fresh Cow Milk",
    subtitle: "Starting at $14.99",
    buttonText: "Shop Now",
    bgColor: "justify-start",
    img: "/assets/pro1.png",
  },
  {
    id: 2,
    title: "Water & Soft Drink",
    subtitle: "Drink Sale",
    buttonText: "Shop Now",
    bgColor: "justify-end",
    img: "/assets/pro2.png",
  },
  {
    id: 3,
    title: "Quick Breakfast",
    subtitle: "100% Organic",
    buttonText: "Shop Now",
    bgColor: "justify-start",
    img: "/assets/pro3.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Rita O’Conner",
    email: "Sandrine.Luetgeng@gmail.com",
    text: "Fresh, clean, and truly halal. Fast delivery and great service!",
  },
  {
    id: 2,
    name: "Woodrow McCullough",
    email: "Idell.Hoppe88@yahoo.com",
    text: "Fresh, clean, and truly halal. Fast delivery and great service!",
  },
  {
    id: 3,
    name: "Veronica Hessel",
    email: "Valentin.Homenick@gmail.com",
    text: "Fresh, clean, and truly halal. Fast delivery and great service!",
  },
  {
    id: 4,
    name: "George Heaney",
    email: "Liliana.Howell85@hotmail.com",
    text: "Fresh, clean, and truly halal. Fast delivery and great service!",
  },
  {
    id: 5,
    name: "George Heaney",
    email: "Liliana.Howell85@hotmail.com",
    text: "Fresh, clean, and truly halal. Fast delivery and great service!",
  },
];

const PromoAndTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10">
      {/* Promo Cards Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {promoCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-xl overflow-hidden flex   shadow hover:shadow-lg transition duration-300`}
          style={{backgroundImage:`url(${card.img})`, backgroundSize:"cover"}}
          >
            <div className="p-6">
              <p className="text-sm font-semibold uppercase text-gray-700">{card.subtitle}</p>
              <h3 className="text-3xl font-semibold text-gray-900 max-w-[188px] mt-1 mb-3">{card.title}</h3>
              <p className="text-white  font-semibold mb-4">{card.subtitle.includes("$") ? card.subtitle : ""}</p>
              <button className="px-4 py-2 bg-white  text-[#D72638] rounded-full text-sm font-medium transition">
                {card.buttonText}
              </button>
            </div>
            {/* <img src={card.img} alt={card.title} className="w-full h-40 object-cover" /> */}
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full mb-6">
          <h2 className="text-2xl md:text-[40px] w-full self-center text-center flex-1 font-bold text-gray-900">
            What People <span className="text-red-500">Say?</span>
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
              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[250px]  bg-white border border-gray-100 rounded-lg shadow-sm px-6 py-4 text-center flex-shrink-0"
            >
              <FaQuoteLeft className="text-red-500 text-2xl mx-auto mb-3" />
              <p className="text-gray-700 mb-4 italic">{t.text}</p>
              {/* <FaQuoteRight className="text-red-500 text-2xl mx-auto mb-3" /> */}
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoAndTestimonials;
