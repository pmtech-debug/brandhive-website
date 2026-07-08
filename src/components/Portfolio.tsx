import { useMemo, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import PortfolioLightbox from "./PortfolioLightbox";
import { portfolioItems } from "../data/portfolioData";

const categories = [
  { id: "all", label: "All" },
  { id: "brandhive", label: "BrandHive Studio" },
  { id: "uzee", label: "UZEE TECH" },
  { id: "qdx", label: "QDX Express" },
] as const;

export default function Portfolio() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    if (category === "all") return portfolioItems;
    return portfolioItems.filter(p => p.category === category);
  }, [category]);

  const current = selected !== null ? filtered[selected] : null;

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % filtered.length);
  };

  const previous = () => {
    if (selected === null) return;
    setSelected((selected - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sky-500 font-semibold uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Portfolio
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore our latest branding, website and marketing projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => {
                setCategory(c.id);
                setVisible(6);
              }}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                category === c.id
                  ? "bg-sky-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(0, visible).map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>

        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600"
            >
              Load More
            </button>
          </div>
        )}

        <PortfolioLightbox
          isOpen={selected !== null}
          project={current}
          onClose={() => setSelected(null)}
          onNext={next}
          onPrevious={previous}
        />
      </div>
    </section>
  );
}
