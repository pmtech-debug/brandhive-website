import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "../data/portfolioData";

interface PortfolioLightboxProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PortfolioLightbox({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: PortfolioLightboxProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[#12BDF7] transition"
      >
        <X size={34} />
      </button>

      {/* Previous */}
      <button
        onClick={onPrevious}
        className="absolute left-6 text-white hover:text-[#12BDF7] transition"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 text-white hover:text-[#12BDF7] transition"
      >
        <ChevronRight size={40} />
      </button>

      <div className="max-w-6xl w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
        />

        <div className="mt-6 text-center">
          <h2 className="text-white text-3xl font-bold">
            {project.title}
          </h2>

          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}