"use client";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    name: "4K Dome Camera",
    category: "Camera",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "8 Channel NVR",
    category: "Recorder",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Industrial Power Supply",
    category: "Accessory",
    image:
      "https://images.unsplash.com/photo-1555617117-08c0b5a7e61e?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function CCTVAccessoriesPremium() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-primary text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div>
            <p className="text-[#FF6B00] uppercase tracking-widest text-sm mb-3">
              CCTV Accessories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Industrial Grade <span className="text-[#FF6B00]">Security Gear</span>
            </h2>
          </div>
          <button className="mt-6 lg:mt-0 bg-[#FF6B00] hover:bg-orange-600 transition px-8 py-4 font-semibold rounded-lg">
            View All Products →
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-lg bg-[#1C1C1C]">
            <Image
              src={products[active].image}
              alt={products[active].name}
              fill
              className="object-cover transition duration-500 scale-100 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-gray-300">{products[active].category}</p>
              <h3 className="text-3xl font-bold">{products[active].name}</h3>
            </div>
          </div>

          {/* Product Selector */}
          <div className="space-y-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => setActive(idx)}
                className={`p-6 cursor-pointer rounded-lg border transition duration-300
                  ${
                    active === idx
                      ? "bg-[#FF6B00]/10 border-l-4 border-[#FF6B00]"
                      : "border-gray-700 hover:bg-white/5"
                  }`}
              >
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-gray-400 text-sm">
                  Industrial-grade surveillance equipment
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}