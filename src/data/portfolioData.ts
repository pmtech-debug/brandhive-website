export interface PortfolioItem {
  id: number;
  title: string;
  category: "brandhive" | "uzee" | "qdx";
  type: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  // ==========================
  // BRANDHIVE STUDIO
  // ==========================

  {
    id: 1,
    title: "Logo Design Collection",
    category: "brandhive",
    type: "Logo Design",
    image: "/assets/images/portfolio/brandhive/logo-design-01.jpg",
    description: "Professional logo design collection."
  },

  {
    id: 2,
    title: "Brand Identity System",
    category: "brandhive",
    type: "Brand Identity",
    image: "/assets/images/portfolio/brandhive/brand-identity-01.jpg",
    description: "Complete brand identity package."
  },

  {
    id: 3,
    title: "Website Design",
    category: "brandhive",
    type: "Website",
    image: "/assets/images/portfolio/brandhive/website-01.jpg",
    description: "Modern responsive website."
  },

  // ==========================
  // UZEE TECH
  // ==========================

  {
    id: 4,
    title: "iPhone Promotion",
    category: "uzee",
    type: "Social Media",
    image: "/assets/images/portfolio/uzee/iphone-01.jpg",
    description: "Premium social media advertisement."
  },

  {
    id: 5,
    title: "Samsung Campaign",
    category: "uzee",
    type: "Social Media",
    image: "/assets/images/portfolio/uzee/samsung-01.jpg",
    description: "Creative advertising campaign."
  },

  {
    id: 6,
    title: "Accessories Promotion",
    category: "uzee",
    type: "Promotion",
    image: "/assets/images/portfolio/uzee/accessories-01.jpg",
    description: "Mobile accessories campaign."
  },

  // ==========================
  // QDX EXPRESS
  // ==========================

  {
    id: 7,
    title: "Courier Promotion",
    category: "qdx",
    type: "Marketing",
    image: "/assets/images/portfolio/qdx/qdx-01.jpg",
    description: "Courier marketing campaign."
  },

  {
    id: 8,
    title: "International Shipping",
    category: "qdx",
    type: "Advertisement",
    image: "/assets/images/portfolio/qdx/qdx-02.jpg",
    description: "International shipping campaign."
  },

  {
    id: 9,
    title: "Facebook Campaign",
    category: "qdx",
    type: "Social Media",
    image: "/assets/images/portfolio/qdx/qdx-03.jpg",
    description: "Facebook promotional campaign."
  }
];