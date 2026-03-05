import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState('Tout');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const productCategories = Array.isArray(product.category) ? product.category : [product.category];
    const activeCategoryId = CATEGORIES.find(c => c.name === activeCategory)?.id;
    const matchesCategory = activeCategory === 'Tout' || productCategories.includes(activeCategoryId || '');
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 md:pt-28 pb-6 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gold">Notre Carte</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
          </div>
          <h1 className="text-3xl md:text-6xl font-serif italic mb-2 md:mb-6">Un Voyage <span className="text-primary">Culinaire</span></h1>
          <p className="text-dark/50 max-w-2xl mx-auto text-sm md:text-lg font-serif italic hidden md:block">
            "Chaque plat est une création unique, élaborée avec les meilleurs produits de saison."
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-8 mb-4 md:mb-6">
          {/* Mobile: horizontal scroll categories */}
          <div className="w-full overflow-x-auto scrollbar-hide md:overflow-visible">
            <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-4 pb-2 md:pb-0 min-w-max md:min-w-0">
              {['Tout', ...CATEGORIES.map(c => c.name)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all transform hover:scale-105 whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-xl shadow-primary/20'
                      : 'bg-white text-dark/60 hover:bg-black/5 border border-black/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-dark/30" size={18} />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-black/5 py-3 md:py-4 pl-10 md:pl-12 pr-4 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-10 md:py-20 text-center">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🍽️</div>
              <h3 className="text-2xl md:text-3xl font-serif italic mb-2">Aucun plat trouvé</h3>
              <p className="text-dark/50 font-serif italic text-sm md:text-base">Essayez de modifier vos filtres ou votre recherche.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
