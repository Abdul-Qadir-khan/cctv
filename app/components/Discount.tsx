"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function DiscountsSection() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown (3600 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${hours}h ${minutes}m ${sec}s`;
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-[url('/images/product1.png')] bg-cover bg-center from-black/40 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="md:max-w-7xl w-full mx-auto relative z-10 text-center text-white">
        {/* Header */}
        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
          Limited Time Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 md:leading-tight leading-tighter">
          Elegant Sale! Don't Miss Out
          <span className="block text-gray-300 text-lg md:text-xl mt-2 font-medium">
            Grab these exclusive deals before time runs out
          </span>
        </h2>

        {/* Countdown Timer */}
        <div className="mt-8 mb-8">
          <h3 className="text-3xl font-semibold">Hurry, Sale Ends In:</h3>
          <p className="text-2xl font-medium text-accent">{formatTime(timeLeft)}</p>
        </div>

        {/* CTA Button */}
        <Link href="/promotions">
        <Button variant="primary" >
            Shop Now
            </Button>
        </Link>
      </div>
    </section>
  );
}