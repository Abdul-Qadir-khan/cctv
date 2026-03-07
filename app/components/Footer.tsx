"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSitefinityStyle() {
  return (
    <footer className="bg-[#0B1F3A] text-gray-300 text-sm font-sans">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Section: Brand + Services */}
        <div className="space-y-6">
          {/* Replace src with your actual GuardVisionlogo */}
          <Image
            src="/images/logo.png"
            alt="GuardVision"
            title="GuardVision"
            width={150}
            height={30}
            className="object-contain"
          />
          <p className="leading-relaxed max-w-xs">
            Providing industry-leading CCTV cameras, NVRs, and accessories to secure your world with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-xs text-gray-400 text-xs">
            <div>
              <h3 className="text-white font-semibold">CCTV Cameras</h3>
              <p>High-definition cameras with night vision and AI analytics.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Network Video Recorders</h3>
              <p>Reliable NVR systems for seamless video management.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Accessories</h3>
              <p>Power supplies, cables, mounts, and more for easy installation.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Support & Services</h3>
              <p>Dedicated customer support and installation services.</p>
            </div>
          </div>
        </div>

        {/* desktop */}
        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/products" className="hover:text-white font-semibold transition">Products</Link></li>
            <li><Link href="/services" className="hover:text-white font-semibold transition">Services</Link></li>
            <li><Link href="/support" className="hover:text-white font-semibold transition">Support</Link></li>
            <li><Link href="/about" className="hover:text-white font-semibold transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white font-semibold transition">Contact</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="hidden md:block">
          <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-6">Company</h3>
          <ul className="space-y-3">
            <li><Link href="/company" className="hover:text-white font-semibold transition">Overview</Link></li>
            <li><Link href="/careers" className="hover:text-white font-semibold transition">Careers</Link></li>
            <li><Link href="/news" className="hover:text-white font-semibold transition">News</Link></li>
            <li><Link href="/investors" className="hover:text-white font-semibold transition">Investors</Link></li>
            <li><Link href="/offices" className="hover:text-white font-semibold transition">Offices</Link></li>
          </ul>
        </div>

        {/* mobile */}
        <div className="grid grid-cols-2 md:hidden">
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="hover:text-white font-semibold transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-white font-semibold transition">Services</Link></li>
              <li><Link href="/support" className="hover:text-white font-semibold transition">Support</Link></li>
              <li><Link href="/about" className="hover:text-white font-semibold transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white font-semibold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/company" className="hover:text-white font-semibold transition">Overview</Link></li>
              <li><Link href="/careers" className="hover:text-white font-semibold transition">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white font-semibold transition">News</Link></li>
              <li><Link href="/investors" className="hover:text-white font-semibold transition">Investors</Link></li>
              <li><Link href="/offices" className="hover:text-white font-semibold transition">Offices</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-between">
          <button className="w-fit md:w-auto border border-[#FF6B00] text-[#FF6B00] font-semibold py-3 px-6 uppercase tracking-wider mb-8 hover:bg-[#FF6B00] hover:text-white transition">
            Contact Us
          </button>
          <Link href="tel:7817835909" className="flex items-center gap-2 hover:text-orange-500 font-semibold text-lg tracking-wide">
          <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.05 12.05 0 00.6 2.81 2 2 0 01-.45 2.11L9.91 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.6A2 2 0 0122 16.92z" />
            </svg> +91 781 7835 909
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2f3c4a] py-6 max-w-7xl mx-auto px-5 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 select-none">
        <div className="flex items-center space-x-4 text-center">          
          <span>
            Terms of Use | Privacy Policy | Trademarks | License Agreements
          </span>
        </div>

        <span className="text-[10px] max-w-125">
          © {new Date().getFullYear()} GuardVisionCorporation. All Rights Reserved.
        </span>

        {/* Social icons */}
        <div className="flex space-x-6">
          {/* Insert your social SVGs or icons here */}
          <Link href="#" className="hover:text-[#FF6B00] transition">Facebook</Link>
          <Link href="#" className="hover:text-[#FF6B00] transition">Twitter</Link>
          <Link href="#" className="hover:text-[#FF6B00] transition">LinkedIn</Link>
          <Link href="#" className="hover:text-[#FF6B00] transition">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}