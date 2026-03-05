import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre message a été envoyé. Nous vous répondrons dès que possible.');
  };

  return (
    <div className="pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Contact</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h1 className="text-6xl font-serif italic mb-6">Nous <span className="text-primary">Contacter</span></h1>
          <p className="text-dark/50 max-w-2xl mx-auto text-lg font-serif italic">
            "Une question, une suggestion ou une réservation spéciale ? Notre équipe est à votre écoute."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Appelez-nous",
                info: "+33 1 23 45 67 89",
                icon: <Phone size={24} className="text-primary" />,
                bg: "bg-white"
              },
              {
                title: "Email",
                info: "contact@brunchandco.fr",
                icon: <Mail size={24} className="text-primary" />,
                bg: "bg-white"
              },
              {
                title: "Notre Adresse",
                info: "123 Avenue des Saveurs, 75001 Paris",
                icon: <MapPin size={24} className="text-primary" />,
                bg: "bg-white"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.bg} p-8 rounded-[2.5rem] flex items-start gap-6 border border-black/5 shadow-2xl shadow-black/5`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif italic text-xl mb-1">{item.title}</h3>
                  <p className="text-dark/60 font-serif italic">{item.info}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <h3 className="font-serif italic text-2xl mb-8 flex items-center gap-3 text-gold">
                  <Clock size={24} />
                  Horaires
                </h3>
                <ul className="space-y-6 text-white/60 font-serif italic">
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Lundi - Vendredi</span>
                    <span className="text-white">09:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Samedi</span>
                    <span className="text-white">10:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-white">10:00 - 21:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-black/5"
            >
              <h2 className="text-3xl font-serif italic mb-10 flex items-center gap-4">
                <MessageSquare size={32} className="text-primary" />
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Adresse Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jean@exemple.fr"
                      className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Sujet</label>
                  <select className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer outline-none">
                    <option>Réservation de Groupe</option>
                    <option>Question sur le Menu</option>
                    <option>Événement Privé</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark/60 ml-2 uppercase tracking-widest">Votre Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full bg-cream/50 border border-black/5 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all resize-none outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 group"
                >
                  Envoyer le Message
                  <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
