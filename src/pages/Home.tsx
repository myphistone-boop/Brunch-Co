import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ChevronLeft, ChevronRight, Leaf, ShieldCheck, Truck, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">L'Excellence Culinaire</span>
              <div className="h-[1px] w-12 bg-primary" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif italic font-medium leading-[1.1] mb-8 text-dark"
            >
              Brunch<span className="text-primary">&Co</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <Link to="/reservation" className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all transform hover:scale-105">
                Réserver une Table
              </Link>
              <Link to="/menu" className="bg-white border border-black/10 text-dark px-10 py-5 rounded-full font-bold hover:bg-dark hover:text-white transition-all transform hover:scale-105">
                Découvrir la Carte
              </Link>
            </motion.div>
          </div>

          {/* Bento Grid of Images - Replaces the "One Large Image" */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[500px]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Atmosphere" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-rows-2 gap-6 md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&h=400" 
                  alt="Chef at work" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&h=400" 
                  alt="Signature Dish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-1 rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&h=800" 
                alt="Brunch" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/50 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                  alt="Chef at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-white text-center">
                  <div className="text-5xl font-serif italic mb-2">25</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Années d'Excellence</div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold/20 rounded-full" />
            </motion.div>

            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Notre Histoire</span>
                <div className="h-[1px] w-12 bg-primary" />
              </div>
              <h2 className="text-5xl font-serif italic mb-8 leading-tight">
                La Passion du Goût, <br />
                Le Respect du <span className="text-primary">Produit</span>
              </h2>
              <p className="text-dark/60 text-lg mb-8 leading-relaxed font-serif italic">
                Fondé en 1998, Brunch&Co est né d'une idée simple : redonner ses lettres de noblesse à la cuisine de terroir. Notre chef, passionné par les saveurs oubliées, parcourt chaque semaine les marchés locaux pour dénicher les meilleurs produits de saison.
              </p>
              <p className="text-dark/60 text-lg mb-12 leading-relaxed">
                Chaque plat qui sort de notre cuisine est une célébration de l'artisanat culinaire. Nous croyons que la simplicité est la sophistication suprême, et c'est cette philosophie qui guide chacun de nos gestes.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-3xl font-serif italic text-primary mb-2">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-dark/40">Fait Maison</div>
                </div>
                <div>
                  <div className="text-3xl font-serif italic text-primary mb-2">Bio</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-dark/40">Certifié Local</div>
                </div>
              </div>

              <Link to="/a-propos" className="inline-flex items-center gap-3 text-dark font-bold group">
                <span className="border-b-2 border-primary pb-1">En savoir plus sur nous</span>
                <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Les Incontournables</span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h2 className="text-5xl font-serif italic mb-4">Nos Plats <span className="text-primary">Signatures</span></h2>
            <p className="text-dark/50 max-w-2xl mx-auto text-lg">
              Une sélection exclusive de créations culinaires qui font la renommée de notre établissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">{product.category}</p>
                      <h3 className="text-2xl font-serif italic mb-4">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">€{product.price}</span>
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center group-hover:opacity-0 transition-opacity duration-500">
                    <h3 className="text-2xl font-serif italic mb-2">{product.name}</h3>
                    <div className="text-primary font-bold">€{product.price}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-4 bg-dark text-white px-12 py-5 rounded-full font-bold hover:bg-dark/90 transition-all transform hover:scale-105 shadow-2xl"
            >
              Consulter la Carte Complète
              <ArrowRight size={20} className="text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Avis Clients</span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h2 className="text-5xl font-serif italic mb-4">Ce que l'on dit de <span className="text-primary">Brunch&Co</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "Une expérience inoubliable. Le ris de veau était tout simplement divin, et le service d'une élégance rare.",
                author: "Marie L.",
                role: "Critique Gastronomique"
              },
              {
                text: "Le brunch du dimanche est devenu notre rendez-vous incontournable. Les oeufs bénédictine sont à tomber !",
                author: "Thomas D.",
                role: "Client Fidèle"
              },
              {
                text: "On sent la passion du chef dans chaque bouchée. Les produits sont d'une fraîcheur exceptionnelle.",
                author: "Julie R.",
                role: "Passionnée de Cuisine"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl border border-black/5 relative"
              >
                <div className="text-primary text-6xl font-serif absolute top-6 left-8 opacity-20">“</div>
                <p className="text-dark/60 text-lg mb-8 leading-relaxed font-serif italic relative z-10">
                  {testimonial.text}
                </p>
                <div className="pt-6 border-t border-black/5">
                  <div className="font-bold text-dark">{testimonial.author}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Le Chef</span>
                <div className="h-[1px] w-12 bg-primary" />
              </div>
              <h2 className="text-5xl font-serif italic mb-6 leading-tight">
                L'Excellence au Bout <br />
                des <span className="text-primary">Doigts</span>
              </h2>
              <p className="text-dark/60 text-lg mb-8 leading-relaxed font-serif italic">
                "La cuisine est un langage par lequel on peut exprimer l'harmonie, le bonheur, la beauté, la poésie, la complexité, la magie, l'humour, la provocation, la culture."
              </p>
              <p className="text-dark/60 text-lg mb-8 leading-relaxed">
                L'équipe de chef Brunch&Co apporte des décennies d'expérience dans la haute gastronomie. Leur vision est simple : laisser le produit s'exprimer. En travaillant main dans la main avec nos producteurs, ils créent une carte qui évolue au rythme de la nature.
              </p>
              
              <div className="flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28dea15ee548?auto=format&fit=crop&w=100&q=80" 
                  alt="Signature" 
                  className="h-16 opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-serif italic text-xl">L'Équipe Brunch&Co</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Chef de Cuisine</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-video">
                <img 
                  src="https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Restau%20CUISNE.jpg" 
                  alt="L'Équipe Brunch&Co" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold/20 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-[4rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Réservation</span>
                <div className="h-[1px] w-12 bg-gold" />
              </div>
              <h2 className="text-5xl font-serif italic mb-6">Réservez votre Table <br /> pour ce Soir</h2>
              <p className="text-white/60 text-xl mb-8 max-w-2xl mx-auto font-serif italic">
                "Vivez une expérience gastronomique unique dans un cadre d'exception."
              </p>
              <Link
                to="/reservation"
                className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-2xl shadow-primary/40"
              >
                Réserver Maintenant
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
