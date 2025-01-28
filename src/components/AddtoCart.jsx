import { React, useEffect } from "react";
import { useCart } from "../store/AddToCartContext";
import { useNavigate } from "react-router-dom";

function AddToCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, updateQuantity, removeFromCart } = useCart();
  const DISCOUNT_PERCENTAGE = 10;

  const calculateSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const subtotal = calculateSubtotal();
  const discount = (subtotal * DISCOUNT_PERCENTAGE) / 100;
  const total = subtotal - discount;

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/user-address", { state: { cart, total } });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(({ _id, image, name, price, quantity }) => (
            <div
              key={_id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                  <p className="text-sm text-gray-500">₹{price} per item</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(_id, quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-2 text-lg font-semibold">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(_id, quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-semibold">₹{price * quantity}</p>
                <button
                  className="text-red-500 text-sm mt-2 px-3 py-1 border border-red-500 rounded-full transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-md active:scale-95"
                  onClick={() => removeFromCart(_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 space-y-2 text-right">
            <p className="text-gray-700">
              Subtotal: <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </p>
            <p className="text-gray-700">
              Discount ({DISCOUNT_PERCENTAGE}%): <span className="font-semibold">₹{discount.toFixed(2)}</span>
            </p>
            <p className="text-xl font-extrabold text-gray-800">
              Total Payable: ₹{total.toFixed(2)}
            </p>
          </div>

          <div className="text-center mt-6">
            <button
              className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;

