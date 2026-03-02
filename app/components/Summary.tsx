import React from 'react'
const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Satisfied Clients", value: "1500+" },
  { label: "Installations Completed", value: "3000+" },
  { label: "Support Tickets Closed", value: "5000+" },
];

function Summary() {
  return (
    <>
    <section className="max-w-7xl mx-auto md:mb-20 mb-10 px-5">
      <h1 className="text-4xl sm:text-5xl font-bold text-(--color-primary) mb-8 max-w-3xl">
        End-to-End CCTV Solutions for Your Home and Business
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
          <img src="/images/residential-camera.jpg" alt="Residential CCTV" className="w-full h-60 object-cover" />
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg mb-2">Residential CCTV</h3>
            <p className="text-gray-600 text-sm">
              Smart home security cameras with remote monitoring and real-time alerts.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
          <img src="/images/dome-camera.jpg" alt="Commercial CCTV" className="w-full h-60 object-cover" />
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg mb-2">Commercial CCTV</h3>
            <p className="text-gray-600 text-sm">
              High-definition cameras and intelligent monitoring for business premises.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
          <img src="/images/bullet-camera.jpg" alt="24/7 Monitoring" className="w-full h-60 object-cover" />
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg mb-2">24/7 Monitoring Service</h3>
            <p className="text-gray-600 text-sm">
              Continuous expert monitoring to keep your property safe and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
    
   <section className="max-w-7xl mx-auto md:py-16 pt-8 px-5 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      {stats.map(({ label, value }, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <p className="text-4xl md:text-6xl font-extrabold text-(--color-primary)">{value}</p>
          <p className="text-sm md:text-md mt-2 text-gray-700 font-medium">{label}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Summary