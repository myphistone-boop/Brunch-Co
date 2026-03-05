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

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20 items-center mb-6 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl aspect-video h-40 md:h-auto">
              <img
                src="https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Restau%20CUISNE.jpg"
                alt="Brunch&Co Kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl hidden md:block" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold/20 rounded-full hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-serif italic mb-3 md:mb-8 leading-tight">
              L'Équipe de Chef <span className="text-primary">Brunch&Co</span>
            </h2>
            <p className="text-dark/60 text-sm md:text-lg mb-3 md:mb-8 leading-relaxed font-serif italic">
              Formée dans les plus grandes cuisines étoilées de France, l'équipe de chef Brunch&Co a décidé de revenir à l'essentiel : une cuisine de terroir, sincère et généreuse.
            </p>

            {/* Mobile: collapsible second paragraph */}
            <div className="hidden md:block">
              <p className="text-dark/60 text-lg mb-12 leading-relaxed">
                Chez Brunch&Co, nous ne nous contentons pas de cuisiner ; nous célébrons chaque ingrédient. Notre équipe est composée de passionnés qui partagent une vision commune : offrir une expérience sensorielle complète, où chaque détail compte.
              </p>
            </div>
            <div className="md:hidden">
              {storyOpen && (
                <p className="text-dark/60 text-sm mb-3 leading-relaxed">
                  Chez Brunch&Co, nous ne nous contentons pas de cuisiner ; nous célébrons chaque ingrédient. Notre équipe est composée de passionnés qui partagent une vision commune : offrir une expérience sensorielle complète, où chaque détail compte.
                </p>
              )}
              <button
                onClick={() => setStoryOpen(!storyOpen)}
                className="text-primary text-xs font-bold flex items-center gap-1 mb-4"
              >
                {storyOpen ? 'Réduire' : 'En savoir plus'}
                <ChevronDown size={14} className={`transition-transform ${storyOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary">
                  <Award size={20} className="md:hidden" />
                  <Award size={24} className="hidden md:block" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Distinction</div>
                  <div className="font-bold text-sm md:text-base">Maître Restaurateur</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary">
                  <Star size={20} className="md:hidden" />
                  <Star size={24} className="hidden md:block" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Avis</div>
                  <div className="font-bold text-sm md:text-base">4.9/5 Étoiles</div>
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
