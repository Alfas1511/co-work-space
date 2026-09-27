import React from 'react'
import { FaWifi, FaUsers, FaLock, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

const features = [
    { icon: <FaWifi />, text: "High-speed WiFi & Secure Network" },
    { icon: <FaUsers />, text: "Meeting & Conference Rooms" },
    { icon: <FaLock />, text: "24/7 CCTV Security" },
    { icon: <FaUtensils />, text: "Restaurant & Cafe Facility" },
    { icon: "🚹🚺", text: "Separate Spaces for Gents & Ladies" },
    { icon: <FaMapMarkerAlt />, text: "Prime City Location" },
    { icon: "💰", text: "Budget Friendly Memberships" },
    { icon: "⏰", text: "Mon – Sat (9:30 AM – 5:30 PM)" },
];

const plans = [
    { title: "Daily Pass", desc: "Perfect for freelancers & travelers", price: "₹100", unit: "/ Day" },
    { title: "Daily Pass (2 People)", desc: "Shared seating for two", price: "₹200", unit: "/ Day" },
    { title: "Monthly Membership", desc: "Ideal for startups & teams", price: "₹2500", unit: "/ Month", popular: true },
    { title: "Monthly Membership (2 People)", desc: "Shared seating for two, full month", price: "₹4500", unit: "/ Month" },
];

export default function FeaturesAndPlans() {
    return (
        <section className="relative overflow-hidden">
            {/* Atmospheric backdrop */}
            <div className="absolute inset-0">
                <img
                    src="/images/space-desks.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.07] scale-105"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(160deg, #faf8f4 0%, rgba(250,248,244,0.97) 35%, rgba(243,240,234,0.95) 70%, #ebe6dc 100%)"
                    }}
                />
                <div className="absolute -top-32 left-0 w-[28rem] h-[28rem] rounded-full bg-[var(--forest)]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[var(--wood)]/12 blur-3xl pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

                    {/* WHY CHOOSE US */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <div className="mb-10 md:mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-10 bg-[var(--forest)]/40" />
                                <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--forest-soft)] font-semibold">
                                    Amenities
                                </p>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4 leading-[1.1]">
                                Why Choose Us?
                            </h2>
                            <p className="text-[var(--ink-soft)] max-w-lg text-base md:text-lg leading-relaxed">
                                Everything you need to work comfortably, productively, and professionally.
                            </p>
                        </div>

                        <ul className="divide-y divide-[var(--ink)]/8 border-y border-[var(--ink)]/8">
                            {features.map((f, i) => (
                                <li
                                    key={i}
                                    className="group flex items-center gap-5 py-5 md:py-6 transition-all duration-300 hover:pl-2"
                                >
                                    <span className="text-[11px] font-semibold tracking-widest text-[var(--wood)]/70 w-7 shrink-0 tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full
                                        bg-gradient-to-br from-[var(--forest)]/12 to-[var(--wood)]/10
                                        text-[var(--forest)] text-base
                                        ring-1 ring-[var(--forest)]/10
                                        group-hover:from-[var(--forest)] group-hover:to-[var(--forest-soft)]
                                        group-hover:text-white group-hover:ring-[var(--forest)]/30
                                        transition-all duration-400">
                                        {f.icon}
                                    </span>
                                    <p className="text-[var(--ink)] font-medium text-[15px] md:text-base leading-snug">
                                        {f.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OUR PLANS */}
                    <div className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-28">
                        <div
                            className="relative rounded-[1.75rem] p-7 md:p-9 overflow-hidden shadow-2xl"
                            style={{
                                background: "linear-gradient(165deg, #1a1814 0%, #1f3d36 48%, #243d32 100%)"
                            }}
                        >
                            {/* Decorative accents */}
                            <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-[var(--wood)]/20 blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                            <div
                                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                                    backgroundSize: "24px 24px"
                                }}
                            />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="h-px w-10 bg-[var(--wood)]/50" />
                                    <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--wood)] font-semibold">
                                        Membership
                                    </p>
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
                                    Our Plans
                                </h2>
                                <p className="text-white/55 mb-8 text-sm md:text-base leading-relaxed">
                                    Simple, transparent pricing designed for flexibility.
                                </p>

                                <div className="space-y-3.5">
                                    {plans.map((plan, i) => (
                                        <div
                                            key={i}
                                            className={`plan-card relative overflow-hidden rounded-2xl p-5 md:p-6 transition-all duration-400
                                            ${plan.popular
                                                    ? "bg-gradient-to-br from-[var(--wood)]/25 via-white/10 to-white/5 ring-1 ring-[var(--wood)]/50"
                                                    : "bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20"
                                                }`}
                                        >
                                            {plan.popular && (
                                                <div className="absolute top-0 right-0">
                                                    <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase
                                                        bg-[var(--wood)] text-white px-3.5 py-1.5 rounded-bl-xl">
                                                        Most Popular
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex items-end justify-between gap-4">
                                                <div className="min-w-0 pr-2">
                                                    <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-1.5 leading-snug">
                                                        {plan.title}
                                                    </h3>
                                                    <p className="text-white/50 text-sm leading-snug">
                                                        {plan.desc}
                                                    </p>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <p className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight leading-none">
                                                        {plan.price}
                                                    </p>
                                                    <p className={`text-xs mt-1.5 font-medium tracking-wide ${plan.popular ? "text-[var(--wood)]" : "text-white/40"}`}>
                                                        {plan.unit}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() =>
                                        document.getElementById("contact")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="mt-8 w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide
                                        bg-white text-[var(--ink)]
                                        hover:bg-[var(--stone)] hover:scale-[1.01]
                                        transition-all duration-300"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
