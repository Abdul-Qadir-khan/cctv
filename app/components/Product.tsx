"use client";

import { Product, products } from "../../data/product"; // ✅ import products and type
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

interface ProductSectionProps {
  filteredProducts?: Product[];
}

export default function ProductSection({ filteredProducts }: ProductSectionProps) {
  const initialLimit = 4;

  // Use filteredProducts if passed, otherwise fallback to all products
  const initialProducts = filteredProducts?.slice(0, initialLimit) || products.slice(0, initialLimit);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(initialProducts);

  const loadMoreProducts = () => {
    const currentLength = visibleProducts.length;
    const nextProducts = (filteredProducts || products).slice(currentLength, currentLength + initialLimit);
    setVisibleProducts(prev => [...prev, ...nextProducts]);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="md:max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8">
          {visibleProducts.map(product => (
            <div key={product.id}>
              {/* Your product card code goes here */}
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        {visibleProducts.length < (filteredProducts || products).length && (
          <div className="mt-12 text-center">
            <Button variant="primary" className="px-10 py-3 text-lg" onClick={loadMoreProducts}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}