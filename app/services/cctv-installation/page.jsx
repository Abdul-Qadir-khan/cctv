"use client";
import Image from 'next/image'
import { useState } from "react";
import Testimonials from "../../components/Testimonials.tsx";
import {
    WrenchScrewdriverIcon,
    ArrowPathIcon,
    EyeIcon,
    PencilSquareIcon,
    CircleStackIcon,
    ArrowUpCircleIcon,
    AdjustmentsHorizontalIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    BuildingOffice2Icon,
    HomeModernIcon,
    AcademicCapIcon,
    TruckIcon,
    VideoCameraIcon,
    MoonIcon,
    BellAlertIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        id: "installation",
        title: "Installation",
        icon: WrenchScrewdriverIcon,
        heading: "Professional CCTV Installation",
        description:
            "We install advanced CCTV systems with precise camera placement, structured wiring, and seamless configuration.",
        points: [
            "Site Assessment & Consultation",
            "Customized Camera Placement",
            "Ultra HD & Night Vision Cameras",
            "Remote Viewing Setup",
            "Complete Testing & Handover",
        ],
        image: "/images/security-camera-building.jpg",
    },
    {
        id: "maintenance",
        title: "Maintenance",
        icon: ArrowPathIcon,
        heading: "Ongoing System Maintenance",
        description:
            "Regular system checks to ensure your CCTV operates flawlessly 24/7.",
        points: [
            "Health Check & Diagnostics",
            "Camera Cleaning",
            "Firmware Updates",
            "Performance Optimization",
        ],
        image: "/images/maintenance.jpg",
    },
    {
        id: "monitoring",
        title: "Monitoring",
        icon: EyeIcon,
        heading: "24/7 Surveillance Monitoring",
        description:
            "Live remote monitoring and smart alert notifications for instant action.",
        points: [
            "Real-Time Alerts",
            "Mobile App Access",
            "Cloud Backup Support",
            "Central Monitoring Integration",
        ],
        image: "/images/monitoring.jpg",
    },
    {
        id: "design",
        title: "System Design",
        icon: PencilSquareIcon,
        heading: "Custom Security System Design",
        description:
            "We design tailored surveillance systems based on your property layout.",
        points: [
            "Risk Assessment",
            "Coverage Mapping",
            "Future Scalability Planning",
            "Budget Optimization",
        ],
        image: "/images/design.jpg",
    },
    {
        id: "storage",
        title: "Storage & Backup",
        icon: CircleStackIcon,
        heading: "Secure Storage & Backup",
        description:
            "Reliable storage solutions with secure data encryption and redundancy.",
        points: [
            "NVR / DVR Setup",
            "Cloud Backup",
            "Data Encryption",
            "Long-Term Storage Options",
        ],
        image: "/images/storage.jpg",
    },
    {
        id: "upgrade",
        title: "Upgrade",
        icon: ArrowUpCircleIcon,
        heading: "System Upgrade Services",
        description:
            "Upgrade outdated systems to high-resolution smart surveillance solutions.",
        points: [
            "Camera Replacement",
            "AI Feature Integration",
            "Resolution Enhancement",
            "System Expansion",
        ],
        image: "/images/upgrade.jpg",
    },
    {
        id: "configuration",
        title: "Configuration",
        icon: AdjustmentsHorizontalIcon,
        heading: "System Configuration",
        description:
            "Professional setup and fine-tuning for maximum efficiency.",
        points: [
            "Motion Detection Setup",
            "Alert Customization",
            "User Access Control",
            "Mobile Sync Setup",
        ],
        image: "/images/configuration.jpg",
    },
    {
        id: "consultation",
        title: "Consultation",
        icon: ChatBubbleLeftRightIcon,
        heading: "Security Consultation",
        description:
            "Expert advice to help you choose the right CCTV solution.",
        points: [
            "On-Site Evaluation",
            "Budget Planning",
            "Security Risk Analysis",
            "Future Expansion Planning",
        ],
        image: "/images/consultation.jpg",
    },
];

