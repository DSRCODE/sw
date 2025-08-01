"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Panel = () => {
  const { t } = useTranslation();
  const steps = [
    {
      number: [t("panel.questionsection.steps.s1.no")],
      title: [t("panel.questionsection.steps.s1.title")],
      description: [t("panel.questionsection.steps.s1.desc")],
      color: "text-purple-400",
    },
    {
      number: [t("panel.questionsection.steps.s2.no")],
      title: [t("panel.questionsection.steps.s2.title")],
      description: [t("panel.questionsection.steps.s2.desc")],
      color: "text-gray-300",
    },
    {
      number: [t("panel.questionsection.steps.s3.no")],
      title: [t("panel.questionsection.steps.s3.title")],
      description: [t("panel.questionsection.steps.s3.desc")],
      color: "text-teal-400",
    },
    {
      number: [t("panel.questionsection.steps.s4.no")],
      title: [t("panel.questionsection.steps.s4.title")],
      description: [t("panel.questionsection.steps.s4.desc")],
      color: "text-pink-400",
    },
    {
      number: [t("panel.questionsection.steps.s5.no")],
      title: [t("panel.questionsection.steps.s5.title")],
      description: [t("panel.questionsection.steps.s5.desc")],
      color: "text-purple-400",
    },
    {
      number: [t("panel.questionsection.steps.s6.no")],
      title: [t("panel.questionsection.steps.s6.title")],
      description: [t("panel.questionsection.steps.s6.desc")],
      color: "text-gray-300",
    },
    {
      number: [t("panel.questionsection.steps.s7.no")],
      title: [t("panel.questionsection.steps.s7.title")],
      description: [t("panel.questionsection.steps.s7.desc")],
      color: "text-teal-400",
    },
    {
      number: [t("panel.questionsection.steps.s8.no")],
      title: [t("panel.questionsection.steps.s8.title")],
      description: [t("panel.questionsection.steps.s8.desc")],
      color: "text-pink-400",
    },
    {
      number: [t("panel.questionsection.steps.s9.no")],
      title: [t("panel.questionsection.steps.s9.title")],
      description: [t("panel.questionsection.steps.s9.desc")],
      color: "text-purple-400",
    },
    {
      number: [t("panel.questionsection.steps.s10.no")],
      title: [t("panel.questionsection.steps.s10.title")],
      description: [t("panel.questionsection.steps.s10.desc")],
      color: "text-gray-300",
    },
    {
      number: [t("panel.questionsection.steps.s11.no")],
      title: [t("panel.questionsection.steps.s11.title")],
      description: [t("panel.questionsection.steps.s11.desc")],
      color: "text-teal-400",
    },
    {
      number: [t("panel.questionsection.steps.s12.no")],
      title: [t("panel.questionsection.steps.s12.title")],
      description: [t("panel.questionsection.steps.s12.desc")],
      color: "text-pink-400",
    },
    {
      number: [t("panel.questionsection.steps.s13.no")],
      title: [t("panel.questionsection.steps.s13.title")],
      description: [t("panel.questionsection.steps.s13.desc")],
      color: "text-purple-400",
    },
    {
      number: [t("panel.questionsection.steps.s14.no")],
      title: [t("panel.questionsection.steps.s14.title")],
      description: [t("panel.questionsection.steps.s14.desc")],
      color: "text-gray-300",
    },
    {
      number: [t("panel.questionsection.steps.s15.no")],
      title: [t("panel.questionsection.steps.s15.title")],
      description: [t("panel.questionsection.steps.s15.desc")],
      color: "text-teal-400",
    },
    {
      number: [t("panel.questionsection.steps.s16.no")],
      title: [t("panel.questionsection.steps.s16.title")],
      description: [t("panel.questionsection.steps.s16.desc")],
      color: "text-pink-400",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/08/21/34/95/360_F_821349579_jKh8aTJHeOWZqilgMc4Ma5huEpxuSVaD.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen text-white px-4 py-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("panel.herosection.title")}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl font-light mb-8 max-w-6xl px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {t("panel.herosection.subheading")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 items-center justify-center w-full px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* SIGN UP NOW Button */}
          <Link href={"/signup"}>
            <motion.button
              className="w-full sm:w-64 md:w-72 py-4 text-base sm:text-lg md:text-xl rounded-full font-bold text-white bg-pink-600 border-2 border-pink-600 hover:bg-pink-700 hover:border-pink-700 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {t("signup.signup").toUpperCase()}
            </motion.button>
          </Link>

          {/* LOGIN Button */}
          <Link href={"/signin"}>
            <motion.button
              className="w-full sm:w-64 md:w-72 py-4 text-base sm:text-lg md:text-xl rounded-full font-bold text-white border-2 border-white bg-transparent hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {t("signin.login")}
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Details Section */}
      <section
        className="text-white py-20 px-4 md:px-16 relative z-10"
        style={{ background: "linear-gradient(180deg, #02000f, #001238)" }}
      >
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
            💬 Share Your Voice. 🎉 Get Rewarded.
          </h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-500 text-transparent bg-clip-text">
            {t("panel.detailssection.title")}
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 px-2 sm:px-6">
            {t("panel.detailssection.subheading")}
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
          {[
            {
              title: [t("panel.cardsection.t1.title")],
              desc: [t("panel.cardsection.t1.desc")],
            },
            {
              title: [t("panel.cardsection.t2.title")],
              desc: [t("panel.cardsection.t2.desc")],
            },
            {
              title: [t("panel.cardsection..title")],
              desc: [t("panel.cardsection.t3.desc")],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative p-[1px] rounded-2xl shadow-xl transition duration-300
    ${index === 0 ? "bg-gradient-to-br from-pink-500 to-purple-500" : ""}
    ${index === 1 ? "bg-gradient-to-br from-green-400 to-blue-500" : ""}
    ${index === 2 ? "bg-gradient-to-br from-yellow-400 to-pink-500" : ""}
  `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0f132497] rounded-2xl p-6 border border-[#1f2b4a]">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  Frequently Asked Questions Section */}
      <section className="bg-black py-16 px-4 md:px-10  relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-left mb-6">
            {t("panel.questionsection.header.title")}
            <br />
            <span className="text-lg text-gray-400 font-normal">
              {t("panel.questionsection.header.desc")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {steps.map((step, index) => {
              const floatClass = index % 2 === 0 ? "float-left" : "float-right";

              return (
                <motion.div
                  key={index}
                  className={`relative ${floatClass} hover-shine overflow-hidden bg-[#0B1220] rounded-xl p-6 shadow-md text-white hover:shadow-pink-500/30 transition-shadow duration-300`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <div className="relative z-10">
                    <div className={`text-4xl font-bold mb-2 ${step.color}`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panel;
