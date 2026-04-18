import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create a neat summary of the inquiry
    const message = `Enquiry from Website:\nName: ${formData.name}\nEmail: ${formData.email}\nBrief: ${formData.message}`;
    
    // Copy to clipboard so the user can just paste it in the DM
    navigator.clipboard.writeText(message).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        window.open('https://www.instagram.com/shotsbyi6ffn?igsh=MXM4b3hsczh1Ymp2Yw==', '_blank');
        setIsCopied(false);
      }, 1000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
      window.open('https://www.instagram.com/shotsbyi6ffn?igsh=MXM4b3hsczh1Ymp2Yw==', '_blank');
    });
  };

  return (
    <section id="contact" className="p-8 bg-bg-secondary">
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary mb-6 block">New Inquiry</span>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-600 block">Full Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="NAME"
            className="w-full bg-transparent border-b border-white/20 rounded-none py-3 text-xs focus:outline-none focus:border-brand-accent transition-colors placeholder:text-zinc-800"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-600 block">Email Address</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="EMAIL"
            className="w-full bg-transparent border-b border-white/20 rounded-none py-3 text-xs focus:outline-none focus:border-brand-accent transition-colors placeholder:text-zinc-800"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-600 block">Project Brief</label>
          <textarea 
            rows={3}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="TELL US MORE"
            className="w-full bg-transparent border-b border-white/20 rounded-none py-3 text-xs focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-zinc-800"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] py-4 rounded-none hover:bg-brand-accent hover:text-white transition-all transform active:scale-[0.98]"
        >
          {isCopied ? "Summary Copied! Opening DM..." : "Proceed to DM"}
        </button>
      </form>

      <div className="mt-12 flex flex-col gap-4 opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex gap-6">
          <a href="https://instagram.com/shotsbyi6ffn" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-brand-accent">INSTAGRAM</a>
          <span className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-brand-accent">VIMEO</span>
        </div>
        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">
          DM FOR SHOOT: <span className="text-brand-accent tracking-widest">+91 99611 17006</span>
        </div>
      </div>
    </section>
  );
}
