import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="text-slate-300 pt-20 pb-10 px-6"
            style={{
                background: "linear-gradient(165deg, #1a1814 0%, #1f3d36 55%, #152e29 100%)"
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                <div>
                    <h3 className="font-display text-white text-lg font-semibold mb-4 tracking-wide">
                        Our Address
                    </h3>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Work+Space+%7C+The+Co+Working+Hub,+Oliapuram+Shopping+Complex,+Kothamangalam,+Keralam+686691&destination_place_id=0x3b07e732de872fb3:0x42496cbceaa6c852"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed text-white/60 hover:text-white transition-colors duration-200 block"
                    >
                        First Floor <br />
                        Oliapuram Shopping Complex <br />
                        P.O Junction Kothamangalam <br />
                        Ernakulam, 686691
                    </a>
                </div>

                <div>
                    <h3 className="font-display text-white text-lg font-semibold mb-4 tracking-wide">
                        Follow Us
                    </h3>

                    <div className="flex gap-4 text-xl">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center
                            rounded-xl bg-white/10 hover:bg-[var(--forest-soft)]
                            transition-all duration-300 hover:scale-105"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center
                            rounded-xl bg-white/10 hover:bg-pink-600
                            transition-all duration-300 hover:scale-105"
                        >
                            <FaInstagram />
                        </a>

                        {/* <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center
                            rounded-xl bg-white/10 hover:bg-blue-500
                            transition-all duration-300 hover:scale-105"
                        >
                            <FaLinkedin />
                        </a> */}
                    </div>
                </div>

                <div>
                    <h3 className="font-display text-white text-lg font-semibold mb-4 tracking-wide">
                        Contact
                    </h3>

                    <p className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                            <FaPhone className="text-white text-xs" />
                        </span>
                        <a
                            href="tel:+919847420649"
                            className="hover:text-white transition-colors duration-200"
                        >
                            +919847420649
                        </a>
                    </p>

                    <p className="flex items-center gap-3 text-white/60 text-sm py-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                            <FaPhone className="text-white text-xs" />
                        </span>
                        <a
                            href="tel:+918921579300"
                            className="hover:text-white transition-colors duration-200"
                        >
                            +918921579300
                        </a>
                    </p>

                    <p className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                            <FaEnvelope className="text-white text-xs" />
                        </span>
                        <a
                            href="mailto:workspaceklm2026@gmail.com"
                            className="hover:text-white transition-colors duration-200 break-all"
                        >
                            workspaceklm2026@gmail.com
                        </a>
                    </p>
                </div>

            </div>

            <div className="border-t border-white/10 mt-16 pt-6 text-center">
                <p className="text-xs text-white/40 tracking-wide">
                    © 2026 WorkSpace. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
