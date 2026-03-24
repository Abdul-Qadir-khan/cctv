"use client";

import Image from "next/image";
import Button from "../components/Button";
import { CheckCircle2, Settings2, Clock, ShieldCheck } from "lucide-react";

export default function About() {

  const features = [
    { icon: CheckCircle2, text: "Curated Fashion Collections" },
    { icon: Settings2, text: "Personalized Styling Advice" },
    { icon: Clock, text: "Fast & Reliable Delivery" },
    { icon: ShieldCheck, text: "High-Quality Materials" },
  ];

  return (
    <section className="w-full grid md:grid-cols-2 min-h-[600px]">

      {/* IMAGE SIDE */}
      <div className="relative w-full h-[420px] md:h-auto">
        <Image
          src="/images/product1.jpg"
          alt="Velmora Fashion"
          fill
          sizes="1000"
          className="object-cover"
          priority
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* CONTENT SIDE */}
      <div className="flex items-center bg-white px-6 md:px-20 py-16">

        <div className="max-w-xl">

          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            About Velmora
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Timeless Fashion <br /> For Every Occasion
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Velmora is your ultimate destination for the latest in fashion. Our collection is designed to cater to every style, offering high-quality, trendsetting pieces for both casual and formal wear. With personalized styling advice and a commitment to exceptional service, Velmora brings fashion to your doorstep.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.text}
                  className="flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              );
            })}

          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              variant="primary"
              className="px-8 py-3 text-lg"
            >
              Get Your Free Styling Consultation
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}