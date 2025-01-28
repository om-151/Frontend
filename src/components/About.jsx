import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="my-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-600">About Humayoo</h2>
                        <p className="text-lg text-gray-600 mt-4">Welcome to Humayoo, where we offer high-quality products and exceptional service!</p>
                    </div>
                </div>
            </section>

            <section className="my-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                        <div className="flex flex-col justify-center items-center text-center p-10 bg-white text-gray-800 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
                            <img className="w-40 h-40 object-cover rounded-full mb-6 shadow-md" src="https://shorturl.at/bLHDx" alt="Founder" />
                            <h3 className="text-2xl font-semibold text-blue-500">Humayoo Founder</h3>
                            <p className="mt-4 text-blue-400 text-lg">
                                Prakash patel, an industry veteran with 15+ years of experience in the tech world, founded our company in 2010.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center p-10 bg-white text-gray-800 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
                            <img className="w-40 h-40 object-cover rounded-full mb-6 shadow-md" src="https://shorturl.at/YCLk7" alt="Team" />
                            <h3 className="text-2xl text-blue-500 font-semibold">Humayoo Team</h3>
                            <p className="mt-4 text-blue-400 text-lg">
                                Our team consists of passionate individuals who work together to deliver excellent solutions to our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 my-20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            We are committed to bringing the best products to your doorstep. Explore our wide range of high-quality items, handpicked just for you. We are a leading e-commerce platform that connects customers to the best products, brands, and services, delivering quality and convenience.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
                            <div className="flex flex-col items-center">
                                <img className="w-20 h-20 object-cover rounded-full mb-6 shadow-md" src="https://shorturl.at/YBE2I" alt="Team" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-500">Quality Assurance</h3>
                            <p className="mt-4 text-blue-400">
                                We ensure that all products are sourced from trusted suppliers, maintaining the highest quality standards.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
                            <div className="flex flex-col items-center">
                                <img className="w-20 h-20 object-cover rounded-full mb-6 shadow-md" src="https://shorturl.at/HHwJD" alt="Team" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-500">Fast Shipping</h3>
                            <p className="mt-4 text-blue-400">
                                Enjoy quick delivery times, with most of our orders arriving within 2-3 business days, wherever you are.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
                            <div className="flex flex-col items-center">
                                <img className="w-20 h-20 object-cover rounded-full mb-6 shadow-md" src="https://shorturl.at/tA3az" alt="Team" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-500">Customer Support</h3>
                            <p className="mt-4 text-blue-400">
                                Our customer support team is available 24/7 to help with any questions, concerns, or issues you may have.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Trusted by Thousands of Customers</h3>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Join the community of satisfied shoppers who trust us for their daily needs. Our goal is to make your shopping experience fast, secure, and enjoyable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 my-20">
                <div className="container mx-auto px-6">

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                            <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
                            <p className="text-lg text-gray-600">Satisfied Customers</p>
                        </div>

                        <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                            <h3 className="text-3xl font-bold text-green-600">5,000+</h3>
                            <p className="text-lg text-gray-600">Registered Brands</p>
                        </div>

                        <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                            <h3 className="text-3xl font-bold text-yellow-600">100,000+</h3>
                            <p className="text-lg text-gray-600">Products Registered</p>
                        </div>

                        <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                            <h3 className="text-3xl font-bold text-red-600">5+</h3>
                            <p className="text-lg text-gray-600">Delivery Partners</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Trusted by Thousands of Shoppers & Brands</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We are proud to have built a platform that connects over 10,000 satisfied customers with more than 5,000 registered brands, making shopping convenient and enjoyable.
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <h4 className="text-2xl font-semibold text-blue-500 mb-6">Ready to Start Shopping?</h4>
                        <Link to="/shop" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
                            Explore Our Products
                        </Link>
                    </div>
                </div>
            </section>
        </>

    );
};

export default About;
