import React from "react";

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:min-h-screen bg-[#f7f3eb]">
      {/* Left Side - Google Map */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.942079965022!2d-0.1216237841319618!3d51.50329757963516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c357b56a97%3A0xd2d568f1f6a731de!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-10">
        <h3 className="text-red-500 font-semibold livvic-font text-lg mb-2">Contact us</h3>
        <h1 className="text-3xl md:text-[48px] font-extrabold mb-6 manrope-font ">Write a Message</h1>

        <form className="w-full space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <textarea
            placeholder="Write a Message"
            rows="5"
            className="w-full border border-gray- bg-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>

          <button
            type="submit"
            className="bg-[#D72638] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
