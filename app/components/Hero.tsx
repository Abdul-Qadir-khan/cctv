"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

const slides = [
  {
    title: "Velmora Essentials",
    subtitle: "Minimal. Premium. Everyday wear designed for confidence.",
    image: "/images/product1.jpg",
    buttonText: "Shop Now",
    buttonLink: "/products",
    bg: "bg-[#cbfeff]",
  },
  {
    title: "New Season Drop",
    subtitle: "Elevate your wardrobe with modern streetwear fits.",
    image: "/images/product1.jpg",
    buttonText: "Explore Collection",
    buttonLink: "/collection",
    bg: "bg-[#cbfeff]",
  },
  {
    title: "Timeless Denim",
    subtitle: "Crafted for style, built for comfort.",
    image: "/images/product1.jpg",
    buttonText: "View Denim",
    buttonLink: "/denim",
    bg: "bg-[#cbfeff]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-180 md:h-[650px] overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* BACKGROUND */}
          <div
            className={`absolute inset-0 ${slide.bg} transition-all duration-1000`}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/5" />

          {/* CONTENT */}
          <div className="relative z-10 md:h-full items-center max-w-7xl px-5 md:px-0 flex flex-col md:flex-row justify-between mx-auto pt-20 md:pt-0">

            {/* LEFT CONTENT */}
            <div className="order-2 md:order-1 flex flex-col justify-center space-y-6 text-center md:text-left">

              <h2 className="text-3xl md:text-7xl font-semibold tracking-wide text-black mb-2 md:mb-4">
                {slide.title}
              </h2>

              <p className="text-gray-700 text-base md:text-xl max-w-md mb-2 md:mb-5">
                {slide.subtitle}
              </p>

              <Button
                className="px-6 py-3 text-sm tracking-wide w-fit mx-auto md:mx-0"
                onClick={() => (window.location.href = slide.buttonLink)}
              >
                {slide.buttonText}
              </Button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 md:order-2 flex justify-center items-center relative">

              <img
                src={slide.image}
                alt={slide.title}
                className="h-[320px] md:h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              />

            </div>

          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current
                ? "w-6 bg-black"
                : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}