"use client";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    name: "Men's T-Shirt",
    category: "T-Shirt",
    image:
      "/images/categories/mens-wear.avif",
    price: "₹799",
  },
  {
    name: "Slim Fit Jeans",
    category: "Pants",
    image:
      "/images/categories/womens-wear.avif",
    price: "₹1,499",
  },
  {
    name: "Casual Hoodie",
    category: "Hoodies",
    image:
      "/images/categories/kids-wear.avif",
    price: "₹1,199",
  },
];

export default function ClothingProductsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-100 text-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div>
            <p className="text-orange-600 uppercase tracking-widest text-sm mb-3">
              Latest Arrivals
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Trendy <span className="text-orange-600">Fashion</span> for Every Style
            </h2>
          </div>
          <button className="mt-6 lg:mt-0 bg-orange-600 hover:bg-orange-700 transition px-8 py-4 font-semibold rounded-lg text-white">
            View All Products →
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl bg-[#F8F8F8] transition-all duration-500 hover:scale-105 transform">
            <Image
              src={products[active].image}
              alt={products[active].name}
              fill
              sizes="1000"
              className="object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-gray-300">{products[active].category}</p>
              <h3 className="text-3xl font-bold text-white">{products[active].name}</h3>
              <p className="text-lg text-orange-600">{products[active].price}</p>
            </div>
          </div>

          {/* Product Selector */}
          <div className="space-y-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => setActive(idx)}
                className={`p-6 cursor-pointer rounded-lg border transition duration-300 ease-in-out
                  ${active === idx ? "bg-orange-600 text-white border-orange-600" : "border-gray-300 hover:bg-gray-200"}`}
              >
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-400 text-sm">{product.price}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}