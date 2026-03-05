import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, CheckCircle2, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = React.useState(1);

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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/menu" className="inline-flex items-center gap-2 text-dark/50 hover:text-primary transition-colors mb-12 font-medium">
          <ArrowLeft size={20} /> Retour au menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-lg">{product.rating.toFixed(1)}</span>
              <span className="text-dark/40 text-sm">(120+ avis)</span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {Array.isArray(product.category) ? product.category.join(' & ') : product.category}
              </span>
              <h1 className="text-5xl font-serif italic mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-primary">€{product.price.toFixed(2)}</div>
            </div>

            <p className="text-dark/60 text-lg leading-relaxed mb-10 font-serif italic">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3 text-dark/70">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Préparation</div>
                  <div className="font-serif italic text-lg">15-20 min</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-dark/70">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Portion</div>
                  <div className="font-serif italic text-lg">1 Personne</div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-serif italic text-xl mb-4 text-primary">Ingrédients</h3>
              <div className="flex flex-wrap gap-3">
                {product.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl text-sm font-serif italic border border-black/5 shadow-sm">
                    <CheckCircle2 size={16} className="text-primary" />
                    {ing}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/contact"
                className="flex-1 w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
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
