"use client";

import Image from "next/image";
import Button from "../components/Button";
import { CheckCircle2, Settings2, Clock, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    { icon: CheckCircle2, title: "Trusted Professionals" },
    { icon: Settings2, title: "Custom Solutions" },
    { icon: Clock, title: "24/7 Support" },
    { icon: ShieldCheck, title: "Quality Guarantee" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center gap-12 relative">
      
      {/* Left Image with interactive hover */}
      <div className="relative w-full md:w-1/2 h-80 md:h-125 rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
        <Image
          src="/images/hero1.jpg"
          alt="About SecureTech"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          priority
        />
        {/* Optional overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Right Text Content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-tight">
          About <span className="text-accent">SecureTech</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
          SecureTech delivers top-notch CCTV and security solutions for homes and businesses. 
          Our team combines innovation, reliability, and expertise to provide cutting-edge technology 
          and unmatched peace of mind.
        </p>

        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex items-center gap-4 p-5 py-2 bg-primary/20 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-accent group-hover:text-yellow-400 transition-colors duration-500" />
                </div>
                <span className="text-gray-600 font-semibold text-lg">{feature.title}</span>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <Button variant="accent" className="px-10 py-3 text-lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}