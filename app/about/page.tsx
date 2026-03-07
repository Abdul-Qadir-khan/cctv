"use client";

import Link from "next/link"; // your custom Button component if any
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-100 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/about-hero.jpg" // replace with your about image path
          alt="About us"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-extrabold text-primary-dark">
          About <span className="text-accent">GuardVision</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          At GuardVision, we specialize in providing advanced CCTV and security solutions tailored to protect your home and business. With years of experience and a passion for innovation, our expert team is committed to delivering peace of mind through cutting-edge technology and exceptional service.
        </p>

        {/* Features list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-gray-800 font-semibold">Trusted Professionals</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 20h9" />
              <path d="M4 4h16v4H4z" />
              <path d="M4 12h16v4H4z" />
            </svg>
            <span className="text-gray-800 font-semibold">Custom Solutions</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-gray-800 font-semibold">24/7 Support</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 10h-6l-2-7-2 7H3" />
              <path d="M3 10v10h18V10" />
            </svg>
            <span className="text-gray-800 font-semibold">Quality Guarantee</span>
          </li>
        </ul>

        {/* Call to Action */}
        <Link href="/contact" className="mt-6 px-8 py-3 rounded-md">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}