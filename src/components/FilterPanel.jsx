import React, { useState } from "react";

const FilterPanel = ({ onApplyFilters, onSearch }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const categories = ["Electronics", "Clothing", "Accessories", "Books"];

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value, 10)]);
    };

    const applyFilters = () => {
        onApplyFilters({ categories: selectedCategories, priceRange });
        setIsMobileFilterOpen(false);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <>
            {/* Toggle Button for Mobile */}
            <button
                className="md:hidden fixed top-16 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105"
                onClick={() => setIsMobileFilterOpen((prev) => !prev)}
            >
                {isMobileFilterOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4.5h18M6 9h12M9 13.5h6M12 18h0"
                        />
                    </svg>
                )}
            </button>

            {/* Mobile Filter Panel */}
            <div
                className={`fixed inset-0 z-40 bg-white p-6 shadow-lg transform ${isMobileFilterOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                    } transition-all duration-300 ease-in-out`}
            >
                <p className="text-2xl text-emerald-500 text-center font-bold mt-10">Filter</p>

                <div className="mb-6 mt-6">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    {categories.map((category) => (
                        <div key={category} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span className="ml-2">{category}</span>
                            </label>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <p>Up to ₹{priceRange[1]}</p>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                </div>

                <button
                    onClick={applyFilters}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full transition-colors"
                >
                    Apply Filters
                </button>
            </div>

            {/* Desktop Filter Panel */}
            <div className="hidden md:block w-1/4 bg-gray-50 p-4 shadow-lg">
                <p className="text-2xl text-emerald-500 text-center font-bold mb-5">Filter</p>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    {categories.map((category) => (
                        <div key={category} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span className="ml-2">{category}</span>
                            </label>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <p>Up to ₹{priceRange[1]}</p>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                </div>

                <button
                    onClick={applyFilters}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </>
    );
};

export default FilterPanel;
