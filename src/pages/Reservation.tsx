import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Send, Phone, MapPin } from 'lucide-react';

const Reservation = () => {
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
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Réserver une Table</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Un Moment <span className="text-primary">D'Exception</span></h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg">
            Réservez votre table pour une expérience culinaire inoubliable au cœur de Paris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info & Image */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-black/5"
            >
              <h3 className="text-xl font-bold mb-5">Informations</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-dark/40">Téléphone</div>
                    <div className="text-base font-bold">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-dark/40">Adresse</div>
                    <div className="text-base font-bold">123 Avenue des Saveurs, 75001 Paris</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <h4 className="text-sm font-bold mb-3">Horaires d'ouverture</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm">
                      <span className="font-medium text-dark/70">Lun - Ven</span>
                      <span className="font-bold text-primary">09:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="font-medium text-dark/70">Samedi</span>
                      <span className="font-bold text-primary">10:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="font-medium text-dark/70">Dimanche</span>
                      <span className="font-bold text-primary">10:00 - 21:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img loading="lazy"
                src="https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Private-Dining1-800x800.png"
                alt="Salle privée du restaurant"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-primary">Ambiance</p>
                <h4 className="text-xl font-serif italic">Élégance & Confort</h4>
              </div>
            </motion.div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-black/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Téléphone</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
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
                      className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Heure
                    </label>
                    <select
                      required
                      className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer"
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
                      className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none cursor-pointer"
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
                    className="w-full bg-cream border border-black/10 py-3 px-4 rounded-xl text-dark placeholder:text-dark/40 focus:ring-2 focus:ring-primary/30 transition-all outline-none resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
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

export default Reservation;
