import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-8xl font-extrabold mb-4">404</h1>
                <h2 className="text-2xl font-semibold my-2">Page not found</h2>
                <p className="text-2xl md:text-3xl font-light mb-6">
                    Oops! The page you are looking for does not exist.
                </p>
                <div className="flex flex-row items-center justify-center space-x-4">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            Back to Home
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            Contact us
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10"
            >
                <p className="text-sm font-light">
                    © 2020-{new Date().getFullYear()} Humayoo.com, Inc. or its affiliates. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
