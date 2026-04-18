import { Instagram, Youtube, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary py-10 px-10 md:px-20 border-t border-border-subtle">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
        <div className="text-[9px] uppercase tracking-widest font-bold">
          © 2026 MUHAMMED IRFAN — ALL RIGHTS RESERVED
        </div>
        <div className="text-[9px] uppercase tracking-widest font-bold">
          CRAFTED IN KERALA — INDIA
        </div>
      </div>
    </footer>
  );
}
