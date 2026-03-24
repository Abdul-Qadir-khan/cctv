


"use client";

import Image from "next/image"; // Import next/image for optimized images
import { Product, products } from "../../data/product"; // ✅ import products and type
import { ShoppingCart, Heart } from "lucide-react"; // Importing the icons
import Button from "./Button";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Define ProductSectionProps interface
interface ProductSectionProps {
  filteredProducts?: Product[];
}

export default function BestSellersSection({ filteredProducts }: ProductSectionProps) {
  const initialLimit = 4;

  // Use filteredProducts if passed, otherwise fallback to all products
  const initialProducts = filteredProducts?.slice(0, initialLimit) || products.slice(0, initialLimit);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(initialProducts);

  const loadMoreProducts = () => {
    const currentLength = visibleProducts.length;
    const nextProducts = (filteredProducts || products).slice(currentLength, currentLength + initialLimit);
    setVisibleProducts(prev => [...prev, ...nextProducts]);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="md:max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center md:mb-16 mb-6">
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            Best Sellers
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 md:leading-tight leading-tighter text-gray-900">
            Our Most Popular Products
            <span className="block text-gray-400 text-lg md:text-xl mt-2 font-medium">
              Shop the best-selling items loved by our customers
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 bg-[#f0eeed]">
                <Image
                  src={product.images[0]} // Primary image
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0 group-hover:scale-110"
                  loading="lazy" // Lazy load images
                />
                {/* Second Image on Hover */}
                {product.images[1] && (
                  <Image
                    src={product.images[1]} // Secondary image for hover effect
                    alt={product.name}
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy" // Lazy load images
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {/* Product Rating (Stars) */}
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-${index < product.rating ? "yellow" : "gray"}-500`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{product.rating}/5</span>
                </div>
                <p className="mt-3 text-xl font-semibold text-gray-900">${product.price}</p>
              </div>

              {/* Hover Icons */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Wishlist Icon */}
                <button className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-gray-100 hover:text-red-500">
                  <Heart size={24} />
                </button>
                {/* Add to Cart Icon */}
                <button className="p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/80 hover:text-yellow-500">
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts.length < (filteredProducts || products).length && (
          <div className="mt-12 text-center">
            <Button variant="primary" className="px-10 py-3 text-lg" onClick={loadMoreProducts}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}