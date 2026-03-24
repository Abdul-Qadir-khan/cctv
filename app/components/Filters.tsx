"use client";

import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Example Categories */}
          <div className="relative">
            <Link href="/products/men">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/images/category-men.jpg" // Example image, use actual category images
                  alt="Men's Wear"
                  className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-semibold">Men's Wear</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/products/women">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/images/category-women.jpg" // Example image
                  alt="Women's Wear"
                  className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-semibold">Women's Wear</h3>
                </div>
              </div>
            </Link>
          </div>
          {/* Add more categories as needed */}
        </div>
      </div>
    </section>
  );
}