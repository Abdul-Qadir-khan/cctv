"use client";

import Link from "next/link";
import { products } from "../../data/product";
import { useMemo, useState } from "react";
import { Heart } from "lucide-react";

export default function ShopSection() {
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [price, setPrice] = useState(1000);

  // UNIQUE VALUES (dynamic)
  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand.name))];
  const sizes = [...new Set(products.flatMap(p => p.variations.sizes))];
  const colors = [...new Set(products.flatMap(p => p.variations.colors))];

  // TOGGLE FILTER
  const toggle = (value: string, setter: any, state: string[]) => {
    setter(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  // FILTER + SORT
  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (category.length)
      data = data.filter((p) => category.includes(p.category));

    if (brand.length)
      data = data.filter((p) => brand.includes(p.brand.name));

    if (size.length)
      data = data.filter((p) =>
        p.variations.sizes.some((s) => size.includes(s))
      );

    if (color.length)
      data = data.filter((p) =>
        p.variations.colors.some((c) => color.includes(c))
      );

    data = data.filter((p) => p.price <= price);

    // SORT
    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);
    if (sort === "latest") data.sort((a, b) => b.id - a.id);

    return data;
  }, [category, brand, size, color, price, sort]);

  return (
    <section className="">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= FILTER ================= */}
        <div className="bg-white border rounded-2xl p-6 space-y-6 h-fit">

          <h3 className="font-semibold text-lg">Filters</h3>

          {/* CATEGORY */}
          <div>
            <h4 className="font-medium mb-2">Category</h4>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => toggle(c, setCategory, category)}
                className={`block text-sm ${
                  category.includes(c) ? "text-black font-medium" : "text-gray-500"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <hr />

          {/* BRAND */}
          <div>
            <h4 className="font-medium mb-2">Brand</h4>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => toggle(b, setBrand, brand)}
                className={`block text-sm ${
                  brand.includes(b) ? "text-black font-medium" : "text-gray-500"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <hr />

          {/* PRICE */}
          <div>
            <h4 className="font-medium mb-2">Price: ₹{price}</h4>
            <input
              type="range"
              min={0}
              max={1000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-black"
            />
          </div>

          <hr />

          {/* COLORS */}
          <div>
            <h4 className="font-medium mb-2">Colors</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => toggle(c, setColor, color)}
                  className={`px-3 py-1 text-xs border rounded-full ${
                    color.includes(c) ? "bg-black text-white" : ""
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <hr />

          {/* SIZE */}
          <div>
            <h4 className="font-medium mb-2">Size</h4>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(s, setSize, size)}
                  className={`px-3 py-1 border rounded-full text-sm ${
                    size.includes(s)
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setCategory([]);
              setBrand([]);
              setSize([]);
              setColor([]);
              setPrice(1000);
            }}
            className="w-full bg-black text-white py-2 rounded-full"
          >
            Reset Filters
          </button>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="lg:col-span-3">

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} products
            </p>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm bg-transparent outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="latest">Latest</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (
              <div key={product.id} className="group">

                <div className="relative bg-[#f1f1f1] rounded-2xl p-6 h-72 flex items-center justify-center overflow-hidden">

                  {/* Wishlist */}
                  <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow">
                    <Heart size={16} />
                  </button>

                  {/* Discount */}
                  {product.originalPrice && (
                    <span className="absolute top-3 right-3 bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full group-hover:opacity-0 transition">
                      -{Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  )}

                  {/* IMAGE SWAP */}
                  <img
                    src={product.images[0]}
                    className="absolute h-full object-contain group-hover:opacity-0 transition"
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    className="absolute h-full object-contain opacity-0 group-hover:opacity-100 transition"
                  />

                  {/* ADD TO CART */}
                  <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition">
                    <button className="w-full bg-black text-white py-3 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-medium">{product.name}</h3>
                  </Link>

                  <div className="text-yellow-500 text-sm">
                    ★ {product.rating}
                  </div>

                  <div className="flex gap-2">
                    {product.originalPrice && (
                      <span className="line-through text-gray-400">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    <span className="font-semibold">₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}