const ProductCard = ({ product, onAddToCart }) => {

    return (
        <div className="border rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:shadow-xl hover:scale-105 bg-white relative overflow-hidden">
            <div className="relative overflow-hidden rounded">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {product.freeDelivery && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                        Free Delivery
                    </span>
                )}
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-500 line-through">₹{product.originalPrice}</p>
                    <p className="text-green-500 font-bold text-lg">₹{product.price}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Color:</span> {product.color}
                </p>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 focus:ring-4 focus:ring-blue-300" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
