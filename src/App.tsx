/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[80px_1fr_360px] lg:h-screen w-full bg-bg-primary overflow-hidden">
      {/* Sidebar / Navbar - Horizontal on mobile, Vertical Rail on Desktop */}
      <aside className="border-b lg:border-r border-border-subtle shrink-0 z-50">
        <Navbar />
      </aside>

      {/* Main Content Area - Independently scrollable on desktop */}
      <main className="flex-1 border-r border-border-subtle overflow-y-auto overflow-x-hidden scroll-smooth">
        <Hero />
        <Portfolio />
        <About />
        <Footer />
      </main>

      {/* Right Sidebar - Info & Contact - Independently scrollable on desktop */}
      <aside className="lg:w-[360px] bg-bg-secondary overflow-y-auto overflow-x-hidden scroll-smooth">
        <Services />
        <Contact />
      </aside>
    </div>
  );
}
