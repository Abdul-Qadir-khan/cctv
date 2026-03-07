"use client";

import { Shield, Users, Clock, Star } from "lucide-react";
import Button from "../components/Button";

const features = [
  {
    icon: Shield,
    title: "Trusted Security",
    description:
      "We provide reliable and certified security solutions with years of experience in the industry.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team of skilled professionals ensures that your home and business are protected 24/7.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and assistance to guarantee your safety and peace of mind.",
  },
  {
    icon: Star,
    title: "High-Quality Equipment",
    description:
      "We use only the latest, state-of-the-art security devices for maximum protection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-linear-to-r from-primary/10 to-accent/10 py-12 md:py-24 px-5 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why <span className="text-accent">Choose Us</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          At GuardVision, we combine expertise, technology, and reliability to provide the best security solutions for your home and business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-500">
                <Icon className="w-7 h-7 text-accent group-hover:text-yellow-500 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button variant="accent" className="px-10 py-3 text-lg">
          Learn More About Us
        </Button>
      </div>
    </section>
  );
}