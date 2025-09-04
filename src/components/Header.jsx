import React from 'react'

const Header = () => {
    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo + Title */}
                    <div className="flex items-center space-x-3">
                        <img src="/images/workspace_logo.jpg" alt="logo" className="w-12 h-12 rounded-lg shadow-md" />
                        <div className="flex flex-col leading-tight">
                            <span className="text-2xl font-extrabold text-blue-700 tracking-wide uppercase">
                                Workspace
                            </span>
                            <span className="text-sm font-medium text-gray-600 italic">
                                The Complete Working Hub
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() =>
                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 hover:scale-105 transition"
                    >
                        Contact Us
                    </button>
                </div>
            </header>

        </>
    )
}

export default Header
