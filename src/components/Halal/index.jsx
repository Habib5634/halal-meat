import { FaMapMarkerAlt } from "react-icons/fa";

export default function HalalSection() {
  return (
    <section className="w-full">
      {/* --- Upper Content Section --- */}
      <div className="grid md:grid-cols-2 relative z-10 gap-6 items-center py-16 max-w-[1440px] mx-auto pl-4 lg:pl-20">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-[66px] font-semibold leading-[66px] text-gray-900 mb-4">
            Let’s Talk About <span className="text-red-600">Halal Meat</span>
          </h2>
          <div className="pl-14 border-l-2 border-[#022700">

          <p className="text-[#022700] opacity-80 leading-relaxed mb-4">
            Halal Harvest is more than just a meal — it’s a journey into the heart of
            tradition, flavor, and mindful eating. Every cut of meat we serve tells a
            story of care, ethics, and respect for both food and faith. From the rich
            spices of Middle Eastern grills to the smoky tenderness of South Asian
            barbecues, our halal dishes are crafted to satisfy both the soul and the
            senses.
          </p>
          <p className="text-[#022700] opacity-80 leading-relaxed mb-6">
            Whether it’s a comforting family dinner, a festive gathering, or a quick
            lunch on the go, Halal Harvest offers flavors that connect generations and
            cultures. We honor halal not just as a method, but as a philosophy — where
            purity, taste, and community come together.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            READ MORE
          </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/assets/halal1.png"
            alt="Halal Meat"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* --- Map Section --- */}
      <div className="relative w-full h-[1065px] -mt-30 z-0">
        {/* Map background (placeholder or embedded map) */}
        <img
          src="/icons/map.png"
          alt="Map background"
          className="w-full h-[1065px] object-cover opacity-90"
        />
<div className="inset-1 bg-linear-to-b from-[#FFFFFF] via-[#FFFFFFAE] to-[#FFFFFF00]  h-[1065px] w-full absolute top-0 left-0"></div>
        {/* Location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="relative flex flex-col items-center">
            <div className="bg-red-600 text-white p-4 rounded-full shadow-lg">
              <FaMapMarkerAlt size={24} />
            </div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-md mt-2 text-sm shadow-md text-center">
              <p className="font-semibold">The main branch of the restaurant</p>
              <p className="text-xs opacity-90">23km From Your Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
