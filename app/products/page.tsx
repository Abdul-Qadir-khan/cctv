"use client";

// import { motion } from "framer-motion";
import Button from "../components/Button";
import Feature from "../components/FeatureSection";
import Product from "../components/ProductChoose";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string; // optional for discount price
  brand: { name: string; logo: string };
  isNew?: boolean; // optional for "New" badge
};

const products: Product[] = [
  {
    id: 1,
    name: "HD CCTV Camera",
    description: "High-definition surveillance camera with night vision.",
    image: "/images/dome-camera.jpg",
    price: "$199",
    originalPrice: "$249",
    brand: {
      name: "SecureTech",
      logo: "/images/brands/cp-plus.png",
    },
    isNew: true,
  },
  {
    id: 2,
    name: "Smart DVR System",
    description: "Record and monitor your security seamlessly.",
    image: "/images/bullet-camera.jpg",
    price: "$349",
    originalPrice: "$399",
    brand: {
      name: "SecureTech",
      logo: "/images/brands/dahua.png",
    },
  },
  {
    id: 3,
    name: "Motion Sensor Alarm",
    description: "Detect motion instantly and get alerts in real-time.",
    image: "/images/pole-camera.jpg",
    price: "$129",
    brand: {
      name: "TechGuard",
      logo: "/images/brands/hikvision.png",
    },
  },
  {
    id: 4,
    name: "Wireless Security Camera",
    description: "Compact, easy-to-install wireless camera system.",
    image: "/images/residential-camera.jpg",
    price: "$179",
    originalPrice: "$209",
    brand: {
      name: "SecureTech",
      logo: "/images/brands/honeywell.png",
    },
    isNew: true,
  },
];

export default function ProductsPageWithBrands() {
  return (
    <>
      <section className="bg-black py-12"></section>
      <section className="w-full min-h-screen bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Explore
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-gray-900">
              Featured Products
              <span className="block text-gray-400 text-lg md:text-xl mt-2 font-medium">
                Premium CCTV & Security Systems
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg leading-relaxed">
              Browse our top-of-the-line security products designed to protect your home or business. Each product is carefully selected for reliability and performance.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay linear */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Brand Logo */}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md z-10">
                    <img
                      src={product.brand.logo}
                      alt={product.brand.name}
                      className="w-10 h-10 object-contain"
                      draggable={false}
                    />
                  </div>

                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                      New
                    </div>
                  )}

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-gray-200 text-sm mt-1">{product.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        {product.originalPrice && (
                          <span className="line-through text-gray-400 text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-accent font-bold text-lg">
                          {product.price}
                        </span>
                      </div>
                      <button
                        onClick={() => alert(`Added ${product.name} to cart!`)}
                        className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transform transition-transform"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Feature />
      <Product />
    </>

  );
}