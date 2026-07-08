import { useEffect, useRef } from 'react';
import { Sparkles, Target, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'Creative Excellence',
    desc: 'Every project is crafted with intention, combining aesthetics and strategy to create work that stands out.',
  },
  {
    icon: Target,
    title: 'Purpose-Driven Design',
    desc: 'We design with a clear goal in mind — helping your brand communicate clearly and connect deeply.',
  },
  {
    icon: Zap,
    title: 'Results That Matter',
    desc: 'Beautiful design is meaningless without impact. We build brands that drive real business growth.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
            els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <div className="animate-on-scroll-left inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              About Us
            </div>
            <h2 className="animate-on-scroll-left text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              A Studio Built on
              <span className="text-accent"> Creative Passion</span>
            </h2>
            <p className="animate-on-scroll-left text-gray-500 text-lg leading-relaxed mb-6">
              BrandHive Studio is a creative branding and digital marketing studio focused on
              helping businesses look professional and grow through impactful design.
            </p>
            <p className="animate-on-scroll-left text-gray-500 text-lg leading-relaxed">
              We believe that great branding is the foundation of every successful business. Whether
              you're a startup finding your identity or an established company ready to evolve, we're
              here to craft a brand experience that resonates, converts, and endures.
            </p>
          </div>

          {/* Right - Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="animate-on-scroll-right group flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-400 bg-white"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <p.icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
