import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('hero-loaded'), 100);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(41,182,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(41,182,246,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={containerRef}
        className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto"
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.9s ease' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Creative Agency — Sri Lanka
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
          Building Brands
          <br />
          <span className="text-accent">That Get Noticed.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
          BrandHive Studio helps businesses grow through branding, graphic design,
          digital marketing and creative strategy.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPortfolio}
            className="group flex items-center gap-3 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-300 shadow-xl shadow-gray-900/20"
          >
            View Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-3 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent-500 active:scale-95 transition-all duration-300 shadow-xl shadow-accent/20"
          >
            Let's Talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      <style>{`
        .hero-loaded {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
