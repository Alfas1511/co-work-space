import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Header = ({
    title = "Workspace",
    subtitle = "The Co-Working Hub",
    logo = "/images/workspace_logo.jpg",
    showAccountsLink = true,
    showWorkspaceLink = false
}) => {

    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50
            backdrop-blur-xl bg-[var(--cream)]/75 border-b border-[var(--ink)]/8">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="flex items-center gap-4">
                    <img src={logo} alt="logo"
                        className="w-12 h-12 rounded-xl shadow-sm object-cover" />

                    <div className="flex flex-col leading-tight">
                        <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-[var(--ink)] uppercase">
                            {title}
                        </span>
                        <span className="text-xs md:text-sm text-[var(--ink-soft)]">
                            {subtitle}
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-3">

                    {/* {showAccountsLink && (
                        <Link to="/accounts-solutions" className="btn-outline">
                            Accounts Solutions
                        </Link>
                    )} */}

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

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl text-[var(--ink)]"
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-[var(--cream)]/95 backdrop-blur-lg border-t border-[var(--ink)]/5">

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
