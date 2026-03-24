"use client";

import { FC } from "react"; // FC (Functional Component) from React

// Define the props type to accept the filterProducts function
interface CategoriesSectionProps {
  filterProducts: (category: string) => void; 
}

const CategoriesSection: FC<CategoriesSectionProps> = ({ filterProducts }) => {
  const categories = [
    { name: "Men's Wear", image: "/images/category-men.jpg", slug: "mens-wear" },
    { name: "Women's Wear", image: "/images/category-women.jpg", slug: "womens-wear" },
    { name: "Accessories", image: "/images/category-accessories.jpg", slug: "accessories" },
    { name: "Footwear", image: "/images/category-footwear.jpg", slug: "footwear" },
    { name: "All", image: "/images/category-all.jpg", slug: "all" }, // "All" category for showing all products
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-primary/5">
      <div className="md:max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center md:mb-10 mb-4">
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            Choose Your Style
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 md:leading-tight leading-tighter text-gray-900">
            Select a Category
            <span className="block text-gray-400 text-lg md:text-xl mt-2 font-medium">
              Browse through our curated categories
            </span>
          </h2>
        </div>

        {/* Categories Horizontal Scrolling */}
        <div className="overflow-x-auto scrollbar-hide mx-auto flex justify-center">
          <div className="flex space-x-8 py-6">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="relative flex flex-col items-center group"
              >
                {/* Category Image Circle */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg transition-all duration-500 group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"  // Lazy load images for better performance
                  />
                  {/* Category Name Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>

                {/* Button below the image */}
                <div className="mt-4">
                  <button
                    className="px-8 py-3 text-lg hover:bg-accent hover:text-white transition duration-300 ease-in-out"
                    onClick={() => filterProducts(category.slug)} // Call filterProducts with category slug
                  >
                    View {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;