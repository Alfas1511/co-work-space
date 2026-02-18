import React from 'react'

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 
                backdrop-blur-xl bg-white/70 
                border-b border-white/30">

                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/images/workspace_logo.jpg"
                            alt="logo"
                            className="w-12 h-12 rounded-xl shadow-sm"
                        />

                        <div className="flex flex-col leading-tight">
                            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-slate-900 uppercase">
                                Workspace
                            </span>
                            <span className="text-xs md:text-sm font-medium text-slate-500">
                                The Complete Working Hub
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() =>
                            document.getElementById("contact")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-6 py-2.5 rounded-full 
                        bg-gradient-to-r from-blue-600 to-indigo-600 
                        text-white text-sm font-semibold 
                        shadow-md hover:shadow-xl 
                        hover:scale-105 transition-all duration-300"
                    >
                        Contact Us
                    </button>

                </div>
            </header>
        </>
    )
}

export default Header
