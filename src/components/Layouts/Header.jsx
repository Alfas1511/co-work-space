import React from 'react'
import { Link } from "react-router-dom";

const Header = ({
    title = "Workspace",
    subtitle = "The Complete Working Hub",
    logo = "/images/workspace_logo.jpg",
    showAccountsLink = true,
    showWorkspaceLink = false
}) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 
            backdrop-blur-xl bg-white/70 border-b border-white/30">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo + Title */}
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 h-12 rounded-xl shadow-sm"
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="text-xl md:text-2xl font-extrabold tracking-wide text-slate-900 uppercase">
                            {title}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-slate-500">
                            {subtitle}
                        </span>
                    </div>
                </div>

                <nav className="flex items-center space-x-4">

                    {/* Show only when needed */}
                    {showAccountsLink && (
                        <Link
                            to="/accounts-solutions"
                            className="relative px-5 py-2.5 rounded-full
                            border border-blue-600/40
                            text-blue-700 font-semibold text-sm
                            backdrop-blur-md bg-white/70
                            hover:bg-blue-600 hover:text-white
                            transition-all duration-300">
                            Accounts Solutions
                        </Link>
                    )}
                    
                    {/* Back to Workspace Button */}
                    {showWorkspaceLink && (
                        <Link
                            to="/"
                            className="relative px-5 py-2.5 rounded-full
                            border border-indigo-600/40
                            text-indigo-700 font-semibold text-sm
                            backdrop-blur-md bg-white/70
                            hover:bg-indigo-600 hover:text-white
                            transition-all duration-300">
                            Workspace
                        </Link>
                    )}

                    <button
                        onClick={() =>
                            document.getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-6 py-2.5 rounded-full 
                            bg-gradient-to-r from-blue-600 to-indigo-600 
                            text-white text-sm font-semibold 
                            shadow-md hover:shadow-xl 
                            hover:scale-105 transition-all duration-300">
                        Contact Us
                    </button>
                </nav>

            </div>
        </header>
    )
}

export default Header