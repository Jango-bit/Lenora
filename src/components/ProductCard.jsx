import { useState } from "react";
import { FiHeart as Heart } from "react-icons/fi"; // Heart icon
import { FiStar as Star } from "react-icons/fi";   // Star icon

const ProductCard = ({ product, onAddToCart }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">{product.rating}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 capitalize">{product.category}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
