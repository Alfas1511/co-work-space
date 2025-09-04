import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  // carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-blue-700">The WorkSpace</span>
        </div>
        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </header>

      {/* Hero Carousel */}
      <section className="relative w-full max-w-6xl mx-auto mt-4">
        <Slider {...settings}>
          <div className="relative">
            <img src="/images/work1.jpg" alt="workspace1" className="rounded-xl w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Work Smarter, Together</h1>
              <p className="text-lg md:text-xl max-w-2xl">Premium coworking spaces designed for productivity, collaboration, and growth.</p>
            </div>
          </div>
          <div className="relative">
            <img src="/images/work2.jpg" alt="workspace2" className="rounded-xl w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Flexible Plans</h1>
              <p className="text-lg md:text-xl max-w-2xl">Choose from daily, weekly, or monthly rentals that fit your needs.</p>
            </div>
          </div>
          <div className="relative">
            <img src="/images/work3.jpg" alt="workspace3" className="rounded-xl w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Your Office, Your Way</h1>
              <p className="text-lg md:text-xl max-w-2xl">Modern spaces in prime locations to help your business thrive.</p>
            </div>
          </div>
        </Slider>
      </section>

      {/* Features & Plans */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-16">
        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ High-speed WiFi & Secure Network</li>
            <li>✅ Meeting Rooms</li>
            <li>✅ CCTV Security 24/7</li>
            <li>✅ Air Condition Spaces</li>
            <li>✅ Conference Rooms</li>
            <li>✅ Restaurant Facility</li>
            <li>✅ Prime City Location</li>
            <li>✅ Separate rooms for Ladies and Gents</li>
            <li>✅ Budget Friendly</li>
          </ul>
        </div>

        {/* Plans */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Plans</h2>
          <div className="grid gap-6">
            <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Daily Pass</h3>
              <p className="text-gray-600 mb-3">Perfect for freelancers & travelers</p>
              <p className="text-2xl font-bold text-blue-700">₹100 / Day</p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
              <p className="text-gray-600 mb-3">Best for short-term projects</p>
              <p className="text-2xl font-bold text-blue-700">₹500 / Week</p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition text-center bg-blue-50 border-blue-300">
              <h3 className="text-xl font-semibold mb-2">Monthly Membership</h3>
              <p className="text-gray-600 mb-3">Ideal for startups & teams</p>
              <p className="text-2xl font-bold text-blue-700">₹2500 / Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
            Get in Touch
          </h2>
          <form className="space-y-6 bg-white p-10 rounded-2xl shadow-2xl">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            {/* Address */}
            <div className="relative">
              <input
                type="text"
                id="address"
                placeholder=" "
                className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <label
                htmlFor="address"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Phone Number
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 active:scale-95 transition transform"
            >
               Submit
            </button>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Our Address</h3>
            <p>1st Floor Shopping Complex<br />P.O Junction Kothamangalam<br />Ernakulam, 686691</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-bold text-lg mb-2">Other Services</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Event Spaces</a></li>
              <li><a href="#" className="hover:underline">Virtual Offices</a></li>
              <li><a href="#" className="hover:underline">Training Rooms</a></li>
            </ul>
          </div> */}
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">© 2025 WorkSpace. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
