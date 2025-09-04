import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWifi, FaUsers, FaLock, FaUtensils, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <img src="/images/workspace_logo.jpg" alt="logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-700 tracking-wide">The WorkSpace</span>
          </div>
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative w-full h-screen mt-16">
        <Slider {...settings}>
          {[
            { img: "/images/work_space_image_1.jpg", title: "Work Smarter, Together", desc: "Premium coworking spaces designed for productivity, collaboration, and growth." },
            { img: "/images/cws-2.webp", title: "Flexible Plans", desc: "Choose from daily, weekly, or monthly rentals that fit your needs." },
            { img: "/images/work3.jpg", title: "Your Office, Your Way", desc: "Modern spaces in prime locations to help your business thrive." }
          ].map((slide, idx) => (
            <div key={idx} className="relative">
              <img src={slide.img} alt="workspace" className="w-full h-screen object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-2xl animate-slideUp">{slide.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features & Plans */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Features */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <FaWifi />, text: "High-speed WiFi & Secure Network" },
              { icon: <FaUsers />, text: "Meeting & Conference Rooms" },
              { icon: <FaLock />, text: "24/7 CCTV Security" },
              { icon: <FaUtensils />, text: "Restaurant & Cafe Facility" },
              { icon: "🍽️", text: "Dining Area" },
              { icon: "🚹🚺", text: "Separate Spaces for Gents & Ladies" },
              { icon: <FaMapMarkerAlt />, text: "Prime City Location" },
              { icon: "💰", text: "Budget Friendly Memberships" },
              { icon: "⏰", text: "Mon – Sat (9:30 AM – 5:30 PM)" },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition flex items-center space-x-3"
              >
                <span className="text-blue-600 text-2xl">{f.icon}</span>
                <p className="text-lg">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-10">Our Plans</h2>
          <div className="grid gap-8">
            {[
              { title: "Daily Pass", desc: "Perfect for freelancers & travelers", price: "₹100 / Day" },
              { title: "Weekly Plan", desc: "Best for short-term projects", price: "₹500 / Week" },
              { title: "Monthly Membership", desc: "Ideal for startups & teams", price: "₹2500 / Month", popular: true }
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 border rounded-2xl text-center shadow-md hover:shadow-2xl transition transform hover:scale-105 ${plan.popular ? "bg-blue-50 border-blue-400" : "bg-white"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-3">{plan.desc}</p>
                <p className="text-3xl font-bold text-blue-700">{plan.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">Get in Touch</h2>
          <form className="space-y-6 bg-white p-10 rounded-2xl shadow-2xl">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "address", label: "Address", type: "text" },
              { id: "phone", label: "Phone Number", type: "tel" },
            ].map((field, i) => (
              <div className="relative" key={i}>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  {field.label}
                </label>
              </div>
            ))}
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
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-14 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Our Address</h3>
            <p>1st Floor Shopping Complex<br />P.O Junction Kothamangalam<br />Ernakulam, 686691</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-300 transition"><FaLinkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="flex items-center space-x-2"><FaPhone /> <span>+91 98765 43210</span></p>
          </div>
        </div>
        <p className="text-center mt-10 text-sm text-gray-400">© 2025 WorkSpace. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
