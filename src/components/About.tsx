import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-8 px-10 md:px-20 bg-bg-primary border-t border-border-subtle">
      <div className="flex flex-col lg:flex-row items-start gap-20">
        <div className="w-full lg:w-1/2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary mb-6 block">Visionary Director</span>
          <h2 className="font-display text-5xl md:text-8xl font-light tracking-tighter text-white uppercase mb-10 leading-[0.9]">
            Behind The <br /> <span className="italic">Lens.</span>
          </h2>
          <div className="space-y-6 text-brand-primary/80 leading-relaxed text-sm font-light max-w-lg">
            <p>
              Muhammed Irfan is a Kerala-based Digital Creator specializing in Wedding, Events, and Fashion videography. I capture stories that live forever, whether through professional cinematic gear or the versatile lens of an iPhone.
            </p>
            <p>
              With a passion for visual narrative and post-production excellence, I help brands and couples preserve their most precious moments with a unique #shotoniphone aesthetic and cinematic craftsmanship.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-10 border-t border-border-subtle pt-10">
            <div>
              <p className="text-3xl font-display italic font-light text-white mb-2 tracking-tighter">71+</p>
              <p className="text-[9px] text-brand-secondary uppercase tracking-widest font-semibold">Visual Stories</p>
            </div>
            <div>
              <p className="text-3xl font-display italic font-light text-white mb-2 tracking-tighter">570+</p>
              <p className="text-[9px] text-brand-secondary uppercase tracking-widest font-semibold">Followers</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="aspect-[4/5] overflow-hidden editorial-border grayscale brightness-90 hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" 
              alt="Muhammed Irfan"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
