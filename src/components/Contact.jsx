import { React, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from "../store/Auth"

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handlechange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const { API } = useAuth()

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData(formData);
                const data = await response.json();
                console.log(data);
                toast.success("Form submitted successfully.");
            }

            setFormData({
                name: "",
                email: "",
                message: "",
            })
        } catch (error) {
            toast.error("Form not submitted.");
            console.log(error);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
        setLoading(false);
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: "url('https://shorturl.at/djJz2')" }}
        >
            <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-lg shadow-xl p-8 transition-transform transform duration-300">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Us</h2>
                <p className="text-blue-500 mb-6">
                    Have questions or need help? Fill out the form below and our team will get back to you!
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            autoComplete='off'
                            onChange={handlechange}
                            value={formData.name}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            autoComplete='off'
                            onChange={handlechange}
                            value={formData.email}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            name='message'
                            autoComplete='off'
                            onChange={handlechange}
                            value={formData.message}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
