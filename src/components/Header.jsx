import React from 'react'

const Header = () => {
    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <img src="/images/workspace_logo.jpg" alt="logo" className="w-10 h-10" />
                        <span className="text-2xl font-bold text-blue-700 tracking-wide">The WorkSpace</span>
                    </div>
                    <button
                        onClick={() =>
                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition"
                    >
                        Contact Us
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
