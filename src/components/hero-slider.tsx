"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "react-use-gesture";
import { useTranslation } from "react-i18next";



const HeroSlider = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      content: () => (
        <>
          <h2 className="md:text-5xl text-3xl font-bold md:mb-6 mb-4">
            {t("slides.slide1.heading")}
          </h2>
          <p className="md:mb-8 mb-5 text-sm md:text-base">
            <span className="opacity-80">
              {t("slides.slide1.intro1")}&nbsp;
            </span>
            <span className="font-bold">Surventix</span>
            <span className="opacity-80">
              ,&nbsp;{t("slides.slide1.intro2")}
            </span>
          </p>
          <p className="mb-4 font-bold md:text-xl text-lg">
            {t("slides.slide1.tagline")}
          </p>
          <p>
            <span className="font-bold">Surventix</span>&nbsp;
            <span className="opacity-80">{t("slides.slide1.detail")}</span>
          </p>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80...",
    },
    {
      content: () => (
        <>
          <h2 className="md:text-5xl text-3xl font-bold md:mb-6 mb-4">
            {t("slides.slide2.heading")}
          </h2>
          <p className="mb-8">
            <span className="opacity-80">
              {t("slides.slide2.intro1")}&nbsp;
            </span>
            <span className="font-bold">Surventix</span>
            <span className="opacity-80">
              ,&nbsp;{t("slides.slide2.intro2")}
            </span>
          </p>
          <p className="mb-4 font-bold md:text-xl text-lg">
            {t("slides.slide2.tagline")}
          </p>
          <p>
            <span className="opacity-80">
              {t("slides.slide2.detail1")}&nbsp;
            </span>
            <span className="font-bold">{t("slides.slide2.detail2")}</span>
          </p>
          <div className="flex gap-4 md:mt-10 mt-5">
            <a
              href="mailto:sales@surventix.com"
              className="border-white border flex justify-center items-center h-10 px-6 rounded transition-all ease-in-out duration-200 hover:bg-[#FF1479] hover:border-[#FF1479]"
            >
              {t("slides.contact")}
            </a>
          </div>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80...",
    },
    {
      content: () => (
        <>
          <h2 className="md:text-5xl text-3xl font-bold md:mb-6 mb-4">
            {t("slides.slide3.heading")}
          </h2>
          <p className="mb-8">
            <span className="opacity-80">
              {t("slides.slide3.intro1")}&nbsp;
            </span>
            <span className="font-bold">Surventix</span>&nbsp;
            <span className="opacity-80">{t("slides.slide3.intro2")}</span>
          </p>
          <p className="mb-4 font-bold md:text-xl text-lg">
            {t("slides.slide3.tagline")}
          </p>
          <div className="flex gap-4 md:mt-10 mt-5">
            <a
              href="mailto:sales@surventix.com"
              className="border-white border flex justify-center items-center h-10 px-6 rounded transition-all ease-in-out duration-200 hover:bg-[#FF1479] hover:border-[#FF1479]"
            >
              {t("slides.contact")}
            </a>
          </div>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80...",
    },
  ];

  const changeSlide = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
    setIsPaused(true);
    clearTimeout(timeoutRef.current!);

    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current!);
  }, [index, isPaused]);

  const bind = useDrag(({ delta }) => {
    if (Math.abs(delta[0]) > 50) {
      setIsPaused(false);
      setDirection(delta[0] > 0 ? -1 : 1);
      setIndex((prev) =>
        delta[0] > 0
          ? prev === 0
            ? slides.length - 1
            : prev - 1
          : (prev + 1) % slides.length
      );
    }
  });

  return (
    <div className="relative w-full mx-auto overflow-hidden" {...bind()}>
      <div className="relative w-full md:h-screen h-[110vh] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            className="absolute w-full h-full flex flex-col-reverse md:flex-row items-center"
            initial={{ x: direction * 100 + "%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: -direction * 100 + "%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute w-full md:h-full md:top-0 top-[30%] pt-5 md:pt-0  flex flex-col justify-center">
              <div className="container ">
                <div className="md:w-1/2 md:pr-10">
                  {slides[index].content()}
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex-1 md:flex-auto w-full flex flex-col justify-center p-8 bg-[#003B64] text-white md:h-full"></div>

            {/* Image Section */}
            <div className="md:w-1/2 h-[30%] md:h-full w-full">
              <img
                src={slides[index].image}
                className="w-full h-full object-cover"
                alt="Slide Image"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
              index === i ? "bg-white w-4" : "bg-gray-400"
            }`}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
