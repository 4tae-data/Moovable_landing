import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Wrench,
  CreditCard,
  Users,
  BarChart3,
  ShoppingBag,
  MapPin,
  Briefcase,
  Package,
  CheckCircle2,
} from "lucide-react";
import "./index.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJmxwov5wvmJvWDTatjcaDH_OUfNQfl_ofs5Ksj03h2QodhnyFMM4D25hys_XvEVDv0w/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        alert("Thanks for joining the waitlist!");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const solutions = [
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: "Asset Financing & Leasing",
      desc: "Low-cost access to vehicles and equipment so entrepreneurs can start without heavy capital outlay.",
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      title: "Marketplace & Customer Access",
      desc: "Connect with shippers and SMEs; accept jobs from the platform and grow revenue instantly.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: "Maintenance & Spare Parts Hub",
      desc: "On-demand parts and vetted technicians to reduce downtime and extend asset life.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Driver Training & Certification",
      desc: "Professional training programs to improve safety, efficiency and customer satisfaction.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs, profit/loss, route analytics and inventory insights to run smarter operations.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-yellow-500" />,
      title: "E-commerce & SME Integration",
      desc: "Plug-and-play integrations with online sellers and marketplaces for scalable demand.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <div className="w-10 h-10 rounded-md bg-black text-yellow-400 flex items-center justify-center font-bold">
              M
            </div>
            <div className="font-semibold">Moovable</div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => scrollTo("solutions")}
              className="hover:text-yellow-500"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollTo("why")}
              className="hover:text-yellow-500"
            >
              Why Moovable
            </button>
            <button
              onClick={() => scrollTo("shipment")}
              className="hover:text-yellow-500"
            >
              Shipment Locator
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className="hover:text-yellow-500"
            >
              Customers
            </button>
            <button
              onClick={() => scrollTo("vision")}
              className="hover:text-yellow-500"
            >
              Vision
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:opacity-90"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="pt-20">
        <section className="text-center py-28 bg-gradient-to-r from-black to-yellow-500 text-white relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Democratizing Logistics in Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Moovable is a plug-and-play logistics ecosystem — finance, operations,
            maintenance, and customers in one platform so entrepreneurs and SMEs
            can start and scale quickly.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 max-w-xl mx-auto px-4"
          >
            <input
              type="email"
              required
              placeholder="Your email or company"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-yellow-400 px-5 py-3 rounded-xl font-semibold"
            >
              Join Waitlist
            </motion.button>
          </motion.form>
        </section>
      </header>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-6 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Solutions
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-yellow-400 hover:shadow-xl transition"
            >
              <div className="mb-4">{s.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-gray-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Moovable */}
      <section id="why" className="py-20 bg-yellow-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Moovable?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-lg mb-2">
                <Users className="w-5 h-5 text-yellow-500" /> Entrepreneurs
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Financing options & leasing plans</li>
                <li>Access to marketplace demand</li>
                <li>Training for drivers & mechanics</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-lg mb-2">
                <Briefcase className="w-5 h-5 text-yellow-500" /> SMEs / Businesses
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Seamless logistics tailored to needs</li>
                <li>Multiple transport providers in one ecosystem</li>
                <li>Reliable, cost-efficient deliveries</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-lg mb-2">
                <Truck className="w-5 h-5 text-yellow-500" /> Logistics Companies
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Smart shipment locator for nearby loads</li>
                <li>Match return trips with shipments</li>
                <li>Increase profitability & reduce empty miles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shipment Locator */}
      <section id="shipment" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://img.freepik.com/free-photo/agricultural-silo_146671-19117.jpg?semt=ais_incoming&w=740&q=80"
            alt="Shipment Locator"
            className="rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-yellow-500" />
              Shipment Locator
            </h3>
            <p className="text-gray-700 mb-6">
              Our Shipment Locator helps logistics companies optimize every trip.
              Instantly discover nearby shipments after drop-off, reduce empty
              returns, and maximize route profitability.
            </p>

            {/* Animated flow infographic */}
            <div className="flex items-center justify-between text-yellow-600 font-medium">
              {[
                { icon: <Package className="w-8 h-8 mb-1" />, label: "Find" },
                { icon: <Truck className="w-8 h-8 mb-1" />, label: "Pickup" },
                { icon: <MapPin className="w-8 h-8 mb-1" />, label: "Track" },
                { icon: <CheckCircle2 className="w-8 h-8 mb-1" />, label: "Deliver" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                  <span className="text-sm">{step.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-6 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold mb-8">Customers & Early Partners</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-6 rounded-xl shadow"
          >
            <p className="italic">
              “We scaled deliveries 3x after integrating Moovable’s dashboard.”
            </p>
            <footer className="mt-4">— Fleet Manager, E-commerce</footer>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-6 rounded-xl shadow"
          >
            <p className="italic">
              “Parts delivery and technician booking reduced our downtime
              drastically.”
            </p>
            <footer className="mt-4">— Workshop Owner</footer>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-6 rounded-xl shadow"
          >
            <p className="italic">
              “The leasing option let us launch with one truck and zero heavy
              capital.”
            </p>
            <footer className="mt-4">— Logistics Entrepreneur</footer>
          </motion.div>
        </div>
      </section>

      {/* Vision & CTA */}
      <section
        id="vision"
        className="py-20 bg-gray-900 text-white text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Our Vision
        </motion.h2>
        <p className="max-w-3xl mx-auto mb-8">
          To become Africa’s logistics backbone — a platform that enables
          millions of entrepreneurs to build sustainable logistics businesses
          and connect trade across the continent.
        </p>

        <div id="cta" className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              required
              placeholder="Work email or company"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
            >
              Join Waitlist
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} Moovable Limited — Built for African
          entrepreneurs.
        </div>
      </footer>
    </div>
  );
}
