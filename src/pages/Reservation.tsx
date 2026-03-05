import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Send, Phone, Mail, MapPin } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
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
    <div className="pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Réserver une Table</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h1 className="text-6xl font-serif italic mb-6">Un Moment <span className="text-primary">D'Exception</span></h1>
          <p className="text-dark/50 max-w-2xl mx-auto text-lg font-serif italic">
            "Réservez votre table pour une expérience culinaire inoubliable au cœur de Paris."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info & Ambiance */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-black/5"
            >
              <h3 className="text-2xl font-serif italic mb-6">Informations</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-1">Téléphone</div>
                    <div className="text-xl font-bold">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-1">Email</div>
                    <div className="text-xl font-bold">reservation@brunchandco.fr</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-1">Notre Adresse</div>
                    <div className="text-xl font-bold">123 Avenue des Saveurs, 75001 Paris</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <h4 className="text-lg font-serif italic mb-4">Horaires d'Ouverture</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-sm">
                      <span className="font-bold">Lun - Ven</span>
                      <span className="font-bold text-primary">09:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="font-bold">Samedi</span>
                      <span className="font-bold text-primary">10:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="font-bold">Dimanche</span>
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
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1550966842-2849a28c0a28?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">Ambiance</p>
                <h4 className="text-2xl font-serif italic">Élégance & Confort</h4>
              </div>
            </motion.div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-black/5"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jean@exemple.fr"
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Heure
                    </label>
                    <select
                      required
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
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
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest flex items-center gap-2">
                      <Users size={14} className="text-primary" /> Personnes
                    </label>
                    <select
                      required
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
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
                  <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Demandes Spéciales (Optionnel)</label>
                  <textarea
                    rows={4}
                    placeholder="Allergies, anniversaire, préférence de table..."
                    className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 group"
                >
                  Confirmer la Réservation
                  <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                
                <p className="text-center text-dark/40 text-sm italic">
                  * Nous vous enverrons un email de confirmation après vérification de nos disponibilités.
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
