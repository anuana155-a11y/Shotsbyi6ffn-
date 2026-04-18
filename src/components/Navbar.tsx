import { motion } from "motion/react";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 lg:h-auto flex flex-row lg:flex-col justify-between items-center px-6 lg:px-4 lg:py-14 bg-bg-primary">
      <div className="font-display italic text-xl lg:text-2xl font-bold tracking-tighter text-white">
        S<span className="text-brand-accent">I</span>
      </div>
      
      <div className="hidden lg:flex flex-col gap-20">
        <div className="vertical-rail text-[9px] tracking-[0.4em] uppercase font-semibold text-brand-secondary whitespace-nowrap">
          ESTABLISHED MMXXIV — KERALA
        </div>
        <div className="vertical-rail text-[9px] tracking-[0.4em] uppercase font-semibold text-brand-secondary whitespace-nowrap">
          SHOTS BY I6FFN — VIDEOGRAPHY
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-6 items-center">
        <a href="https://instagram.com/shotsbyi6ffn" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
          <Instagram size={18} />
        </a>
      </div>
    </nav>
  );
}
