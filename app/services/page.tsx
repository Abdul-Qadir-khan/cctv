import React from 'react';
import Services from "../components/Services";
import Summary from "../components/Summary";
// import { HomeIcon, BuildingOffice2Icon, ClockIcon, WrenchIcon } from '@heroicons/react/24/outline';
import Script from 'next/script';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV Installation Services",
  description:
    "Professional CCTV installation services for homes, offices, and industrial properties. SecureTech provides complete surveillance solutions.",
  keywords: [
    "CCTV installation services",
    "Security camera setup",
    "Office surveillance installation",
  ],
  alternates: {
    canonical: "https://yourdomain.com/services",
  },
};

// const services = [
//   {
//     title: "Residential CCTV Installation",
//     description:
//       "Protect your home with professional CCTV systems. Our installation ensures full coverage, smart alerts, and integration with mobile devices.",
//     features: [
//       "HD cameras with night vision",
//       "24/7 remote monitoring",
//       "Smart alerts via app or email",
//       "Professional installation by certified technicians",
//     ],
//     icon: HomeIcon,
//   },
//   {
//     title: "Commercial CCTV Solutions",
//     description:
//       "Secure your office or business premises with advanced surveillance solutions. Our commercial systems provide complete safety and compliance monitoring.",
//     features: [
//       "High-resolution cameras with wide coverage",
//       "Multi-zone recording and playback",
//       "Employee monitoring & access control integration",
//       "Scalable system for offices of any size",
//     ],
//     icon: BuildingOffice2Icon,
//   },
//   {
//     title: "24/7 Monitoring Service",
//     description:
//       "We keep an eye on your property round the clock. Receive instant notifications in case of any unusual activity or security breach.",
//     features: [
//       "Real-time alerts to your phone or email",
//       "Live monitoring from professional staff",
//       "Emergency response integration",
//       "Custom monitoring plans for homes or businesses",
//     ],
//     icon: ClockIcon,
//   },
//   {
//     title: "Maintenance & Support",
//     description:
//       "Ensure your CCTV system always works flawlessly with our dedicated maintenance and support services. Avoid downtime and get expert help whenever you need it.",
//     features: [
//       "Regular system health checks",
//       "Quick issue resolution",
//       "Software & firmware updates",
//       "Dedicated technical support",
//     ],
//     icon: WrenchIcon,
//   },
// ];
const testimonials = [
  {
    name: "Darlene Robertson",
    role: "Homeowner",
    photo: "/images/testimonial1.jpg",
    quote:
      "SecureTech’s installation was professional and efficient. The monitoring service gives me peace of mind 24/7.",
  },
  {
    name: "Mark Johnson",
    role: "Business Owner",
    photo: "/images/testimonial2.jpg",
    quote:
      "The commercial CCTV system from SecureTech helped us reduce theft and monitor employees effectively.",
  },
  {
    name: "Sarah Williams",
    role: "Security Manager",
    photo: "/images/testimonial3.jpg",
    quote:
      "Their maintenance support team is quick and reliable, ensuring minimal downtime for our CCTV system.",
  },
];
const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Satisfied Clients", value: "1500+" },
  { label: "Installations Completed", value: "3000+" },
  { label: "Support Tickets Closed", value: "5000+" },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <Script id="cctv-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "CCTV Installation",
          provider: {
            "@type": "LocalBusiness",
            name: "SecureTech",
          },
          areaServed: {
            "@type": "City",
            name: "Your City",
          },
        })}
      </Script>

      <section className="bg-black py-12 mb-20"></section>

      {/* Optional Services component */}
      <Summary />
      <Services />

      <section className="bg-[var(--color-dark)] text-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            See What Our Happy Clients Are Saying
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            {testimonials.map(({ name, role, photo, quote }, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-primary)] rounded-xl p-8 shadow-lg max-w-md mx-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={photo}
                    alt={`${name} photo`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-300">{role}</p>
                  </div>
                </div>
                <p className="italic text-gray-100">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20 p-12 bg-primary rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready To Secure Your Property With Expert CCTV Solutions?
          </h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Partner with SecureTech for reliable, transparent, and efficient CCTV installation and monitoring services tailored to your needs.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="/contact"
            className="bg-(--color-accent) text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-(--color-primary) transition"
          >
            Get A Free Quote
          </a>
          <a
            href="/demo"
            className="border border-(--color-accent) text-(--color-accent) font-semibold px-8 py-4 rounded-lg hover:bg-(--color-accent) hover:text-white transition"
          >
            Book A Demo
          </a>
        </div>
      </section>
    </>
  );
}