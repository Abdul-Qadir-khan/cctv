"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const { cartCount } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // run on load
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus(); // Focus the input when search is opened
    }
  }, [isSearchOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const closeSearch = () => setIsSearchOpen(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/shop/categories/mens" },
    { name: "Women", href: "/women" },
    { name: "New", href: "/new" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-[999] transition-all duration-300 ${isScrolled
          ? "bg-white text-black shadow-sm"
          : "text-black"
          }`}
      >
        <div className="mx-auto flex items-center justify-between max-w-7xl px-5 md:px-0 py-4">

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} />
          </button>

          {/* LEFT SIDE: CART ICON (Visible on mobile too) */}
          <div className="md:hidden flex items-center space-x-4">
            <ShoppingBag size={20} className="cursor-pointer" />
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-2xl md:text-3xl font-semibold tracking-widest">
              <Image
                src={isScrolled ? "/images/velmora-gdd.png" : "/images/velmora-d.png"}
                alt="Velmora"
                width={160}
                height={30}
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 text-sm uppercase tracking-wide transition ${pathname === link.href
                  ? "font-semibold"
                  : "hover:text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* RIGHT ICONS */} <div className="hidden md:flex items-center space-x-5">
            {/* SEARCH ICON */}
            <button onClick={() => setIsSearchOpen(true)} className="relative"> <Search size={20} className="cursor-pointer" /> </button>
            {/* USER ICON */} <User size={20} className="cursor-pointer" />
            <Link href="/checkout" className="relative">

              <ShoppingCart className="w-6 h-6" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}

            </Link>
          </div>
        </div>

      </header>

      {/* DARK OVERLAY AND SEARCH INPUT */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300"
          onClick={closeSearch} // Close when clicking outside the overlay
        >
          <form
            onSubmit={handleSearchSubmit}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the search form
          >
            <div className="relative w-1/2 mx-auto">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-5 py-3 text-lg bg-transparent text-white border-b-2 shadow-lg focus:outline-none transition duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-white focus:outline-none"
              >
                <Search size={22} />
              </button>
            </div>
          </form>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeSearch}
            className="absolute top-5 right-5 text-white hover:text-red-500 z-[1000] cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/40 z-[998] transition ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMobileMenu} // Close menu on outside click
      >
        <div
          className={`absolute left-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 transform transition ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside
        >
          {/* CLOSE BUTTON */}
          <button
            className="mb-8"
            onClick={closeMobileMenu}
          >
            <X size={24} />
          </button>

          {/* LINKS */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu} // Close menu on link click
                className="text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* SEARCH, USER, CART ICONS */}
          <div className="flex flex-col space-y-6 mt-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 text-lg font-medium"
            >
              <Search size={20} />
              <span>Search</span>
            </button>
            <div className="flex items-center space-x-2 text-lg font-medium">
              <User size={20} />
              <span>User</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-medium">
              <ShoppingBag size={20} />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}