import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Clock, Award, Star, Users, ChevronDown } from 'lucide-react';

const About = () => {
  const [storyOpen, setStoryOpen] = React.useState(false);

  return (
    <div className="pt-20 md:pt-28 pb-6 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gold">Notre Histoire</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
          </div>
          <h1 className="text-3xl md:text-6xl font-serif italic mb-3 md:mb-6">L'Héritage de la <span className="text-primary">Passion</span></h1>
          <p className="text-dark/50 max-w-2xl mx-auto text-sm md:text-lg font-serif italic hidden md:block">
            "Une aventure culinaire commencée il y a 25 ans, guidée par l'amour du goût et le respect de la nature."
          </p>
        </div>

        {/* Story Section - Mobile: image + text side by side */}
        {/* Mobile layout */}
        <div className="md:hidden flex gap-3 items-start mb-4">
          <div className="w-28 h-36 rounded-xl overflow-hidden shadow-lg shrink-0">
            <img
              src="https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Restau%20CUISNE.jpg"
              alt="Brunch&Co Kitchen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-serif italic mb-2 leading-tight">
              L'Équipe de Chef <span className="text-primary">Brunch&Co</span>
            </h2>
            <p className="text-dark/60 text-xs leading-relaxed font-serif italic mb-2">
              Formée dans les plus grandes cuisines étoilées de France, l'équipe a décidé de revenir à l'essentiel : une cuisine de terroir, sincère et généreuse.
            </p>
            {storyOpen && (
              <p className="text-dark/60 text-xs leading-relaxed mb-2">
                Chez Brunch&Co, nous célébrons chaque ingrédient. Notre équipe partage une vision commune : offrir une expérience sensorielle complète.
              </p>
            )}
            <button
              onClick={() => setStoryOpen(!storyOpen)}
              className="text-primary text-[11px] font-bold flex items-center gap-1"
            >
              {storyOpen ? 'Réduire' : 'En savoir plus'}
              <ChevronDown size={12} className={`transition-transform ${storyOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile badges */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <Award size={16} />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-dark/40">Distinction</div>
              <div className="font-bold text-xs">Maître Restaurateur</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <Star size={16} />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-dark/40">Avis</div>
              <div className="font-bold text-xs">4.9/5 Étoiles</div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-20 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Restau%20CUISNE.jpg"
                alt="Brunch&Co Kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold/20 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif italic mb-8 leading-tight">
              L'Équipe de Chef <span className="text-primary">Brunch&Co</span>
            </h2>
            <p className="text-dark/60 text-lg mb-8 leading-relaxed font-serif italic">
              Formée dans les plus grandes cuisines étoilées de France, l'équipe de chef Brunch&Co a décidé de revenir à l'essentiel : une cuisine de terroir, sincère et généreuse.
            </p>
            <p className="text-dark/60 text-lg mb-12 leading-relaxed">
              Chez Brunch&Co, nous ne nous contentons pas de cuisiner ; nous célébrons chaque ingrédient. Notre équipe est composée de passionnés qui partagent une vision commune : offrir une expérience sensorielle complète, où chaque détail compte.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-dark/40">Distinction</div>
                  <div className="font-bold">Maître Restaurateur</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-dark/40">Avis</div>
                  <div className="font-bold">4.9/5 Étoiles</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
      </div>
    </div>
  );
};

export default About;
