"use client";

import Button from "./Button";

export default function ServicesPage() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-20 px-6 md:px-20">
      {/* Service Introduction */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
          Professional CCTV Camera Installation Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          We offer expert CCTV installation services for homes, businesses, and commercial properties. Our team ensures the safety of your property with high-quality surveillance systems, installed quickly and efficiently.
        </p>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-4">Custom CCTV Systems</h3>
          <p className="text-gray-600 mb-4">
            We assess your property's needs and provide a tailored CCTV solution that fits your security requirements.
          </p>
          <ul className="list-disc pl-6">
            <li>High-definition cameras</li>
            <li>Night vision and weather-resistant models</li>
            <li>Remote monitoring options</li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-4">Expert Installation</h3>
          <p className="text-gray-600 mb-4">
            Our experienced technicians will install your CCTV system with minimal disruption and maximum effectiveness.
          </p>
          <ul className="list-disc pl-6">
            <li>Fast and efficient installation</li>
            <li>Thorough setup with detailed guidance</li>
            <li>Wire management and camera placement</li>
          </ul>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-4">Ongoing Support</h3>
          <p className="text-gray-600 mb-4">
            We offer ongoing support and maintenance for your CCTV system, ensuring it's always working at its best.
          </p>
          <ul className="list-disc pl-6">
            <li>24/7 customer support</li>
            <li>Remote troubleshooting and assistance</li>
            <li>Regular system check-ups and updates</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#0B1F3A] text-white py-20 px-6 md:px-20 rounded-3xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose Our CCTV Installation Services?
        </h3>
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-6">
          At SecureTech, we pride ourselves on providing professional, reliable, and efficient CCTV installation services. With years of experience, we ensure that your property is secure with the latest technology and our expert installation.
        </p>

        <div className="flex justify-center">
          <Button
            variant="primary"
            className="px-8 py-4 text-lg bg-[#FF6B00] text-white rounded-lg shadow-lg hover:bg-[#e05a00] transition"
            onClick={() => window.location.href = "/contact"}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>

    </section>
  );
}