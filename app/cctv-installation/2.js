"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  VideoCameraIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";

const installationServices = [
  {
    id: 1,
    title: "Home CCTV Installation",
    description:
      "Professional installation of CCTV systems tailored for residential properties, ensuring complete home security and peace of mind.",
    features: [
      "Custom placement planning for full coverage",
      "HD cameras with night vision",
      "Integration with mobile apps for remote viewing",
      "Wireless and wired installation options",
    ],
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "Business CCTV Installation",
    description:
      "Secure your business premises with high-quality CCTV installation designed to protect assets and monitor activity efficiently.",
    features: [
      "Commercial-grade cameras and recording devices",
      "Multi-camera setup with centralized control",
      "24/7 monitoring capability integration",
      "Professional cable management and concealment",
    ],
    icon: VideoCameraIcon,
  },
  {
    id: 3,
    title: "Smart CCTV Systems",
    description:
      "Advanced smart CCTV solutions with AI-powered analytics, motion detection, and automated alerts for proactive security.",
    features: [
      "AI-based threat detection and facial recognition",
      "Cloud storage and backup",
      "Mobile alerts and notifications",
      "Easy integration with other smart home/business systems",
    ],
    icon: DeviceTabletIcon,
  },
];

export default function CCTVInstallationPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (<>
    <section className="bg-black py-12"></section>
    <section className="bg-white py-24 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight"
        >
          CCTV Installation Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Expert CCTV installation services designed to provide maximum security
          and peace of mind for your home or business.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {installationServices.map((service) => {
          const Icon = service.icon;
          const isExpanded = expandedId === service.id;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
              className={`border rounded-xl shadow-lg overflow-hidden cursor-pointer ${
                isExpanded ? "bg-[var(--color-accent)] text-white" : "bg-gray-50"
              }`}
              onClick={() => toggleExpand(service.id)}
            >
              <div className="flex items-center gap-6 p-6">
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isExpanded
                      ? "bg-white text-[var(--color-accent)]"
                      : "bg-[var(--color-accent)] text-white"
                  }`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h2
                  className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                    isExpanded ? "text-white" : "text-[var(--color-primary)]"
                  }`}
                >
                  {service.title}
                </h2>
                <div className="ml-auto text-2xl font-bold select-none">
                  {isExpanded ? "−" : "+"}
                </div>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-10 pb-8 text-white"
                >
                  <p className="mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-32 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] leading-snug"
        >
          Ready to Secure Your Property?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-gray-700 mb-8 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Contact us today for a free consultation and expert CCTV installation
          service tailored to your needs.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[var(--color-accent)] text-white font-semibold px-10 py-5 rounded-lg shadow-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-500 text-lg md:text-xl"
        >
          Get a Free Quote
        </motion.a>
      </div>
    </section>
    </>
  );
}