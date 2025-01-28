import { React, useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useAuth } from '../store/Auth'
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const navigate = useNavigate()
  const { storeTokenInLs, API } = useAuth()

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        storeTokenInLs(data.token); // Update the token in Auth context
        navigate("/"); // Redirect to home or another page
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again.");
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
      toast.success("Registration Successful")
      navigate("/")
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Sign-In failed. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-purple-100 p-4 md:p-10">
        <div className="md:w-1/2 w-full bg-purple-100 flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Welcome to Humayoo
            </h2>
            <h2 className="text-3xl font-bold text-purple-500 mb-4">
              Start Online Shopping Journey Now!
            </h2>
            <ul className="text-purple-600 space-y-2">
              <li>✔ Over 500+ Categories</li>
              <li>✔ 50000+ Quality Products</li>
              <li>✔ Easy Return</li>
              <li>✔ Fast Delivery</li>
              <li>✔ Up to 30% off on first order</li>
              <li>✔ No delivery extra charge on first order</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-white p-8 shadow-lg rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">
            Create an account
          </h2>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                name="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2 focus:outline-none focus:border-purple-500 sm:text-sm p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                name="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2 focus:outline-none focus:border-purple-500 sm:text-sm p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2 focus:outline-none focus:border-purple-500 sm:text-sm p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2 focus:outline-none focus:border-purple-500 sm:text-sm p-2"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-purple-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223a11.024 11.024 0 0116.044 0m-16.044 0A11.049 11.049 0 0012 16.5c2.66 0 5.06-.975 6.994-2.778m-16.014-.022c-.158.149-.311.3-.457.456m1.414 1.415c.146-.145.297-.287.457-.434m14.995.002a11.058 11.058 0 01-6.994 2.777c-2.66 0-5.06-.975-6.994-2.778"
                      />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5c4.969 0 9.388 3.134 10.883 7.5a11.049 11.049 0 01-21.766 0A11.049 11.049 0 0112 4.5z"
                      />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md shadow hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <p>Already have an account ?
              <Link to="/login" className="text-purple-600 font-bold hover:underline hover:text-purple-500"> Login</Link>
            </p>
            <p className="text-purple-600">or</p>
            <button
              className="w-full mt-2 flex items-center justify-center bg-white border border-gray-300 py-2 rounded-md shadow text-purple-600 hover:bg-gray-100 transition"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://shorturl.at/iC0A1"
                alt="Google Logo"
                className="h-5 w-5 mr-2 rounded-full"
              />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
