import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {

  return (
    <div className="font-sans text-gray-800">

      <Header />

      <Home />

      <ContactForm />

      <Footer />

    </div>
  );
}
