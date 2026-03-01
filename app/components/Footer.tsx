"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSitefinityStyle() {
  return (
    <footer className="bg-[#0B1F3A] text-gray-300 text-sm font-sans">
  {/* Main content */}
  <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

    {/* Left Section: Brand + Services */}
    <div className="space-y-6">
      <h2 className="text-white font-semibold text-lg">SecureTech Solutions</h2>
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

    {/* Contact */}
    <div className="flex flex-col justify-between">
      <button className="border border-[#FF6B00] text-[#FF6B00] font-semibold py-3 px-6 uppercase tracking-wider mb-8 hover:bg-[#FF6B00] hover:text-white transition">
        Contact Us
      </button>
      <div className="text-[#FF6B00] font-semibold text-lg tracking-wide">
        +1 (555) 123-4567
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-[#2f3c4a] py-6 max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 select-none">
    <div className="flex items-center space-x-4">
      {/* Replace src with your actual SecureTech logo */}
      <img
        src="/logo-w.png"
        alt="SecureTech Logo"
        width={100}
        height={24}
        className="object-contain"
      />
      <span>
        Terms of Use | Privacy Policy | Trademarks | License Agreements
      </span>
    </div>

    <span className="text-[10px] max-w-[500px]">
      © {new Date().getFullYear()} SecureTech Corporation. All Rights Reserved.
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