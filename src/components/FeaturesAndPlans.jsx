import React from 'react'
import { FaWifi, FaUsers, FaLock, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

export default function FeaturesAndPlans() {
    return (
        <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* FEATURES */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-slate-500 mb-12 max-w-md">
                        Everything you need to work comfortably, productively, and professionally.
                    </p>

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
                                className="flex items-start gap-4 p-6 bg-white 
                                rounded-2xl border border-slate-100 
                                shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-10 h-10 flex items-center justify-center 
                                    rounded-xl bg-blue-50 text-blue-600 text-lg">
                                    {f.icon}
                                </div>

                                <p className="text-slate-700 font-medium leading-snug">
                                    {f.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PLANS */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Our Plans
                    </h2>
                    <p className="text-slate-500 mb-12 max-w-md">
                        Simple, transparent pricing designed for flexibility.
                    </p>

                    <div className="grid gap-8">
                        {[
                            { title: "Daily Pass", desc: "Perfect for freelancers & travelers", price: "₹100 / Day" },
                            { title: "Weekly Plan", desc: "Best for short-term projects", price: "₹500 / Week" },
                            { title: "Monthly Membership", desc: "Ideal for startups & teams", price: "₹2500 / Month", popular: true }
                        ].map((plan, i) => (
                            <div
                                key={i}
                                className={`relative p-8 rounded-3xl border transition
                                ${plan.popular
                                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl"
                                        : "bg-white border-slate-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3 right-6 
                                    bg-white text-blue-600 text-xs font-semibold 
                                    px-4 py-1 rounded-full shadow">
                                        Most Popular
                                    </span>
                                )}

                                <h3 className={`text-2xl font-semibold mb-3`}>
                                    {plan.title}
                                </h3>

                                <p className={`${plan.popular ? "text-blue-100" : "text-slate-500"} mb-6`}>
                                    {plan.desc}
                                </p>

                                <p className="text-3xl font-extrabold">
                                    {plan.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
