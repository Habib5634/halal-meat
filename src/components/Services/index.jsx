import { FaBox, FaDrumstickBite, FaTruck, FaSyncAlt, FaUtensils, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <img src="/icons/building1.svg" alt="" />,
    title: "Fresh Meat Selection",
    desc: "Hand-picked halal beef, lamb, and chicken cuts with premium quality.",
  },
  {
    icon: <img src="/icons/ranking-podium.svg" alt="" />,
    title: "Build Your Box",
    desc: "Customize your own halal meat box with your favorite choices.",
    highlight: true,
  },
  {
    icon: <img src="/icons/restaurant1.svg" alt="" />,
    title: "Chilled Delivery",
    desc: "Safe and fast delivery with temperature-controlled packaging.",
  },
  {
    icon: <img src="/icons/candle.svg" alt="" />,
    title: "Monthly Subscription",
    desc: "Get your halal meat box delivered weekly or monthly with ease.",
  },
  {
    icon: <img src="/icons/glass.svg" alt="" />,
    title: "Cooking Recipes",
    desc: "Delicious recipes and cooking tips to match your meat selection.",
  },
  {
    icon: <img src="/icons/gym.svg" alt="" />,
    title: "Family & Party Packs",
    desc: "Special halal boxes designed for families, gatherings, and events.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="mb-8">
        <p className="text-[#D72638] font-semibold uppercase tracking-wide">Our Services</p>
        <h2 className="text-3xl md:text-[40px] text-[#424242] font-semibold mt-2">
          Explore Our <span className="text-[#D72638]">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg  transition duration-300 ${
              service.highlight
                ? "bg-red-600 text-white"
                : "bg-white "
            }`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              service.highlight
                ? " text-white"
                : "text-[#424242] "
            } `}>{service.title}</h3>
            <p className={`text-xs  ${
              service.highlight
                ? " text-white"
                : "text-[#9E9E9E] "
            } `}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
