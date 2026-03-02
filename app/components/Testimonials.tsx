"use client";

import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Al Amin Bali",
    role: "Customer",
    image: "/images/user1.jpg",
    text: "Outstanding CCTV installation service. Clean setup and excellent remote monitoring support.",
  },
  {
    name: "Hasanul Banna",
    role: "Manager",
    image: "/images/user2.jpg",
    text: "Our office security improved dramatically. The monitoring system is fast and reliable.",
  },
  {
    name: "Mahbubul Alam",
    role: "Admin",
    image: "/images/user3.jpg",
    text: "Professional team with advanced technology solutions. Highly recommended.",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white md:py-24 py-12 px-5 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="md:text-4xl text-3xl font-bold mb-16">
          What Our Clients Say
        </h2>

        <div className="relative">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === active
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute inset-0"
              }`}
            >
              <div className="bg-gray-900 rounded-2xl md:p-12 p-5 shadow-2xl">

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon
                      key={idx}
                      className="w-5 h-5 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <span className="text-sm text-gray-400">
                    {item.role}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition ${
                active === i
                  ? "bg-white"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}