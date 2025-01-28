import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../store/Auth";
import { useCart } from "../store/AddToCartContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarOpacity, setNavbarOpacity] = useState(1);
    const { isLoggedIn, LogoutUser } = useAuth();
    const { cartItemCount } = useCart();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            setNavbarOpacity(0.7);
        } else {
            setNavbarOpacity(1);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            LogoutUser(); // Update the local state
            toast.success("Logged out successfully");
        } catch (error) {
            console.error("Error logging out: ", error);
            toast.error("Failed to log out. Please try again.");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className="sticky top-0 z-50 transition-opacity duration-300"
            style={{ backgroundColor: `rgba(31, 41, 55, ${navbarOpacity})` }}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Left - Brand Name */}
                <div className="text-2xl font-bold text-white">
                    <Link to="/" className="hover:text-gray-300">Humayoo</Link>
                </div>

                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-6 text-white">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </div>

                {/* Right - Cart Icon, Login, Signup */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link to="/addtocart">
                                <button className="relative flex text-white items-center">
                                    <FaShoppingCart size={30} />
                                    {cartItemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartItemCount}
                                        </span>
                                    )}
                                </button>
                            </Link>
                            <button onClick={handleLogout} className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">Signup</button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none focus:text-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden">
                    <div className="px-4 py-2 space-y-2 bg-gray-700 text-white">
                        <Link to="/" className="block hover:text-gray-300" onClick={closeMenu}>Home</Link>
                        <Link to="/shop" className="block hover:text-gray-300" onClick={closeMenu}>Shop</Link>
                        <Link to="/about" className="block hover:text-gray-300" onClick={closeMenu}>About</Link>
                        <Link to="/contact" className="block hover:text-gray-300" onClick={closeMenu}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;