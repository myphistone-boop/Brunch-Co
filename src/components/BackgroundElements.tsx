import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Coffee, Pizza, Croissant } from 'lucide-react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Abstract Blobs */}
      <div className="blob w-[500px] h-[500px] bg-primary -top-20 -left-20" />
      <div className="blob w-[600px] h-[600px] bg-secondary -bottom-40 -right-20" />
      <div className="blob w-[400px] h-[400px] bg-yellow-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      {/* Floating Food Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] text-primary/20"
      >
        <Coffee size={48} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[8%] text-primary/10"
      >
        <Pizza size={64} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] text-primary/15"
      >
        <Croissant size={56} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%] text-primary/10"
      >
        <Utensils size={40} />
      </motion.div>

      {/* Faint Illustrations */}
      <div className="absolute top-[20%] right-[20%] opacity-[0.03] rotate-12">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 11h.01M11 15h.01M10 10h.01M14 14h.01M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-[30%] left-[25%] opacity-[0.03] -rotate-12">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M20 20L4 4m16 0L4 20M12 2v20M2 12h20"/>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundElements;
