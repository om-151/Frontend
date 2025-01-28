import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 stickey bottom-0 z-50">
                <div className="max-w-7xl mx-auto py-16 px-4 flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <h4 className="font-bold text-white mb-4">Get to Know Us</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/about'>About Humayoo</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/Careers'>Careers</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/pressreleases'>Press Releases</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/science'>Humayoo Science</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <h4 className="font-bold text-white mb-4">Connect with Us</h4>
                        <ul className="space-y-2">
                            <Link to='https://www.facebook.com/' target="_blank">
                                <li className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 my-2">
                                    <Facebook size={20} className="text-blue-500" />
                                    <span>Facebook</span>
                                </li>
                            </Link>
                            <Link to='https://x.com/?lang=en&mx=2' target="_blank">
                                <li className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 my-2">
                                    <Twitter size={20} className="text-blue-400" />
                                    <span>Twitter</span>
                                </li>
                            </Link>
                            <Link to='https://www.instagram.com/' target="_blank">
                                <li className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 my-2">
                                    <Instagram size={20} className="text-pink-500" />
                                    <span>Instagram</span>
                                </li>
                            </Link>
                            <Link to='https://www.linkedin.com/' target="_blank">
                                <li className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 my-2">
                                    <Linkedin size={20} className="text-blue-600" />
                                    <span>LinkedIn</span>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <h4 className="font-bold text-white mb-4">Make Money with Us</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/seller'>Sell on Humayoo</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/selling'>Sell under Humayoo Accelerator</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/Protect'>Protect and Build Your Brand</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/global'>Humayoo Global Selling</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
                        <h4 className="font-bold text-white mb-4">Let Us Help You</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/account'>Your Account</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/return'>Returns Centre</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/safety'>Recalls and Product Safety Alerts</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link to='/download'>Download Humayoo App</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 py-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; 2020-{new Date().getFullYear()}, Humayoo.com, Inc. or its affiliates. All rights reserved.
                    </p>
                </div>
            </footer>

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out"
                    aria-label="Back to Top"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default Footer;
