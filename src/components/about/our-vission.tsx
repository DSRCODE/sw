"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const sections = (t: any) => [
  {
    title: t("sections.0.title"),
    content: t("sections.0.content"),
    image: "/vission-1.jpg",
  },
  {
    title: t("sections.1.title"),
    content: t("sections.1.content"),
    image: "/vission-2.jpg",
  },
  {
    title: t("sections.2.title"),
    content: t("sections.2.content"),
    image: "/vission-3.png",
  },
  {
    title: t("sections.3.title"),
    content: t("sections.3.content"),
    image: "/vission-4.png",
  },
  {
    title: t("sections.4.title"),
    content: t("sections.4.content"),
    image: "/vission-5.png",
  },
];

export default function OurVission() {
  const { t } = useTranslation();
  const translatedSections = sections(t);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  // console.log(activeIndex);
  // console.log(scrollYProgress);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const sectionHeight = window.innerHeight * 0.6;
      const scrollPosition = window.scrollY - (window.scrollY + top);
      const newIndex = Math.floor(scrollPosition / sectionHeight);

      setActiveIndex(Math.min(sections.length - 1, Math.max(0, newIndex)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative text-white container">
      <motion.h2
        className="md:text-5xl text-3xl sticky top-28 max-w-[300px] text-center font-semibold mx-auto"
        animate={
          activeIndex === sections.length - 1
            ? { y: -200, opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 0.5 }}
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Vision
        </span>{" "}
        <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          and
        </span>{" "}
        Mission
      </motion.h2>

      {translatedSections.map((section, index) => {
        return (
          <motion.div
            key={index}
            className={`sticky md:top-[210px] top-[180px] left-0 w-full md:h-[70vh] h-[65vh] flex items-center justify-center `}
            style={{ zIndex: sections.length + index }}
          >
            <motion.div className="">
              <Card className="md:h-[330px] h-[450px] bg-gray-800 rounded-2xl shadow-xl">
                <CardContent className="md:grid md:grid-cols-2 flex flex-col gap-4 items-center h-full">
                  <div className="md:h-full h-[200px] ">
                    <Image
                      width={500}
                      height={260}
                      src={section.image || "/vission-3.png"}
                      alt={section.title}
                      className="h-full rounded-2xl  object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="md:text-2xl text-xl font-bold mb-4">
                      {section.title}
                    </h2>
                    <p className="md:text-lg text-sm">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
