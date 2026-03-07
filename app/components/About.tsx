"use client";

import Image from "next/image";
import Button from "../components/Button";
import { CheckCircle2, Settings2, Clock, ShieldCheck } from "lucide-react";

export default function About() {

  const features = [
    { icon: CheckCircle2, text: "Trusted Security Experts" },
    { icon: Settings2, text: "Customized CCTV Solutions" },
    { icon: Clock, text: "24/7 Monitoring Support" },
    { icon: ShieldCheck, text: "Advanced Protection Systems" },
  ];

  return (
    <section className="w-full grid md:grid-cols-2 min-h-[600px]">

      {/* IMAGE SIDE */}
      <div className="relative w-full h-[420px] md:h-auto">
        <Image
          src="/images/hero1.jpg"
          alt="GuardVision Security"
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
            About GuardVision
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Reliable Security <br /> For Homes & Businesses
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            GuardVision provides modern CCTV surveillance and intelligent
            security systems designed to keep your property protected.
            We combine cutting-edge technology with professional
            installation and dependable monitoring.
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
              variant="accent"
              className="px-8 py-3 text-lg"
            >
              Get Free Consultation
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}