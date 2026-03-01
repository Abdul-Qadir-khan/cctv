"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const accessories = [
  {
    id: 1,
    name: "Mounting Bracket",
    description: "Durable mount for CCTV cameras.",
    image: "/images/dome-camera.jpg",
    price: "$29",
    oldPrice: "$39",
    isNew: true,
  },
  {
    id: 2,
    name: "Power Supply Cable",
    description: "10-meter long power supply cable.",
    image: "/images/hero1.jpg",
    price: "$19",
    oldPrice: "$25",
  },
  {
    id: 3,
    name: "Security Signage",
    description: "Professional security warning signs.",
    image: "/images/hero2.jpg",
    price: "$9",
    oldPrice: "$12",
    isNew: true,
  },
];
// Right column accessories (separate array)
const rightColumnAccessories = [
  {
    id: 2,
    name: "Power Supply Cable",
    description: "10-meter long power supply cable.",
    image: "/images/hero1.jpg",
    price: "$19",
    oldPrice: "$25",
    isNew: false,
  },
  // {
  //   id: 3,
  //   name: "Security Signage",
  //   description: "Professional security warning signs.",
  //   image: "/images/hero2.jpg",
  //   price: "$9",
  //   oldPrice: "$12",
  //   isNew: true,
  // },
];

export default function FeaturedAccessories() {
  const featured = accessories[0];
  const secondary = accessories.slice(1);

  return (
    <>
    <section className="w-full bg-gray-50 py-28 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
          Accessories
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">
          Premium CCTV Accessories
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Enhance your CCTV setup with our premium accessories. Stylish, durable, and fully compatible with all major systems.
        </p>
      </div>

      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left: Large Featured Accessory */}
        <motion.div
          className="relative flex-1 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-150"
          whileHover={{ scale: 1.03 }}
        >
          <motion.img
            src={featured.image}
            alt={featured.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-100">
            <h3 className="text-3xl font-bold text-white">{featured.name}</h3>
            <p className="text-gray-200 mt-2 text-sm md:text-base">{featured.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-accent text-xl font-bold">{featured.price}</span>
              {featured.oldPrice && (
                <span className="text-gray-400 line-through">{featured.oldPrice}</span>
              )}
              <Button
                variant="primary"
                className="ml-auto px-6 py-2 text-sm rounded-lg bg-accent text-white shadow-lg hover:scale-105 transform transition-transform"
                onClick={() => alert(`Added ${featured.name} to cart!`)}
              >
                Buy Now
              </Button>
            </div>
          </div>

          {featured.isNew && (
            <div className="absolute top-4 left-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
              New
            </div>
          )}
        </motion.div>

        {/* Right: Two smaller accessory cards stacked */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          <div className="flex-1 flex gap-6">
            {secondary.map((item) => (
              <motion.div
                key={item.id}
                className="relative rounded-2xl max-h-full overflow-hidden shadow-lg group cursor-pointer flex-1"
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Text always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                  <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-accent font-bold">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
                    )}
                    <Button
                      variant="primary"
                      className="ml-auto px-4 py-1 text-xs rounded-lg bg-accent text-white shadow hover:scale-105 transform transition-transform"
                      onClick={() => alert(`Added ${item.name} to cart!`)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>

                {item.isNew && (
                  <div className="absolute top-3 left-3 bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
                    New
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {rightColumnAccessories.map((item) => (
              <motion.div
                key={item.id}
                className="relative rounded-2xl max-h-full overflow-hidden shadow-lg group cursor-pointer flex-1"
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Text always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                  <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-accent font-bold">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
                    )}
                    <Button
                      variant="primary"
                      className="ml-auto px-4 py-1 text-xs rounded-lg bg-accent text-white shadow hover:scale-105 transform transition-transform"
                      onClick={() => alert(`Added ${item.name} to cart!`)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>

                {item.isNew && (
                  <div className="absolute top-3 left-3 bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
                    New
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

</>
  );
}