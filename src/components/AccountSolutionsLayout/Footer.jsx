import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6 mt-24">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Address */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
                            Our Address
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            First Floor <br />
                            Oliapuram Shopping Complex <br />
                            P.O Junction Kothamangalam <br />
                            Ernakulam, 686691
                        </p>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
                            Follow Us
                        </h3>

                        <div className="flex gap-5 text-xl">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                                rounded-full bg-slate-800 hover:bg-blue-600 
                                transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                                rounded-full bg-slate-800 hover:bg-pink-600 
                                transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                                rounded-full bg-slate-800 hover:bg-blue-500 
                                transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
                            Contact
                        </h3>

                        <p className="flex items-center gap-3 text-slate-400 text-sm">
                            <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full">
                                <FaPhone className="text-white text-xs" />
                            </span>
                            +919744668439
                        </p>
                        <p className="flex items-center gap-3 text-slate-400 text-sm py-2">
                            <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full">
                                <FaPhone className="text-white text-xs" />
                            </span>
                            +919847420649
                        </p>
                        <p className="flex items-center gap-3 text-slate-400 text-sm">
                            <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full">
                                <FaEnvelope className="text-white text-xs" />
                            </span>
                            taxconsultantklm2026@gmail.com
                        </p>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 mt-16 pt-6 text-center">
                    <p className="text-xs text-slate-500 tracking-wide">
                        © 2026 Workspace. All Rights Reserved.
                    </p>
                </div>

            </footer>
        </>
    )
}

export default Footer