export default function CCTVPage() {
    const [active, setActive] = useState(services[0]);

    return (
        <div className="text-gray-900">

            {/* HERO */}
            <section className="bg-black text-white md:py-28 pt-26 pb-8 px-5 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="md:text-5xl text-3xl font-bold md:mb-6 mb-3">
                        Advanced CCTV Security Solutions
                    </h1>
                    <p className="text-gray-300 max-w-2xl">
                        Smart surveillance systems designed to protect homes, offices,
                        and commercial properties with reliability and precision.
                    </p>
                </div>
            </section>

            {/* SERVICE SELECTOR */}
            <section className="bg-gray-100 md:py-16 py-12 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = active.id === service.id;

                        return (
                            <button
                                key={service.id}
                                onClick={() => setActive(service)}
                                className={`p-3 md:p-6 rounded-xl transition-all text-left ${isActive
                                        ? "bg-black text-white shadow-xl"
                                        : "bg-white hover:shadow-md"
                                    }`}
                            >
                                <Icon
                                    className={`w-8 h-8 mb-3 ${isActive ? "text-white" : "text-black"
                                        }`}
                                />
                                <h4 className="font-semibold">{service.title}</h4>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* DYNAMIC SERVICE CONTENT */}
            <section className="md:py-24 py-12 px-5 md:px-20 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="md:text-4xl text-3xl font-bold mb-6">
                            {active.heading}
                        </h2>
                        <p className="text-gray-600 md:mb-8 mb-4">
                            {active.description}
                        </p>

                        <div className="md:space-y-4 space-y-2">
                            {active.points.map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-black mt-1" />
                                    <span className="text-gray-700">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Image
                            src={active.image}
                            alt={active.title}
                            width={600}
                            height={350}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="md:py-24 py-12 px-5 md:px-20 bg-slate-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-16 gap-8 items-center">

                    <div>
                        <h2 className="md:text-4xl text-3xl font-bold md:mb-6 mb-3">
                            Why Choose Our CCTV Solutions
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We deliver intelligent security systems designed with precision,
                            reliability, and future scalability in mind.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
                            Get Consultation
                        </button>
                    </div>

                    <div className="md:space-y-8 space-y-4 border-l-2 border-black md:pl-8 pl-4">
                        <div>
                            <h4 className="font-semibold text-lg">Certified Technicians</h4>
                            <p className="text-gray-600 text-sm">
                                Experienced professionals ensuring secure installation.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Smart AI Features</h4>
                            <p className="text-gray-600 text-sm">
                                Motion detection, facial alerts & remote access.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">24/7 Reliability</h4>
                            <p className="text-gray-600 text-sm">
                                Continuous monitoring and system uptime.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="md:py-24 py-12 px-5 md:px-20 bg-white text-center">
                <h2 className="md:text-4xl text-3xl font-bold md:mb-16 mb-8">Industries We Serve</h2>

                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-6">

                    {[
                        { name: "Hotel", icon: BuildingOffice2Icon },
                        { name: "Property", icon: HomeModernIcon },
                        { name: "Schools", icon: AcademicCapIcon },
                        { name: "Distribution", icon: TruckIcon },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="group space-y-4">
                                <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center transition group-hover:bg-black">
                                    <Icon className="w-8 h-8 text-black group-hover:text-white transition" />
                                </div>
                                <h4 className="font-semibold">{item.name}</h4>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* SECURITY FEATURES - PREMIUM */}
            <section className="md:py-24 py-12 px-5 md:px-20 bg-slate-50">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="md:text-4xl text-3xl font-bold">Advanced Security Features</h2>
                        <p className="text-gray-600 md:mt-4 mt-2 max-w-2xl mx-auto">
                            Our CCTV systems are built with intelligent technology to ensure
                            maximum protection, clarity, and real-time monitoring.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-10 gap-5">

                        {/* Feature 1 */}
                        <div className="bg-white border border-gray-200 rounded-2xl md:p-10 p-5 hover:shadow-xl transition">
                            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mb-6">
                                <VideoCameraIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Ultra High Resolution
                            </h3>
                            <p className="text-gray-600">
                                Capture every detail clearly with 4K & HD surveillance cameras
                                designed for day and night clarity.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white border border-gray-200 rounded-2xl md:p-10 p-5 hover:shadow-xl transition">
                            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mb-6">
                                <MoonIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Advanced Night Vision
                            </h3>
                            <p className="text-gray-600">
                                Infrared and low-light technology ensures 24/7 visibility even in
                                complete darkness.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white border border-gray-200 rounded-2xl md:p-10 p-5 hover:shadow-xl transition">
                            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mb-6">
                                <BellAlertIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Smart Motion Detection
                            </h3>
                            <p className="text-gray-600">
                                Get real-time alerts instantly when unusual activity is detected
                                through intelligent monitoring.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <Testimonials />

                {/* FINAL CTA */}
                <section className="md:py-24 py-12 px-5 text-center bg-gray-100">
                    <h2 className="md:text-4xl text-3xl font-bold md:mb-6 mb-3">
                        Secure Your Property Today
                    </h2>
                    <p className="text-gray-600 md:mb-8 mb-4">
                        Get a customized CCTV solution designed for your property.
                    </p>
                    <button className="bg-black text-white md:px-10 px-5 md:py-4 py-3 rounded-lg hover:bg-gray-800 transition">
                        Request Free Quote
                    </button>
                </section>
        </div>
    );
}