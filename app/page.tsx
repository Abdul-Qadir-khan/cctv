"use client";

import Hero from "./components/Hero";
import CategoriesSection from "./components/Categories";
import BestSellerSection from "./components/BestSellersSection";
import NewArrivals from "./components/Accessories";
import DiscountsSection from "./components/Discount";
import CustomerReviewsSection from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import BrandsSlider from "./components/BrandsSlider";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Best Sellers Section */}
      <BestSellerSection />

      {/* New Arrivals or Timeless Fashion */}
      <NewArrivals />

      {/* Discounts and Offers Section */}
      <DiscountsSection />

      {/* Customer Reviews Section */}
      <CustomerReviewsSection />

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Brands Section */}
      <BrandsSlider />
    </div>
  );
}