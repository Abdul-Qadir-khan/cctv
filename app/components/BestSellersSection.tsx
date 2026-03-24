"use client";

import Link from "next/link";
import { products } from "../../data/product"; // Product data
import Button from "../components/Button"; // Assuming Button component exists

export default function BestSellersSection() {
  // Filtering products that have the bestSeller flag set to true
  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
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

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              {/* Product Image */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={product.images?.[0]} // Primary image
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Brand / Category Name */}
                {product.brand?.name && (
                  <div className="text-sm text-gray-600 font-semibold mb-2">
                    {product.brand.name}
                  </div>
                )}

                {/* Product Name (Clickable with Underline on Hover) */}
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 ease-in-out hover:underline">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    <span className="text-accent font-semibold text-lg">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Product Button */}
              <Link href={`/products/${product.slug}`}>
                <Button variant="primary" className="px-8 py-3 text-lg mb-3 ml-3">
                  View Product
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Optional: View All Products Button */}
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="primary" className="px-10 py-3 text-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}