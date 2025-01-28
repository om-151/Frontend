import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const heroSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    };

    const productSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const heroSlides = [
        {
            image: "https://shorturl.at/j2ucr",
            title: "Home & Kitchen Products Collection",
            description: "Up to 20% off on Home & Kitchen products",
        },
        {
            image: "https://shorturl.at/nZrlz",
            title: "Exclusive Deals",
            description: "Don't miss out on the latest trends",
        },
        {
            image: "https://shorturl.at/ggpLE",
            title: "Easy Payment Gateway",
            description: "Very easy to do payment on Humayoo",
        },
        {
            image: "https://shorturl.at/SiGiC",
            title: "Easy to Manage Inventory",
            description: "Very easy to manage inventory in shop",
        },
        {
            image: "https://shorturl.at/1EBdY",
            title: "Open your account now",
            description: "Open your account now and get 50% off",
        },
    ];

    const services = [
        {
            title: "Free Delivery",
            description: "On orders above ₹500",
            icon: FiTruck,
        },
        {
            title: "1 Year Warranty",
            description: "100% Guarantee",
            icon: FiShield,
        },
        {
            title: "Easy Returns",
            description: "30 Day Return Policy",
            icon: FiRefreshCw,
        },
    ];

    const popularBrands = [
        {
            name: "Nike",
            image: "https://shorturl.at/AcaAP",
        },
        {
            name: "Adidas",
            image: "https://shorturl.at/gK4oO",
        },
        {
            name: "Boat",
            image: "https://shorturl.at/Karen",
        },
        {
            name: "JBL",
            image: "https://tinyurl.com/jblearphone12",
        },
        {
            name: "Apple",
            image: "https://tinyurl.com/appleiphone125",
        },
        {
            name: "Samsung",
            image: "https://tinyurl.com/samsung56hhy",
        },
    ];

    const testimonials = [
        {
            name: "Courier express",
            image: "https://shorturl.at/ttCXj",
            tagline: "You ask, we deliver",
            feedback: "'Your dedication and hard work truly stand out.'",
        },
        {
            name: "Xpress bees",
            image: "https://shorturl.at/jpX0o",
            tagline: "Delivering happiness",
            feedback: "'Reliable and professional at every step.'",
        },
        {
            name: "Delhivery",
            image: "https://shorturl.at/jXiil",
            tagline: "Delivery hai, ho jayega",
            feedback: "'Your efforts make a difference! Exceptional service, every time.'",
        },
    ];

    const reviews = [
        {
            id: 1,
            name: 'Om Sonani',
            profilePic: 'https://shorturl.at/cnAQd',
            rating: 5,
            review: 'Fantastic shopping experience! Easy navigation, quick checkout, and fast delivery. Highly recommend this site for online shopping in near future!',
        },
        {
            id: 2,
            name: 'Kavita Parekh',
            profilePic: 'https://shorturl.at/Nk1vK',
            rating: 4,
            review: 'Love the variety and quality! My order arrived earlier than expected, and the customer service was excellent. Will definitely shop again!',
        },
        {
            id: 3,
            name: 'Suresh Goyal',
            profilePic: 'https://shorturl.at/eamcl',
            rating: 5,
            review: 'A seamless experience from start to finish. Great product selection and prompt delivery. Very happy with my purchase!',
        },
        {
            id: 4,
            name: 'Amita Jain',
            profilePic: 'https://shorturl.at/hrBlC',
            rating: 5,
            review: 'Great prices and quick delivery. Customer support was helpful in answering my questions. Highly recommended!',
        },
        {
            id: 5,
            name: 'Mr.Patel',
            profilePic: 'https://shorturl.at/Z6uv9',
            rating: 5,
            review: 'Exceptional shopping experience! Easy to place an order, and everything was delivered quickly and in perfect condition.',
        },
        {
            id: 6,
            name: 'Jinal Maheta',
            profilePic: 'https://shorturl.at/UXFwe',
            rating: 4,
            review: 'I’ve used this site several times, and every time, the experience has been excellent. Quality products, quick shipping, and great customer support!',
        },
    ];

    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
                    ★
                </span>
            ));
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full">
                <Slider {...heroSettings}>
                    {heroSlides.map((slide, index) => (
                        <div key={index} className="relative h-[500px]">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
                                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                                <p className="mb-4">{slide.description}</p>
                                <Link to="/shop">
                                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200">
                                        Shop Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="container mx-auto my-10 px-4">
                <p className='text-3xl font-bold mb-8 text-blue-600'>Our Services</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                            <service.icon className="text-4xl text-blue-600" />
                            <div>
                                <h3 className="font-semibold text-lg">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto my-10 px-4">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">Popular Brands</h2>
                <Slider {...productSettings}>
                    {popularBrands.map((brand, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-40 object-contain mb-4"
                                />
                                <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="bg-gray-50 my-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-blue-600">Delivery Partner</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.tagline}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4 mb-10">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Customer Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            <img
                                src={review.profilePic}
                                alt={review.name}
                                className="w-20 h-20 rounded-full mb-4 object-cover"
                            />

                            <h3 className="text-lg font-semibold">{review.name}</h3>

                            <div className="flex justify-center mt-2 mb-4">{renderStars(review.rating)}</div>

                            <p className="text-sm text-gray-600">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
