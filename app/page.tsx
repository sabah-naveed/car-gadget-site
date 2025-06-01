// app/page.tsx
"use client"; 
import React from "react";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">GearDrive</h1>
          <ul className="flex space-x-6 text-base">
            <li>
              <a href="#reviews" className="hover:underline">
                Reviews
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:underline">
                Guides
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Parallax Background */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Parallax background (replace with your own image or 3D canvas) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/car-dashboard.jpg')" }}
          initial={{ y: 0 }}
          whileInView={{ y: -50 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        />
        {/* Overlay text */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center px-6">
            <motion.h2
              className="text-white text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Ultimate Car Gadgets of 2025
            </motion.h2>
            <motion.p
              className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Discover top dash cams, smart chargers, and all the accessories to keep your ride ahead of the curve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Gadgets Grid */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <section id="reviews" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8">Featured Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((item) => (
              <motion.article
                key={item}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="h-48 bg-gray-200">
                  {/* Replace with product image or 3D embed */}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2">Gadget Name {item}</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A quick one-line summary about why this gadget rocks—or why you might skip it.
                  </p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:underline">
                    Read Full Review →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* How‐To Guides Section */}
        <section id="guides" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8">Quick Guides</h3>
          <ul className="space-y-6">
            {[
              "How to Choose the Best Dash Cam",
              "Installing a Wireless Car Charger in 5 Steps",
              "Top 5 OBD-II Scanners Under $50",
            ].map((guide, idx) => (
              <motion.li
                key={idx}
                className="bg-white rounded-xl shadow-sm p-6"
                whileHover={{ translateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-medium">{guide}</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Brief intro to what you’ll learn in this guide.
                </p>
                <a href="#" className="mt-3 inline-block text-blue-600 font-semibold hover:underline">
                  View Guide →
                </a>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* About / Mission Statement */}
        <section id="about" className="mb-20 text-center">
          <h3 className="text-3xl font-semibold mb-4">About GearDrive</h3>
          <p className="max-w-2xl mx-auto text-gray-700">
            GearDrive is dedicated to helping car enthusiasts find the latest and greatest gadgets—
            from safety-first dash cams to sleek interior upgrades. We test, review, and link you
            directly to Amazon so you can shop with confidence.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center text-gray-600 text-sm">
          © 2025 GearDrive.{" "}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </footer>
    </div>
  );
}
