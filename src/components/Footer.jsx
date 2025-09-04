import React from 'react'
import { FaWifi, FaUsers, FaLock, FaUtensils, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <>
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
        </>
    )
}

export default Footer
