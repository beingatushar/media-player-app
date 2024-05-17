import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-md col-span-3 h-max sticky">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-white">
                    <Link to="/">
                        <img src="/logo.png" className="h-[50px]" />
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-6">
                    <Link
                        to="/"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/features"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Features
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
                        <Link
                            to="/"
                            className="block text-gray-300 hover:text-white transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className="block text-gray-300 hover:text-white transition duration-300"
                        >
                            Features
                        </Link>
                        <Link
                            to="/about"
                            className="block text-gray-300 hover:text-white transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-gray-300 hover:text-white transition duration-300"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
