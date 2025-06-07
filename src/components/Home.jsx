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
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737723859/E-commerce_dfba4k.jpg",
            title: "Home & Kitchen Products Collection",
            description: "Up to 20% off on Home & Kitchen products",
        },
        {
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737723858/manage_inventory_rdwijo.jpg",
            title: "Exclusive Deals",
            description: "Don't miss out on the latest trends",
        },
        {
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737724610/ok_1_f4bxjs.jpg",
            title: "Easy Payment Gateway",
            description: "Very easy to do payment on Humayoo",
        },
        {
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737723866/payment-purchase-order-discount-concept_jxhj6u.jpg",
            title: "Easy to Manage Inventory",
            description: "Very easy to manage inventory in shop",
        },
        {
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737741633/babu_u5luix.jpg",
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
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524690/Nike_copy_l1i8uf.jpg",
        },
        {
            name: "Adidas",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524690/Adidas_copy_nmlczb.jpg",
        },
        {
            name: "Boat",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524686/Boat_copy_ofsicc.jpg",
        },
        {
            name: "JBL",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524686/JBL_copy_tw4rqn.jpg",
        },
        {
            name: "Apple",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524686/Apple_copy_r1zppd.jpg",
        },
        {
            name: "Samsung",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737524686/Samsung_copy_ywaazo.jpg",
        },
    ];

    const testimonials = [
        {
            name: "Courier express",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737529298/DALL_E_2025-01-22_12.27.17_-_A_minimalist_logo_for_a_company_named_Courier_Express_that_specializes_in_product_delivery._The_design_includes_a_sleek_and_modern_delivery_truck_ic_akmqtc.webp",
            tagline: "You ask, we deliver",
            feedback: "'Your dedication and hard work truly stand out.'",
        },
        {
            name: "Xpress bees",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737529443/DALL_E_2025-01-22_12.33.23_-_A_minimalist_and_modern_logo_design_for_a_company_named_Xpress_Bees_that_specializes_in_product_delivery._The_logo_includes_a_sleek_abstract_bee_wi_xo2xd0.webp",
            tagline: "Delivering happiness",
            feedback: "'Reliable and professional at every step.'",
        },
        {
            name: "Delhivery",
            image: "https://res.cloudinary.com/df8whf5u8/image/upload/v1737529564/DALL_E_2025-01-22_12.36.00_-_A_simple_modern_logo_for_Delhivery_a_company_specializing_in_product_delivery_and_logistics._The_logo_should_feature_a_minimalistic_design_with_a_nvpcrf.webp",
            tagline: "Delivery hai, ho jayega",
            feedback: "'Your efforts make a difference! Exceptional service, every time.'",
        },
    ];

    const reviews = [
        {
            id: 1,
            name: 'Om Sonani',
            profilePic: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1749267940~exp=1749271540~hmac=6e0bd055855fe7da0106f3b5b33b22b12376ed3aa62d4593674c631bc0f9a6c3&w=740',
            rating: 5,
            review: 'Fantastic shopping experience! Easy navigation, quick checkout, and fast delivery. Highly recommend this site for online shopping in near future!',
        },
        {
            id: 2,
            name: 'Kavita Parekh',
            profilePic: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1749267980~exp=1749271580~hmac=561d659f4b04ab8e42cbdbd41a444393b84a1f1d34354a4c9c77f1b4befef336&w=740',
            rating: 4,
            review: 'Love the variety and quality! My order arrived earlier than expected, and the customer service was excellent. Will definitely shop again!',
        },
        {
            id: 3,
            name: 'Suresh Goyal',
            profilePic: 'https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?t=st=1749268025~exp=1749271625~hmac=792e8c93fd6a38713404ddc7c62c6cd73145ed082592be52f70df457fcd757f2&w=740',
            rating: 5,
            review: 'A seamless experience from start to finish. Great product selection and prompt delivery. Very happy with my purchase!',
        },
        {
            id: 4,
            name: 'Amita Jain',
            profilePic: 'https://img.freepik.com/free-photo/surprised-smiling-curly-girl-white-wall_176420-178.jpg?t=st=1749268092~exp=1749271692~hmac=a2a4520f323dcc11a1584ba649c7b8225e6f3731f26a07bc506b3acc30849169&w=740',
            rating: 5,
            review: 'Great prices and quick delivery. Customer support was helpful in answering my questions. Highly recommended!',
        },
        {
            id: 5,
            name: 'Mr.Patel',
            profilePic: 'https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?t=st=1749268054~exp=1749271654~hmac=18d78c24127281967859b0aff45d4af5377d5395ca536f2499a5c06dd96b2396&w=740',
            rating: 5,
            review: 'Exceptional shopping experience! Easy to place an order, and everything was delivered quickly and in perfect condition.',
        },
        {
            id: 6,
            name: 'Jinal Maheta',
            profilePic: 'https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1749265950~exp=1749269550~hmac=96eafd7f2a7640c985805ffa69f33ed3f7314d6363a8f7523c0f9cc0e1ea17a6&w=740',
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
