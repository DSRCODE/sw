"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Counter = ({ target }: { target: number }) => {
  const { t } = useTranslation();
  const count = useMotionValue(0);
  const springValue = useSpring(count, { stiffness: 100, damping: 20 });
  const { ref, inView } = useInView({ triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className="md:text-5xl text-3xl font-bold">
      {displayValue.toLocaleString()}
      {"+"}
    </span>
  );
};

const OurJourney = () => {
  const { t } = useTranslation();
  const data = [
    { label: t("ourJourney.stats.bids"), value: 5000 },
    { label: t("ourJourney.stats.projects"), value: 1000 },
    { label: t("ourJourney.stats.completes"), value: 200000 },
    { label: t("ourJourney.stats.clients"), value: 40 },
  ];
  return (
    <div className="container flex flex-col items-center md:pt-20 pt-16">
      <h2 className="md:text-5xl text-3xl max-w-[550px] text-center font-semibold">
        {t("ourJourney.title.start")}{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to bg-yellow-500 bg-clip-text text-transparent">
          {t("ourJourney.title.highlight1")}
        </span>{" "}
        {t("ourJourney.title.middle")}{" "}
        <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to bg-pink-500 bg-clip-text text-transparent">
          {t("ourJourney.title.highlight2")}
        </span>{" "}
        {t("ourJourney.title.end")}{" "}
        <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to bg-purple-500 bg-clip-text text-transparent">
          {t("ourJourney.title.highlight3")}
        </span>
      </h2>

      <p className="max-w-[750px] md:mt-6 mt-4 text-center opacity-70">
        {t("ourJourney.description")}
      </p>
      <div className="md:mt-20 mt-8 mb-10 grid md:grid-cols-4 grid-cols-1 w-full md:gap-10 gap-6 text-center">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#003B64]/20 rounded p-6 border-b-[5px] border-[#003B64]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Counter target={item.value} />
            <p className="uppercase opacity-70 tracking-[3px] font-light mt-4">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;
