import { motion } from "motion/react";
import { useState, useRef } from "react";

const works = [
  {
    id: 1,
    title: "The promise",
    category: "Wedding",
    media: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000",
    type: "image",
    link: "https://www.instagram.com/reel/DUzhfTvE2G7/?igsh=MXFudWY2d29xcW5jdQ==",
  },
  {
    id: 2,
    title: "The bride's",
    category: "Fashion",
    media: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000", 
    type: "image",
    link: "https://www.instagram.com/reel/DWwIf8Uzhxj/?igsh=MWZnamFvcG41bGR1OA==",
  },
  {
    id: 3,
    title: "Union Vibes",
    category: "Event",
    media: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    type: "image",
    link: "https://www.instagram.com/reel/DWTYVIiE2Mk/?igsh=MWt5dW5kc3RiMnE5cQ==",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-6 px-6 md:px-12 bg-bg-primary">
      <div className="mb-10 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary mb-4 block">Visual Projects Collective</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-light tracking-tighter text-white uppercase italic leading-[0.9]">
          My Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {works.map((work) => (
          <motion.a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative overflow-hidden bg-[#1a1a1a] editorial-border aspect-[9/16] cursor-pointer block"
          >
            <div className="absolute inset-x-0 bottom-0 p-10 z-20 bg-gradient-to-t from-bg-primary/80 to-transparent">
              <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] mb-2 block font-semibold">
                {work.category}
              </span>
              <h3 className="text-2xl font-display italic font-light tracking-tight text-white group-hover:underline underline-offset-4 decoration-1">
                {work.title}
              </h3>
            </div>
            
            {work.type === 'video' ? (
              <video
                src={work.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <img
                src={work.media}
                alt={work.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
