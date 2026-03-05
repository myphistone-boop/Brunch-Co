import React from 'react';
import { Phone, MapPin, Send, Calendar, Clock as ClockIcon, Users, Clock } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre demande de réservation a été envoyée. Nous vous contacterons sous peu pour confirmer.');
  };

  return (
    <div className="pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Contact</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h1 className="text-6xl font-serif italic mb-6">Nous <span className="text-primary">Contacter</span></h1>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg">
            Une question, une suggestion ou une réservation spéciale ? Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl flex items-center gap-5 border border-black/5 shadow-lg"
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
              className="bg-white p-8 rounded-3xl flex items-center gap-5 border border-black/5 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-1">Notre Adresse</h3>
                <p className="text-dark/80 font-medium text-base">123 Avenue des Saveurs, 75001 Paris</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark text-white p-8 rounded-3xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-primary">
                  <Clock size={22} />
                  Horaires d'ouverture
                </h3>
                <ul className="space-y-4">
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
              </div>
            </motion.div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-black/5"
            >
              <h2 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                <Calendar size={28} className="text-primary" />
                Réserver une Table
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Téléphone</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-2">
                      <ClockIcon size={14} className="text-primary" /> Heure
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer"
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
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-2">
                      <Users size={14} className="text-primary" /> Personnes
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer"
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n > 1 ? 'Personnes' : 'Personne'}</option>
                      ))}
                      <option value="9+">9+ Personnes</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wider">Demandes Spéciales (Optionnel)</label>
                  <textarea
                    rows={4}
                    placeholder="Allergies, anniversaire, préférence de table..."
                    className="w-full bg-cream border border-black/10 py-4 px-5 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none outline-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                >
                  Confirmer la Réservation
                  <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <p className="text-center text-dark/40 text-sm">
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
