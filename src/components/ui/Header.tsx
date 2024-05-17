import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClasses = (path: string) =>
        `text-center block ${
            location.pathname === path
                ? "text-white"
                : "text-gray-300 hover:text-white"
        } transition duration-300`;

    return (
        <header className="bg-gradient-to-r from-purple-800 to-indigo-900 shadow-md col-span-3 h-max sticky">
            <div className="container mx-auto px-8 py-1 flex justify-between items-center">
                <Logo />
                <Navigation linkClasses={linkClasses} />
                <MobileMenuButton toggleMenu={toggleMenu} />
            </div>
            <MobileMenu isOpen={isOpen} linkClasses={linkClasses} />
        </header>
    );
};

const Logo: React.FC = () => {
    return (
        <div className="text-3xl font-bold text-white">
            <Link to="/">
                <img src="/logo.png" className="h-[50px]" alt="Logo" />
            </Link>
        </div>
    );
};

const Navigation: React.FC<{ linkClasses: (path: string) => string }> = ({
    linkClasses,
}) => {
    return (
        <nav className="hidden md:flex space-x-6">
            <Link to="/" className={linkClasses("/")}>
                Home
            </Link>
            <Link to="/features" className={linkClasses("/features")}>
                Features
            </Link>
            <Link to="/about" className={linkClasses("/about")}>
                About
            </Link>
            <Link to="/contact" className={linkClasses("/contact")}>
                Contact
            </Link>
        </nav>
    );
};

const MobileMenuButton: React.FC<{ toggleMenu: () => void }> = ({
    toggleMenu,
}) => {
    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300"
            >
                <FiMenu size={24} />
            </button>
        </div>
    );
};

const MobileMenu: React.FC<{
    isOpen: boolean;
    linkClasses: (path: string) => string;
}> = ({ isOpen, linkClasses }) => {
    return (
        <>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
                        <Link to="/" className={linkClasses("/")}>
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className={linkClasses("/features")}
                        >
                            Features
                        </Link>
                        <Link to="/about" className={linkClasses("/about")}>
                            About
                        </Link>
                        <Link to="/contact" className={linkClasses("/contact")}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
