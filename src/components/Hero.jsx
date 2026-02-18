import React from 'react'
import Slider from "react-slick";
export default function Hero() {
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
        <div>
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
        </div>
    )
}
