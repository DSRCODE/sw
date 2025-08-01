"use client";
import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    description:
      "Welcome to our platform. We value your privacy and are committed to protecting your personal data.",
  },
  {
    title: "2. Information We Collect",
    points: [
      "Personal info (name, email, etc.)",
      "Account settings and preferences",
      "Usage logs and session data",
      "Device and browser information",
    ],
  },
  {
    title: "3. How We Use Your Information",
    description:
      "We use your data to operate and improve our services, and to communicate important updates.",
    points: [
      "Managing your account",
      "Sending service updates or promotional content",
      "Protecting against fraud and abuse",
    ],
  },
  {
    title: "4. Data Sharing & Disclosure",
    points: [
      "Trusted partners (under confidentiality agreements)",
      "Law enforcement (when legally required)",
      "Your consent (where applicable)",
    ],
  },
  {
    title: "5. Your Rights",
    description:
      "You are in control of your data. You can manage or request changes anytime.",
    points: [
      "View, update, or delete your data",
      "Withdraw consent",
      "Request a copy of your data",
    ],
  },
  {
    title: "6. Data Security",
    description:
      "We use industry-standard practices to keep your information safe and secure.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0B1220] min-h-screen px-4 sm:px-10 py-16 text-white font-sans mt-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
      >
        Privacy Policy
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-10">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111827] p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-md hover:shadow-pink-500/20 transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              {sec.title}
            </h2>

            {sec.description && (
              <p className="text-gray-300 mb-4">{sec.description}</p>
            )}

            {sec.points && (
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                {sec.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
