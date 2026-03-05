import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, CheckCircle2, Clock, Users, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = React.useState(1);
  const [ingredientsOpen, setIngredientsOpen] = React.useState(false);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Produit non trouvé</h2>
        <Link to="/menu" className="text-primary font-bold flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Retour au menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-32 pb-6 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/menu" className="inline-flex items-center gap-2 text-dark/50 hover:text-primary transition-colors mb-4 md:mb-12 font-medium text-sm md:text-base">
          <ArrowLeft size={18} /> Retour au menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-square rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-1.5 md:gap-2 shadow-lg">
              <Star size={16} className="text-yellow-400 fill-yellow-400 md:hidden" />
              <Star size={20} className="text-yellow-400 fill-yellow-400 hidden md:block" />
              <span className="font-bold text-sm md:text-lg">{product.rating.toFixed(1)}</span>
              <span className="text-dark/40 text-[10px] md:text-sm">(120+ avis)</span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-4 md:mb-8">
              <span className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">
                {Array.isArray(product.category) ? product.category.join(' & ') : product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif italic mb-2 md:mb-4">{product.name}</h1>
              <div className="text-2xl md:text-3xl font-bold text-primary">€{product.price.toFixed(2)}</div>
            </div>

            <p className="text-dark/60 text-sm md:text-lg leading-relaxed mb-4 md:mb-10 font-serif italic">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-10">
              <div className="flex items-center gap-2 md:gap-3 text-dark/70">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                  <Clock size={20} className="text-primary md:hidden" />
                  <Clock size={24} className="text-primary hidden md:block" />
                </div>
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Préparation</div>
                  <div className="font-serif italic text-sm md:text-lg">15-20 min</div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-dark/70">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                  <Users size={20} className="text-primary md:hidden" />
                  <Users size={24} className="text-primary hidden md:block" />
                </div>
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Portion</div>
                  <div className="font-serif italic text-sm md:text-lg">1 Personne</div>
                </div>
              </div>
            </div>

            {/* Ingredients: collapsible on mobile */}
            <div className="mb-4 md:mb-10">
              {/* Mobile: collapsible */}
              <button
                onClick={() => setIngredientsOpen(!ingredientsOpen)}
                className="md:hidden w-full flex items-center justify-between mb-2"
              >
                <h3 className="font-serif italic text-base text-primary">Ingrédients</h3>
                <ChevronDown size={16} className={`text-primary transition-transform ${ingredientsOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Desktop: always visible */}
              <h3 className="hidden md:block font-serif italic text-xl mb-4 text-primary">Ingrédients</h3>

              <div className={`${ingredientsOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-1.5 md:gap-2 bg-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-serif italic border border-black/5 shadow-sm">
                      <CheckCircle2 size={14} className="text-primary" />
                      {ing}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="flex-1 w-full bg-primary text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
              >
                Réserver une table
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
