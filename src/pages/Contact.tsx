import React from 'react';
import { Phone, MapPin, Send, Calendar, Clock as ClockIcon, Users, Clock, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [hoursOpen, setHoursOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre demande de réservation a été envoyée. Nous vous contacterons sous peu pour confirmer.');
  };

  return (
    <div className="pt-20 md:pt-28 pb-6 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gold">Contact</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
          </div>
          <h1 className="text-3xl md:text-6xl font-serif italic mb-2 md:mb-6">Nous <span className="text-primary">Contacter</span></h1>
          <p className="text-dark/70 max-w-2xl mx-auto text-sm md:text-lg hidden md:block">
            Une question, une suggestion ou une réservation spéciale ? Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-3 md:space-y-6">
            {/* Mobile: compact row of phone + address */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              <motion.a
                href="tel:+33123456789"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 border border-black/5 shadow-sm text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-dark">Appelez-nous</h3>
                  <p className="text-dark/80 font-medium text-xs">+33 1 23 45 67 89</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 border border-black/5 shadow-sm text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-dark">Adresse</h3>
                  <p className="text-dark/80 font-medium text-[11px]">123 Av. des Saveurs, Paris</p>
                </div>
              </motion.div>
            </div>

            {/* Desktop: full cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex bg-white p-8 rounded-3xl items-center gap-5 border border-black/5 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-1">Appelez-nous</h3>
                <p className="text-dark/80 font-medium text-base">+33 1 23 45 67 89</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex bg-white p-8 rounded-3xl items-center gap-5 border border-black/5 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-1">Notre Adresse</h3>
                <p className="text-dark/80 font-medium text-base">123 Avenue des Saveurs, 75001 Paris</p>
              </div>
            </motion.div>

            {/* Hours: collapsible on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark text-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <button
                  onClick={() => setHoursOpen(!hoursOpen)}
                  className="md:pointer-events-none w-full flex items-center justify-between md:justify-start md:mb-6"
                >
                  <h3 className="text-sm md:text-lg font-bold flex items-center gap-2 md:gap-3 text-primary">
                    <Clock size={18} className="md:hidden" />
                    <Clock size={22} className="hidden md:block" />
                    Horaires d'ouverture
                  </h3>
                  <ChevronDown size={16} className={`md:hidden text-primary transition-transform ${hoursOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* Desktop: always show */}
                <ul className="hidden md:block space-y-4">
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/70 font-medium">Lundi - Vendredi</span>
                    <span className="text-white font-bold">09:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/70 font-medium">Samedi</span>
                    <span className="text-white font-bold">10:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/70 font-medium">Dimanche</span>
                    <span className="text-white font-bold">10:00 - 21:00</span>
                  </li>
                </ul>
                {/* Mobile: collapsible */}
                {hoursOpen && (
                  <ul className="md:hidden space-y-3 mt-3">
                    <li className="flex justify-between border-b border-white/10 pb-2 text-sm">
                      <span className="text-white/70">Lun - Ven</span>
                      <span className="text-white font-bold">09:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2 text-sm">
                      <span className="text-white/70">Samedi</span>
                      <span className="text-white font-bold">10:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-white/70">Dimanche</span>
                      <span className="text-white font-bold">10:00 - 21:00</span>
                    </li>
                  </ul>
                )}
              </div>
            </motion.div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border border-black/5"
            >
              <h2 className="text-lg md:text-2xl font-bold text-dark mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
                <Calendar size={22} className="text-primary md:hidden" />
                <Calendar size={28} className="text-primary hidden md:block" />
                Réserver une Table
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream border border-black/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all outline-none text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Téléphone</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full bg-cream border border-black/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all outline-none text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
                  <div className="col-span-2 md:col-span-1 space-y-1 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-1 md:gap-2">
                      <Calendar size={14} className="text-primary" /> Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-cream border border-black/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-1 md:gap-2">
                      <ClockIcon size={14} className="text-primary" /> Heure
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-black/10 py-3 md:py-4 px-3 md:px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Choisir...</option>
                      <option>12:00</option>
                      <option>12:30</option>
                      <option>13:00</option>
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-1 md:gap-2">
                      <Users size={14} className="text-primary" /> Personnes
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-black/10 py-3 md:py-4 px-3 md:px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n > 1 ? 'Pers.' : 'Pers.'}</option>
                      ))}
                      <option value="9+">9+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-xs font-bold text-dark uppercase tracking-wider">Demandes Spéciales (Optionnel)</label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, anniversaire..."
                    className="w-full bg-cream border border-black/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none outline-none text-sm md:text-base"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 md:py-5 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                >
                  Confirmer la Réservation
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <p className="text-center text-dark/40 text-xs md:text-sm">
                  * Nous vous contacterons pour confirmer votre réservation.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
