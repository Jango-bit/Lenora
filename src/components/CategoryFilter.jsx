// COMPONENT - CategoryFilter.jsx
const CategoryFilter = ({ selected, onChange }) => {
  const categories = ['All', 'Bags', 'Purses', 'Jewelry'];

  return (
    <div className="flex justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat.toLowerCase())}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selected === cat.toLowerCase()
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter