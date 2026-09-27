import React from 'react'
import Slider from "react-slick";

export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        pauseOnHover: false,
        cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    };

    const slides = [
        {
            img: "/images/hero-desks.jpg",
            title: "Work Smarter, Work Together",
            desc: "Premium coworking spaces designed for productivity, collaboration, and growth."
        },
        {
            img: "/images/hero-focus.jpg",
            title: "Flexible Plans",
            desc: "Choose from daily, weekly, or monthly rentals that fit your needs."
        },
        {
            img: "/images/hero-corridor.jpg",
            title: "Your Office, Your Way",
            desc: "Modern spaces in prime locations to help your business thrive."
        }
    ];

    return (
        <section className="relative w-full overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, idx) => (
                    <div key={idx} className="relative">
                        <div className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
                            <img
                                src={slide.img}
                                alt="workspace"
                                className="absolute inset-0 w-full h-full object-cover hero-kenburns"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1814]/80 via-[#1a1814]/45 to-[#1f3d36]/25" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814]/55 via-transparent to-transparent" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <p className="mb-4 text-xs md:text-sm tracking-[0.35em] uppercase text-white/70 animate-fadeIn font-medium">
                                    Workspace · The Complete Working Hub
                                </p>
                                <h1 className="font-display text-5xl md:text-7xl font-semibold mb-5 max-w-4xl leading-[1.05] animate-fadeIn">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-xl max-w-2xl text-white/85 leading-relaxed animate-slideUp">
                                    {slide.desc}
                                </p>
                                <button
                                    onClick={() =>
                                        document.getElementById("contact")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="mt-10 px-8 py-3.5 text-sm font-semibold tracking-wide
                                        bg-white text-[var(--ink)] rounded-md
                                        hover:bg-[var(--stone)] hover:scale-[1.02]
                                        transition-all duration-300 animate-slideUp"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
