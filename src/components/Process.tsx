import { useEffect, useRef } from 'react';
import { Search, Lightbulb, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    desc: 'We start by deeply understanding your business, goals, audience, and competitive landscape to uncover what makes your brand unique.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategy',
    desc: 'Insights transform into a clear brand strategy — positioning, messaging, and a creative direction that guides every decision.',
  },
  {
    icon: Palette,
    step: '03',
    title: 'Design',
    desc: 'With strategy as our compass, we craft visuals that are not just beautiful but purposeful — designed to resonate and convert.',
  },
  {
    icon: Code2,
    step: '04',
    title: 'Develop',
    desc: 'We refine, iterate, and perfect every element based on your feedback until everything is exactly right.',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Launch',
    desc: 'Your brand goes live — delivered across all required formats and platforms, ready to make its mark in the market.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll');
            els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            How We Work
          </div>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-black text-white mb-5">
            Our Creative Process
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A proven 5-step process designed to transform your vision into a brand that performs.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="animate-on-scroll relative flex flex-col items-center text-center lg:items-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col items-center justify-center gap-1 group-hover:bg-accent transition-all duration-300">
                    <step.icon size={22} className="text-accent" />
                    <span className="text-accent text-xs font-bold">{step.step}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
