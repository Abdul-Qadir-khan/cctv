"use client";

import Button from "../components/Button";
import Image from "next/image";
import { Camera, Shield, BellRing, Home } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Professional CCTV camera installation for homes, offices, and industrial facilities with high-definition surveillance systems.",
  },
  {
    icon: Shield,
    title: "Security Systems",
    description:
      "Complete electronic security solutions including alarm systems, access control, and perimeter protection.",
  },
  {
    icon: BellRing,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock monitoring and rapid response support to ensure continuous safety and protection.",
  },
  {
    icon: Home,
    title: "Home & Office Solutions",
    description:
      "Customized residential and commercial security systems designed to fit your exact requirements.",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-white text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Top Heading */}
          <div className="mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">
              Our Expertise
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight max-w-4xl">
              Advanced Security & Surveillance
              <span className="block text-gray-300">
                Built for Modern Protection
              </span>
            </h2>
          </div>

          {/* Services Layout */}
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left Column - Services List */}
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group border-b border-gray-200 pb-10"
                  >
                    <div className="flex items-start gap-6">

                      {/* Big Number */}
                      <span className="text-5xl font-bold text-gray-200 group-hover:text-accent transition-colors duration-300">
                        {`0${index + 1}`}
                      </span>

                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <Icon className="w-6 h-6 text-accent" />
                          <h3 className="text-2xl font-semibold">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed max-w-md">
                          {service.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Highlight Box */}
            <div className="bg-black text-white p-14 rounded-3xl relative">
              <Image src="/images/residential-camera.jpg" className="object-cover w-125 h-60 rounded-3xl mb-3" alt="" title="" width={600} height={300} />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Security Solutions?
              </h3>

              <ul className="space-y-6 text-gray-300">
                <li>✔ High-definition surveillance systems</li>
                <li>✔ Smart integration & remote access</li>
                <li>✔ Professional installation team</li>
                <li>✔ 24/7 monitoring & technical support</li>
              </ul>

              <div className="mt-10">
                <Button variant="accent" className="px-8 py-3 text-lg">
                  Get a Free Consultation
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}