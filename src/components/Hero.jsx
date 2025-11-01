
import { FiArrowRight as ArrowRight } from "react-icons/fi";
import Home from '../assets/Home.jpg'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Home}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h2 className="text-6xl md:text-8xl font-serif mb-6 animate-fade-in">
          LENORA
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in-delay">
          Timeless Elegance & Modern Luxury
        </p>
        <button className="px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group">
          Explore Collection
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default Hero