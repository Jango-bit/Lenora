import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard"

const Shop = ({ products, onAddToCart }) => {
  const [category, setCategory] = useState('all');

  const filtered = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Collection</h2>
          <p className="text-gray-600">Discover our curated selection of luxury items</p>
        </div>

        <CategoryFilter selected={category} onChange={setCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shop