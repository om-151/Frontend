import React, { useState, useEffect } from "react";
import { useCart } from "../store/AddToCartContext";
import FilterPanel from "./FilterPanel";
import ProductCard from "./ProductCard";
import { useAuth } from "../store/Auth"

const Shop = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPageProducts, setCurrentPageProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { API } = useAuth()

    const fetchAllProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API}/api/auth/products`);
            const data = await response.json();

            if (response.ok) {
                setAllProducts(data.products);
                setFilteredProducts(data.products);
            } else {
                setError(data.error || "Failed to fetch products");
            }
        } catch (err) {
            setError("An error occurred while fetching products.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
        setCurrentPageProducts(paginatedProducts);
        window.scrollTo(0, 0);
    }, [filteredProducts, currentPage]);


    const handleApplyFilters = (filters) => {
        const { categories, priceRange } = filters;
        const filtered = allProducts.filter((product) => {
            const matchesCategory =
                categories.length === 0 || categories.includes(product.category);
            const matchesPrice =
                product.price >= priceRange[0] && product.price <= priceRange[1];
            return matchesCategory && matchesPrice;
        });

        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handleSearch = (query) => {
        const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= Math.ceil(filteredProducts.length / itemsPerPage)) {
            setCurrentPage(page);
        }
    };

    if (loading) return <p className="text-center text-3xl min-h-screen font-bold">Loading products...</p>;
    if (error) return <p className="text-center text-red-500 text-3xl min-h-screen font-bold">{error}</p>;

    return (
        <>
            <p className="text-2xl text-emerald-500 text-center font-bold my-3">
                Humayoo's Products
            </p>
            <div className="flex flex-col md:flex-row">
                <FilterPanel onApplyFilters={handleApplyFilters} onSearch={handleSearch} />
                <div className="flex-1 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentPageProducts.length > 0 ? (
                            currentPageProducts.map((product) => (
                                <ProductCard key={product._id} product={product} onAddToCart={() => addToCart(product)} />
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">No products found.</p>
                        )}
                    </div>

                    {Math.ceil(filteredProducts.length / itemsPerPage) > 1 && (
                        <div className="flex justify-center items-center mt-6">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 border rounded ${currentPage === 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                            >
                                Previous
                            </button>
                            <span className="mx-4">
                                Page {currentPage} of {Math.ceil(filteredProducts.length / itemsPerPage)}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
                                className={`px-4 py-2 border rounded ${currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Shop;

