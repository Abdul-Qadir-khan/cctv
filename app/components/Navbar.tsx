"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px threshold
    };

    handleScroll(); // 👈 check on mount (important for refresh)

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", submenu: [] },
    // {
    //   name: "Company",
    //   href: "/company",
    //   submenu: [
    //     { name: "About Us", href: "/company/about" },
    //     { name: "Team", href: "/company/team" },
    //     { name: "Careers", href: "/company/careers" },
    //   ],
    // },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "CCTV Installation", href: "/services/cctv-installation" },
        { name: "Security Systems", href: "/services/security" },
      ],
    },
    // {
    //   name: "New & Media",
    //   href: "/news",
    //   submenu: [
    //     { name: "Blog", href: "/news/blog" },
    //     { name: "Events", href: "/news/events" },
    //   ],
    // },
    { name: "Blogs", href: "/blogs", submenu: [] },
    // {
    //   name: "Shop",
    //   href: "/shop",
    //   submenu: [
    //     { name: "Cameras", href: "/shop/cameras" },
    //     { name: "Accessories", href: "/shop/accessories" },
    //   ],
    // },
    { name: "Shop", href: "/products", submenu: [] },
    { name: "Contact Us", href: "/contact", submenu: [] },
  ];

  // Desktop dropdown open state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile menu open state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile submenu open index state
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState<number | null>(null);

  // Desktop handlers to keep dropdown open when hovering parent or submenu
  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before hiding dropdown, adjust as needed
  };

  // Mobile submenu toggle
  const toggleMobileSubmenu = (index: number) => {
    if (openMobileSubmenuIndex === index) {
      setOpenMobileSubmenuIndex(null);
    } else {
      setOpenMobileSubmenuIndex(index);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white md:text-black" : "bg-transparent text-white"
        }`}
    >
      <div
        className={`max-w-8xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "py-4" : "py-8"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          {/* Secure<span className="text-accent">Tech</span> */}
          {/* <Image src="/images/logo-w.png" alt="" title="" width={200} height={30}/> */}
          <Image className="w-40 md-w-auto"
            src={isScrolled ? "/images/logo-dark.png" : "/images/white-logo.png"} alt="" title="" width={200} height={30} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className={`uppercase font-medium transition-colors duration-300 flex items-center space-x-1 ${pathname === link.href ? "text-accent" : "hover:text-accent"
                  }`}
              >
                <span>{link.name}</span>
                {link.submenu.length > 0 && <ChevronDown size={14} className="mt-[2px]" />}
              </Link>

              {/* Dropdown submenu */}
              {link.submenu.length > 0 && openDropdown === link.name && (
                <div
                  className="absolute left-0 top-full mt-2 w-48 bg-primary rounded-md shadow-lg z-50"
                  onMouseEnter={() => handleMouseEnter(link.name)} // keep open on submenu hover
                  onMouseLeave={handleMouseLeave}                  // close on leaving submenu
                >
                  <ul className="flex flex-col">
                    {link.submenu.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          href={subLink.href}
                          className={`block px-4 py-2 transition-colors duration-200 ${isScrolled
                              ? "bg-white text-black hover:text-accent hover:bg-gray-100"
                              : "text-white hover:text-accent hover:bg-primary"
                            }`}>
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side: Phone & Quote Button */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:+201061245741"
            className="flex items-center space-x-2 font-medium hover:text-accent transition"
          >
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
            </svg>
            <span>+201061245741</span>
          </a>

          <Link
            href="/contact"
            className="bg-accent text-white font-medium px-5 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Enquiry Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-primary p-6 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        ><Image
            src="/images/white-logo.png" alt="" title="" width={150} height={30} />
          <nav className="flex flex-col space-y-6 mt-12">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <button
                  className="flex items-center justify-between w-full text-left font-semibold text-white hover:text-accent transition"
                  onClick={() =>
                    link.submenu.length > 0 ? toggleMobileSubmenu(index) : setIsMobileMenuOpen(false)
                  }
                >
                  {link.name}
                  {link.submenu.length > 0 && (
                    <ChevronDown
                      size={18}
                      className={`ml-2 transform transition-transform duration-300 ${openMobileSubmenuIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {link.submenu.length > 0 && openMobileSubmenuIndex === index && (
                  <ul className="pl-4 mt-2 flex flex-col space-y-2">
                    {link.submenu.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-white hover:text-accent"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Mobile Phone & Quote Button */}
            <div className="mt-8 border-t border-gray-700 pt-6">
              <a
                href="tel:+201061245741"
                className="flex items-center space-x-2 font-semibold text-white hover:text-accent transition"
              >
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
                </svg>
                <span>+201061245741</span>
              </a>

              <Link
                href="/contact"
                className="mt-4 block bg-accent text-primary font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition text-center"
              >
                Get A Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}