const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-serif text-gray-900 mb-4 tracking-tight animate-fade-in">
            LENORA
          </h1>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light animate-fade-in-delay">
          Timeless Elegance & Modern Luxury
        </p>
        <p className="text-lg text-gray-600 mb-12 animate-fade-in-delay-2">
          Discover our curated collection of premium bags, purses & jewelry
        </p>

        <button
          onClick={() => onNavigate('shop')}
          className="px-10 py-4 bg-gray-900 text-white font-semibold text-lg hover:bg-amber-600 transition-all duration-300 flex items-center gap-3 mx-auto group animate-fade-in-delay-3"
        >
          Enter Store
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>

        {/* Stats */}
        <div className="mt-20 flex justify-center gap-12 text-center animate-fade-in-delay-4">
          <div>
            <div className="text-4xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="w-px bg-gray-300"></div>
          <div>
            <div className="text-4xl font-bold text-gray-900">50K+</div>
            <div className="text-sm text-gray-600">Customers</div>
          </div>
          <div className="w-px bg-gray-300"></div>
          <div>
            <div className="text-4xl font-bold text-gray-900">4.9★</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
export default Home