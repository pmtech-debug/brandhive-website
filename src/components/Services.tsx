import { useEffect, useRef } from 'react';
import {
  Hexagon, PenTool, Layers, Smartphone, Share2, Megaphone, Printer, BarChart2
} from 'lucide-react';

const services = [
  {
    icon: Hexagon,
    title: 'Brand Identity',
    desc: 'We craft cohesive brand identities that define who you are — from visual language to tone of voice.',
    color: 'from-blue-50 to-cyan-50',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    desc: 'Distinctive, timeless logos that make a powerful first impression and leave a lasting mark.',
    color: 'from-sky-50 to-blue-50',
  },
  {
    icon: Layers,
    title: 'Graphic Design',
    desc: 'Compelling visuals for every touchpoint — marketing materials, presentations, and more.',
    color: 'from-cyan-50 to-teal-50',
  },
  {
    icon: Smartphone,
    title: 'Social Media Design',
    desc: 'Scroll-stopping content and templates designed specifically for each platform.',
    color: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Strategic social presence management to grow your audience and engagement consistently.',
    color: 'from-sky-50 to-cyan-50',
  },
  {
    icon: Megaphone,
    title: 'Meta Advertising',
    desc: 'Data-driven Facebook and Instagram ad campaigns designed to reach and convert your ideal audience.',
    color: 'from-blue-50 to-sky-50',
  },
  {
    icon: Printer,
    title: 'Print Design',
    desc: 'From business cards to banners — premium print-ready designs that make your brand tangible.',
    color: 'from-cyan-50 to-blue-50',
  },
  {
    icon: BarChart2,
    title: 'Marketing Strategy',
    desc: 'Holistic marketing strategies that align your brand vision with real business objectives.',
    color: 'from-sky-50 to-teal-50',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll');
            els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            What We Do
          </div>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Services That Drive Growth
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From brand identity to digital marketing — we offer end-to-end creative solutions
            tailored to take your business forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-on-scroll group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8 transition-all duration-400 cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2.5 text-base">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
