import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[40vh] flex flex-col justify-start pt-8 lg:pt-12 p-8 lg:p-12 overflow-hidden border-b border-border-subtle bg-bg-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover transform scale-105 opacity-30 grayscale brightness-75 transition-opacity duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-slow-motion-of-a-woman-in-a-field-at-sunset-4202-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="block text-[10px] uppercase tracking-[0.3em] text-brand-secondary mb-6"
        >
          Visual Narrative — Kerala Based
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-7xl md:text-[120px] lg:text-[160px] leading-[0.85] font-light tracking-tighter text-white mb-6"
        >
          Muhammed<br />
          <span className="italic">Irfan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg text-[11px] md:text-xs uppercase tracking-widest leading-relaxed text-zinc-400 mb-8"
        >
          Seamlessly bridging the gap between high-end professional cinematic cameras and the intimate spontaneity of #shotoniphone narratives. Capturing stories that live forever.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 items-center border-t border-border-subtle pt-8"
        >
          <div className="text-[10px] uppercase tracking-widest text-brand-secondary">
            Director of Photography
          </div>
          <div className="text-[10px] uppercase tracking-widest text-brand-secondary">
            Fashion / Wedding / Events / iPhone Series
          </div>
          <a href="#work" className="text-[10px] uppercase tracking-widest font-bold text-brand-accent hover:underline underline-offset-4">
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
