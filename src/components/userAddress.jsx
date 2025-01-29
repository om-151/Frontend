import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserAddress() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const { cart, total } = location.state || { cart: [], total: 0 };
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        address: "",
        pincode: "",
        state: "",
        city: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email address.";
        if (
            !formData.mobileNumber.trim() ||
            !/^\d{10}$/.test(formData.mobileNumber)
        )
            newErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode))
            newErrors.pincode = "Enter a valid 6-digit pincode.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.state.trim()) newErrors.state = "State is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleProceedToPay = () => {
        if (validateForm()) {
            navigate("/payment", { state: { cart, total, formData } });
        }
    };

    if (!cart.length) {
        return <p>No products in the cart. Please return to the cart page.</p>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
                Delivery Information
            </h1>

            <div className="mb-6">
                {cart.map((product) => (
                    <div
                        key={product._id}
                        className="border p-4 rounded-lg shadow-md bg-white mb-4 flex items-center gap-4"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded"
                        />
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                            <p className="text-sm text-gray-500">
                                ₹{product.price} x {product.quantity} = ₹
                                {product.price * product.quantity}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="border-t pt-4 space-y-2 text-right">
                    <p className="text-gray-700">
                        Total Amount (After Discount): <span className="font-extrabold">₹{total.toFixed(2)}</span>
                    </p>
                </div>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg ${errors.fullName ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-sm">{errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your email address"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Mobile Number
                    </label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg ${errors.mobileNumber ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your mobile number"
                    />
                    {errors.mobileNumber && (
                        <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg ${errors.address ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your full address"
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm">{errors.address}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Pincode
                        </label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg ${errors.pincode ? "border-red-500" : ""
                                }`}
                            placeholder="Enter pincode"
                        />
                        {errors.pincode && (
                            <p className="text-red-500 text-sm">{errors.pincode}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg ${errors.city ? "border-red-500" : ""
                                }`}
                            placeholder="Enter city"
                        />
                        {errors.city && (
                            <p className="text-red-500 text-sm">{errors.city}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg ${errors.state ? "border-red-500" : ""
                                }`}
                            placeholder="Enter state"
                        />
                        {errors.state && (
                            <p className="text-red-500 text-sm">{errors.state}</p>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleProceedToPay}
                    className="w-full px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition"
                >
                    Proceed to Pay
                </button>
            </form>
        </div>
    );
}

export default UserAddress;
