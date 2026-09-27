import React from 'react'

const spaces = [
    {
        img: "/images/space-brand.jpg",
        label: "Reception",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        img: "/images/space-desks.jpg",
        label: "Dedicated Desks",
        span: ""
    },
    {
        img: "/images/space-inspiration.jpg",
        label: "Inspiration Wall",
        span: ""
    },
    {
        img: "/images/space-cabin.jpg",
        label: "Private Cabin",
        span: ""
    },
    {
        img: "/images/space-meeting.jpg",
        label: "Meeting Room",
        span: "md:col-span-2"
    },
];

export default function SpaceGallery() {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden section-gradient">
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[var(--forest)]/10 blur-3xl animate-float pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-[var(--wood)]/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-2xl mb-14 md:mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[var(--forest-soft)] font-semibold mb-3">
                        The Space
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--ink)] mb-4 leading-tight">
                        Designed for focused work
                    </h2>
                    <p className="text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
                        Clean desks, private cabins, and meeting rooms — a calm environment built for productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[260px]">
                    {spaces.map((space, i) => (
                        <div
                            key={i}
                            className={`gallery-item relative rounded-2xl group ${space.span}`}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <img
                                src={space.img}
                                alt={space.label}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-[var(--ink)]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-400" />
                            <span className="absolute bottom-5 left-5 text-white font-medium tracking-wide text-sm md:text-base">
                                {space.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
