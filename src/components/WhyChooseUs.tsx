import { useEffect, useRef } from 'react';
import { Wand2, Award, Heart, Headphones, Brain, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Wand2,
    title: 'Creative Solutions',
    desc: 'We approach every challenge with fresh eyes, delivering creative solutions that are as innovative as they are effective.',
  },
  {
    icon: Award,
    title: 'Professional Quality',
    desc: 'Every deliverable meets the highest standard — pixel-perfect, print-ready, and built to impress.',
  },
  {
    icon: Heart,
    title: 'Client Focused',
    desc: 'Your goals are our goals. We listen deeply, collaborate closely, and put your success at the center of everything we do.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    desc: "We're with you beyond the handoff — available, responsive, and committed to your long-term success.",
  },
  {
    icon: Brain,
    title: 'Strategic Thinking',
    desc: 'Great design without strategy is decoration. We combine creative talent with strategic insight to deliver real impact.',
  },
  {
    icon: Zap,
    title: 'Modern Designs',
    desc: 'We stay ahead of design trends so your brand always looks contemporary, relevant, and compelling.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll');
            els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 100));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Why BrandHive
          </div>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Why Choose Us
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine creative mastery with strategic thinking to deliver brands
            that don't just look good — they work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="animate-on-scroll group p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/6 hover:-translate-y-1 transition-all duration-400 bg-white"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
