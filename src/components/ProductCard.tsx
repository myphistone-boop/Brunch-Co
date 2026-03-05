import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden card-shadow group"
    >
      {/* Mobile: compact horizontal layout */}
      <div className="md:hidden">
        <Link to={`/product/${product.id}`} className="flex gap-3 p-3">
          <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
              <Star size={10} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
            <div>
              <h3 className="font-serif italic text-base leading-tight mb-1 truncate">{product.name}</h3>
              <p className="text-dark/50 text-xs font-serif italic line-clamp-2">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-primary font-bold text-sm">€{product.price.toFixed(2)}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-dark/40 flex items-center gap-1">
                Détails <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop: original vertical layout */}
      <div className="hidden md:block">
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold">{product.rating.toFixed(1)}</span>
          </div>
        </Link>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif italic text-xl group-hover:text-primary transition-colors leading-tight">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <span className="text-primary font-bold ml-2">€{product.price.toFixed(2)}</span>
          </div>

          <p className="text-dark/50 text-sm font-serif italic line-clamp-2 mb-6">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-black/5">
            <Link
              to={`/product/${product.id}`}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark/40 hover:text-primary transition-colors group/btn"
            >
              Détails
              <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
