"use client";

import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

const products = [
  {
    name: "HD Dome CCTV Camera",
    image: "/images/dome-camera.webp",
    link: "/products/hd-cctv",
  },
  {
    name: "Bullet CCTV Camera",
    image: "/images/bullet-camera.webp",
    link: "/products/dvr-system",
  },
  {
    name: "Pole Mounted CCTV Camera",
    image: "/images/pole-camera.webp",
    link: "/products/video-door-phone",
  },
  {
    name: "Residential CCTV Camera",
    image: "/images/residential-camera.webp",
    link: "/products/biometric-access",
  },
  {
    name: "Wireless CCTV Camera",
    image: "/images/wireless-camera.webp",
    link: "/products/biometric-access",
  },
  {
    name: "Traffic Pole CCTV Camera",
    image: "/images/traffic-pole-camera.webp",
    link: "/products/biometric-access",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-8 md:py-12 px-6 md:px-12 bg-primary/5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Featured <span className="text-accent">Products</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Explore our best-selling security and surveillance products designed to protect your home and business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative w-full h-80">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover h-full"
                priority
              />
            </div>
            <div className="p-4 text-center space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <Link href={product.link}>
                <Button variant="accent" className="w-full py-3">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: View All Products Button */}
      <div className="mt-12 text-center">
        <Link href="/products">
          <Button variant="primary" className="px-10 py-3">
            View All Products
          </Button>
        </Link>
      </div>
    </section>
  );
}