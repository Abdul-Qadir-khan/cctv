"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder for user photo
    rating: 5,
    review:
      "Absolutely love the HD CCTV Camera! The setup was simple and the picture quality is amazing. Definitely worth the price.",
  },
  {
    id: 2,
    name: "Emma Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg", // Placeholder for user photo
    rating: 4,
    review:
      "Great product, the night vision feature works perfectly! Only wish the mobile app could be more responsive.",
  },
  {
    id: 3,
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/3.jpg", // Placeholder for user photo
    rating: 4,
    review:
      "Excellent security camera with a sharp picture. The weather resistance feature is solid, and I feel safer knowing it's monitoring my property.",
  },
];

export default function CustomerReviewsSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="md:max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center md:mb-16 mb-6">
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            Our Customers Love Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 md:leading-tight leading-tighter text-gray-900">
            Customer Reviews
            <span className="block text-gray-400 text-lg md:text-xl mt-2 font-medium">
              See what our customers are saying
            </span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Optional: View More Reviews Button */}
        <div className="mt-12 text-center">
          <button className="px-10 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}