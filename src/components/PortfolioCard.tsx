import type { PortfolioItem } from "../data/portfolioData";

interface PortfolioCardProps {
  project: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({
  project,
  onClick,
}: PortfolioCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

        <div className="absolute bottom-4 left-4">
          <span className="bg-[#12BDF7] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}