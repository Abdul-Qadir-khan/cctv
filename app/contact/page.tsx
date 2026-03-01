"use client";

import { useState } from "react";
import Button from "../components/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="py-12 bg-black"></section>

      <section className="w-full min-h-screen relative bg-gray-500">
        {/* Split Background */}
        <div className="lg:flex lg:min-h-screen">
          {/* Left Panel */}
          <div className="lg:w-1/2 relative bg-gradient-to-br from-accent/90 to-accent/70 flex flex-col justify-center px-12 py-20 clip-slant-left text-white overflow-hidden">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-lg text-white/90">
              Our expert team is ready to help you secure your home or business. Contact us today!
            </p>

            {/* Info Boxes */}
            <div className="flex flex-col gap-6">
              {[{
                icon: Phone,
                text: "+1 (123) 456-7890",
              }, {
                icon: Mail,
                text: "support@securetech.com",
              }, {
                icon: MapPin,
                text: "123 Security Ave, Tech City, USA",
              }].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl cursor-pointer hover:bg-white/20 transition"
                >
                  <Icon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-accent" />
                  <span className="text-lg font-medium select-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-1/2 flex items-center justify-center px-6 md:px-20 py-20 lg:py-0">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-12 transform -translate-y-12 lg:-translate-y-0 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
                />
                <Button
                  type="submit"
                  variant="accent"
                  className="px-10 py-4 text-lg rounded-2xl w-max hover:scale-105 transition-transform duration-300 ease-in-out mt-2 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}