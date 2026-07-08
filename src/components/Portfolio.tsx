import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, FolderOpen } from 'lucide-react';

const DRIVE_URL = 'https://drive.google.com/drive/folders/1-EA_uh-U5IQ-f490FvFrc5shwIx74Ci9?usp=sharing';

const categories = [
  { id: 'brandhive', label: 'BrandHive Studio' },
  { id: 'uzee', label: 'UZEE TECH' },
  { id: 'qdx', label: 'QDX Express' },
];

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  tag: string;
}

const projects: Record<string, Project[]> = {
  brandhive: [
    {
      id: 1,
      name: 'Logo Design Collection',
      category: 'BrandHive Studio',
      tag: 'Logo Design',
      image: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Brand Identity System',
      category: 'BrandHive Studio',
      tag: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Facebook Campaign Posts',
      category: 'BrandHive Studio',
      tag: 'Facebook Posts',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: 'Instagram Content Series',
      category: 'BrandHive Studio',
      tag: 'Instagram Posts',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      name: 'Company Branding Package',
      category: 'BrandHive Studio',
      tag: 'Company Branding',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      name: 'Marketing Design Suite',
      category: 'BrandHive Studio',
      tag: 'Marketing Designs',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  uzee: [
    {
      id: 1,
      name: 'Smartphone Promotion',
      category: 'UZEE TECH',
      tag: 'Smartphone Promotions',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Accessories Campaign',
      category: 'UZEE TECH',
      tag: 'Accessories',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Social Media Posts',
      category: 'UZEE TECH',
      tag: 'Social Media Posts',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: 'Product Advertisement',
      category: 'UZEE TECH',
      tag: 'Product Advertisements',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      name: 'Store Promotion Series',
      category: 'UZEE TECH',
      tag: 'Store Promotions',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      name: 'Brand Identity Design',
      category: 'UZEE TECH',
      tag: 'Branding Designs',
      image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  qdx: [
    {
      id: 1,
      name: 'Courier Promotion',
      category: 'QDX Express',
      tag: 'Courier Promotions',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'International Shipping Ad',
      category: 'QDX Express',
      tag: 'International Shipping Ads',
      image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Service Promotion Pack',
      category: 'QDX Express',
      tag: 'Service Promotions',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: 'Facebook Posts Series',
      category: 'QDX Express',
      tag: 'Facebook Posts',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      name: 'Delivery Campaign',
      category: 'QDX Express',
      tag: 'Delivery Campaigns',
      image: 'https://images.pexels.com/photos/7810654/pexels-photo-7810654.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      name: 'Brand Advertisement',
      category: 'QDX Express',
      tag: 'Brand Advertisements',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={DRIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-on-scroll group relative block rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 70}ms` }}
      aria-label={`${project.name} — view in portfolio`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {!imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
            )}
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <FolderOpen size={32} className="text-gray-300" />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
          <div className="flex items-center gap-2 bg-white/95 text-gray-900 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
            <ExternalLink size={13} />
            View Project
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-white border-t border-gray-100">
        <span className="inline-block text-accent text-xs font-semibold tracking-wider uppercase mb-1.5">
          {project.tag}
        </span>
        <h3 className="text-gray-900 font-bold text-sm leading-snug group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('brandhive');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

  // Re-animate cards on category change
  useEffect(() => {
    if (!gridRef.current) return;
    const els = gridRef.current.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => el.classList.remove('visible'));
    setTimeout(() => {
      els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 70));
    }, 50);
  }, [activeCategory]);

  const handleCategoryChange = (id: string) => {
    if (id === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(id);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Our Work
          </div>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Portfolio
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            A curated selection of projects across branding, design, and digital marketing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-200 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {projects[activeCategory].map((project, i) => (
            <ProjectCard key={`${activeCategory}-${project.id}`} project={project} index={i} />
          ))}
        </div>

        {/* Google Drive CTA Section */}
        <div className="animate-on-scroll mt-20 md:mt-24">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 px-8 py-14 md:py-20 text-center">
            {/* Background pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, #29B6F6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #29B6F6 0%, transparent 50%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(41,182,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(41,182,246,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
                <FolderOpen size={13} />
                Complete Portfolio
              </div>

              <h3 className="text-white text-3xl md:text-4xl font-black mb-4 leading-tight">
                Explore Our Complete Portfolio
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Browse our complete collection of branding, logo design, graphic design,
                social media campaigns, marketing materials and client projects.
              </p>

              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent-500 active:scale-95 transition-all duration-300 shadow-xl shadow-accent/30 text-sm md:text-base"
              >
                View Complete Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <p className="text-gray-500 text-sm mt-6">
                Our portfolio is continuously updated with our newest client work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
