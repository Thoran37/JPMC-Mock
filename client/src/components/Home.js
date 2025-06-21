import React from "react";
import { motion } from "framer-motion";
import { Droplet, Globe, School, HeartHandshake } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="font-sans bg-blue-50 text-gray-800">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-6 text-center relative overflow-hidden">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Every Drop Counts
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Join Jaldhaara Foundation in transforming water access for India's
          most vulnerable communities. Clean water isn't a luxury—it's a right.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100"
        >
          <NavLink to="/donate">
            <span className="flex items-center gap-2">
              <Droplet size={20} />
              Get Involved
            </span>
          </NavLink>
        </motion.button>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-800">Why Water Matters</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          78 million people globally lack access to clean drinking water.
          Jaldhaara is changing that—community by community.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-blue-100 rounded-2xl shadow">
            <Droplet className="mx-auto text-blue-700" size={40} />
            <h3 className="mt-4 text-xl font-semibold">Affordable Access</h3>
            <p className="mt-2">
              20L of purified water at just ₹8–₹10—thanks to partnerships with
              local governments and WaterHealth.
            </p>
          </div>
          <div className="p-6 bg-blue-100 rounded-2xl shadow">
            <School className="mx-auto text-blue-700" size={40} />
            <h3 className="mt-4 text-xl font-semibold">Water for Schools</h3>
            <p className="mt-2">
              Delivering clean water to schools helps reduce absenteeism by 49%
              and improves student health.
            </p>
          </div>
          <div className="p-6 bg-blue-100 rounded-2xl shadow">
            <Globe className="mx-auto text-blue-700" size={40} />
            <h3 className="mt-4 text-xl font-semibold">Sustainable Impact</h3>
            <p className="mt-2">
              Partnering with Maithri Aquatech for innovative solutions like
              MEGHDOOT atmospheric water generators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-100 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800">
          What We Do
        </h2>
        <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              Decentralized Water Systems
            </h3>
            <p className="mt-4">
              450+ WaterHealth Centers (WHCs) purify and distribute water in
              underserved rural and urban communities across India.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              Build-Operate-Transfer Model
            </h3>
            <p className="mt-4">
              Jaldhaara collaborates with local panchayats to install long-term
              purification units with 20–25 year concession agreements.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              Community Awareness Programs
            </h3>
            <p className="mt-4">
              Our WASH campaigns drive behavioral change around hygiene and
              sanitation practices in remote communities.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              Youth Engagement & DSP Network
            </h3>
            <p className="mt-4">
              We empower young entrepreneurs (Delivery Service Providers) to
              deliver water to schools and homes efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-800">Our Impact So Far</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">7M+</h3>
            <p className="mt-2">Lives Impacted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-700">450+</h3>
            <p className="mt-2">WaterHealth Centers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-700">2000+</h3>
            <p className="mt-2">Communities Reached</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-700">49%</h3>
            <p className="mt-2">Absenteeism Reduced</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-800">
          In Partnership With
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          <img
            src="/assets/waterhealth_logo.jpg"
            alt="WaterHealth"
            className="h-20"
          />
          <img
            src="/assets/maithri_logo.jpg"
            alt="Maithri Aquatech"
            className="h-20"
          />
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-700 text-white text-center">
        <HeartHandshake className="mx-auto" size={48} />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Help Us Transform More Lives
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We need your support to expand our work and bring clean water to
          thousands more. Corporate donors and individuals can make a huge
          difference.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100"
        >
          <NavLink to="/donate">
            <span className="flex items-center gap-2">
              <Droplet size={20} />
              Make a Donation
            </span>
          </NavLink>
        </motion.button>
      </section>

      <footer className="py-12 bg-blue-900 text-white text-center">
        <p>
          © 2025 Jaldhaara Foundation | Empowering Communities Through Clean
          Water
        </p>
        <p className="mt-2 text-sm">
          Registered under Companies Act 2013 | NGO | CSR Compliant
        </p>
      </footer>
    </div>
  );
}
