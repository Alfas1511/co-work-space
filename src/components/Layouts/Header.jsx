import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Header = ({
    title = "Workspace",
    subtitle = "The Complete Working Hub",
    logo = "/images/workspace_logo.jpg",
    showAccountsLink = true,
    showWorkspaceLink = false
}) => {

    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 
            backdrop-blur-xl bg-white/70 border-b border-white/30">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={logo} alt="logo"
                        className="w-12 h-12 rounded-xl shadow-sm" />

                    <div className="flex flex-col leading-tight">
                        <span className="text-xl md:text-2xl font-extrabold text-slate-900 uppercase">
                            {title}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500">
                            {subtitle}
                        </span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-4">

                    {showAccountsLink && (
                        <Link to="/accounts-solutions" className="btn-outline">
                            Accounts Solutions
                        </Link>
                    )}

                    {showWorkspaceLink && (
                        <Link to="/" className="btn-outline-indigo">
                            Workspace
                        </Link>
                    )}

                    <button
                        onClick={() =>
                            document.getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="btn-primary">
                        Contact Us
                    </button>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl text-slate-800"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-white/90 backdrop-blur-lg">

                    {showAccountsLink && (
                        <Link
                            to="/accounts-solutions"
                            onClick={() => setOpen(false)}
                            className="block btn-outline text-center">
                            Accounts Solutions
                        </Link>
                    )}

                    {showWorkspaceLink && (
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="block btn-outline-indigo text-center">
                            Workspace
                        </Link>
                    )}

                    <button
                        onClick={() => {
                            document.getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            setOpen(false);
                        }}
                        className="w-full btn-primary">
                        Contact Us
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header