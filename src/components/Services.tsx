import { motion } from "motion/react";
import { Camera, Film, Scissors, Smartphone } from "lucide-react";

const services = [
  {
    title: "Wedding Videography",
    description: "Capturing the magic of your special day with a cinematic touch.",
    icon: Film,
    price: "DM FOR QUOTE",
  },
  {
    title: "Event Coverage",
    description: "Professional coverage for corporate events, concerts, and parties.",
    icon: Scissors,
    price: "DM FOR QUOTE",
  },
  {
    title: "Fashion Films",
    description: "Dynamic and visually striking content for brands and designers.",
    icon: Camera,
    price: "DM FOR QUOTE",
  },
  {
    title: "iPhone Cinematics",
    description: "High-quality content shot entirely on iPhone. #shotoniphone",
    icon: Smartphone,
    price: "DM FOR QUOTE",
  },
];

export default function Services() {
  return (
    <section id="services" className="p-8 border-b border-border-subtle">
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary mb-6 block">Expertise</span>
      <ul className="space-y-0">
        {services.map((service, index) => (
          <li key={index} className="group py-4 border-b border-white/5 flex justify-between items-center transition-all">
            <div>
              <h3 className="text-sm font-display font-light text-white group-hover:italic transition-all">
                {service.title}
              </h3>
              <p className="text-[10px] text-brand-secondary uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {service.price}
              </p>
            </div>
            <span className="font-display italic text-xs text-brand-secondary">0{index + 1}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
