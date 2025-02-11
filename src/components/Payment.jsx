import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useCart } from "../store/AddToCartContext";
import { useAuth } from "../store/Auth"

const Payment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { cart, total, formData } = useLocation().state || { cart: [], total: 0, formData: {} };
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const { API } = useAuth()

    // const handlePayment = async (event) => {
    //     event.preventDefault();
    //     setLoading(true);
    //     setMessage("");

    //     if (!stripe || !elements) {
    //         setMessage("Stripe is not fully loaded yet. Please try again.");
    //         setLoading(false);
    //         return;
    //     }

    //     const cardElement = elements.getElement(CardElement);
    //     if (!cardElement) {
    //         setMessage("Card details are not entered. Please try again.");
    //         setLoading(false);
    //         return;
    //     }

    //     try {
    //         const response = await fetch(`${API}/api/stripe/payment`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ amount: total * 100, currency: "inr" }),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to create payment intent. Please check the server.");
    //         }

    //         const { clientSecret } = await response.json();
    //         if (!clientSecret) {
    //             throw new Error("Payment Intent creation failed. Try again later.");
    //         }

    //         const result = await stripe.confirmCardPayment(clientSecret, {
    //             payment_method: {
    //                 card: cardElement,
    //                 billing_details: {
    //                     name: formData.fullName,
    //                     email: formData.email,
    //                     address: {
    //                         line1: formData.address,
    //                         postal_code: formData.pincode,
    //                         city: formData.city,
    //                         state: formData.state,
    //                         country: "IN",
    //                     },
    //                 },
    //             },
    //         });

    //         if (result.error) {
    //             throw new Error(result.error.message);
    //         }

    //         if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
    //             setMessage("Payment successful! 🎉");
    //             setPaymentSuccess(true);
    //             toast.success("Order placed successfully! 🎉");
    //             clearCart();
    //         } else {
    //             throw new Error("Payment failed. Please try again.");
    //         }
    //     } catch (error) {
    //         setMessage(error.message || "Something went wrong. Please try again.");
    //         toast.error(error.message || "Payment failed. Please try again!");
    //     }

    //     setLoading(false);
    // };

    // const handlePayment = async (event) => {
    //     event.preventDefault();

    //     if (loading) return; // Prevent multiple calls

    //     setLoading(true);
    //     setMessage("");

    //     if (!stripe || !elements) {
    //         setMessage("Stripe is not fully loaded yet. Please try again.");
    //         setLoading(false);
    //         return;
    //     }

    //     const cardElement = elements.getElement(CardElement);
    //     if (!cardElement) {
    //         setMessage("Card details are not entered. Please try again.");
    //         setLoading(false);
    //         return;
    //     }

    //     try {
    //         // Fetch client secret from the server
    //         const response = await fetch(`${API}/api/stripe/payment`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ amount: total * 100, currency: "inr" }),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to create payment intent. Please check the server.");
    //         }

    //         const { clientSecret } = await response.json();
    //         if (!clientSecret) {
    //             throw new Error("Payment Intent creation failed. Try again later.");
    //         }

    //         // Perform payment confirmation
    //         const result = await stripe.confirmCardPayment(clientSecret, {
    //             payment_method: {
    //                 card: cardElement,
    //                 billing_details: {
    //                     name: formData.fullName,
    //                     email: formData.email,
    //                     address: {
    //                         line1: formData.address,
    //                         postal_code: formData.pincode,
    //                         city: formData.city,
    //                         state: formData.state,
    //                         country: "IN",
    //                     },
    //                 },
    //             },
    //         });

    //         if (result.error) {
    //             throw new Error(result.error.message);
    //         }

    //         if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
    //             setMessage("Payment successful! 🎉");
    //             setPaymentSuccess(true);
    //             toast.success("Order placed successfully! 🎉");
    //             clearCart();
    //         } else {
    //             throw new Error("Payment failed. Please try again.");
    //         }
    //     } catch (error) {
    //         setMessage(error.message || "Something went wrong. Please try again.");
    //         toast.error(error.message || "Payment failed. Please try again!");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handlePayment = async (event) => {
        event.preventDefault();
        if (loading) return; // Prevent duplicate clicks
        setLoading(true);
        setMessage("");

        if (!stripe || !elements) {
            setMessage("Stripe is not fully loaded yet. Please try again.");
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            setMessage("Card details are not entered. Please try again.");
            setLoading(false);
            return;
        }

        try {
            console.log("Initiating payment request...");
            const response = await fetch(`${API}/api/stripe/payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: total * 100, currency: "inr" }),
            });

            console.log("Response received:", response);
            if (!response.ok) {
                throw new Error("Failed to create payment intent. Server issue.");
            }

            const data = await response.json();
            console.log("Payment Intent Data:", data);

            const clientSecret = data.clientSecret;
            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Try again later.");
            }

            console.log("Confirming payment...");
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: formData.fullName,
                        email: formData.email,
                        address: {
                            line1: formData.address,
                            postal_code: formData.pincode,
                            city: formData.city,
                            state: formData.state,
                            country: "IN",
                        },
                    },
                },
            }).catch(err => {
                console.error("Payment Error:", err);
                throw new Error("Payment confirmation failed.");
            });

            console.log("Payment Result:", result);
            if (result.error) {
                throw new Error(result.error.message);
            }

            if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setMessage("Payment successful! 🎉");
                setPaymentSuccess(true);
                toast.success("Order placed successfully! 🎉");
                clearCart();
            } else {
                throw new Error("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage(error.message || "Something went wrong. Please try again.");
            toast.error(error.message || "Payment failed. Please try again!");
        } finally {
            setLoading(false);
        }
    };


    if (!cart.length) {
        return <p className="text-center text-gray-700">No products in the cart. Please return to the cart page.</p>;
    }

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                Complete Your Payment
            </h1>

            <div className="mb-6 bg-white shadow rounded-lg p-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                {cart.map((product) => (
                    <div
                        key={product._id}
                        className="flex flex-wrap justify-between items-center mb-2 text-sm md:text-base"
                    >
                        <span className="text-gray-700">{product.name}</span>
                        <span className="font-semibold">
                            ₹{product.price} x {product.quantity} = ₹{product.price * product.quantity}
                        </span>
                    </div>
                ))}
                <div className="border-t pt-4 flex justify-between text-base md:text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-emerald-600">₹{total.toFixed(2)}</span>
                </div>
            </div>

            {!paymentSuccess ? (
                <form
                    onSubmit={handlePayment}
                    className="bg-white shadow rounded-lg p-4 md:p-6 space-y-4"
                >
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Payment Details</h2>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#32325d",
                                    "::placeholder": {
                                        color: "#a0aec0",
                                    },
                                },
                                invalid: {
                                    color: "#fa755a",
                                },
                            },
                        }}
                        className="border px-3 py-2 rounded-lg"
                    />

                    <button
                        type="submit"
                        disabled={loading || !stripe}
                        className={`w-full px-6 py-3 font-bold rounded-lg shadow-md transition text-sm md:text-base ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}
                    >
                        {loading ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
                    </button>

                </form>
            ) : (
                <div className="text-center space-y-4">
                    <div
                        className={`mt-4 p-4 rounded-lg ${message.includes("successful")
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {message}
                    </div>
                    <button
                        onClick={() => navigate("/shop")}
                        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition text-sm md:text-base"
                    >
                        Explore More Products
                    </button>
                </div>
            )}

            {message && !paymentSuccess && (
                <div
                    className={`mt-4 p-4 rounded-lg ${message.includes("successful")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default Payment;

