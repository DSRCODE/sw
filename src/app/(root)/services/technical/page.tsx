"use client";
import { TECHNICAL_SOLUTIONS } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();
  const TECHNICAL_SOLUTIONS_DATA = TECHNICAL_SOLUTIONS(t);
  return (
    <div className="">
      <div
        className="md:h-screen h-[70vh] bg-cover fixed top-0 w-full bg-center"
        style={{
          background: "url(/surv-bg4.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[70vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container md:pt-40 pt-32">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] md:font-bold font-semibold border-b border-[#ffffff4d]">
            <Link href="/">{t("nav.home")}</Link> <span>/</span>{" "}
            <Link href="/services">({t("nav.our_services")})</Link>{" "}
            <span>/</span> <div>{t("technicalSolutions.title")}</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              {t("technicalSolutions.title")}
            </h1>
            <p className="max-w-[700px] md:text-2xl text-base tracking-[0.5px] mb-6">
              {" "}
              {t("technicalSolutions.subheading")}
            </p>

            <a
              href="#services"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              {t("technicalSolutions.browseNow")}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="services" className="bg-[#02000F] relative md:py-20 py-12">
        <div className="container">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] md:mb-16 mb-10">
            {t("technicalSolutions.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TECHNICAL_SOLUTIONS_DATA.map((item, index) => (
              <div
                key={index}
                className="relative h-[350px] rounded-md group overflow-hidden"
              >
                <div className="absolute inset-0">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
                    src={item.image}
                    width={400}
                    height={400}
                    alt={item.title}
                  />
                </div>

                <div className="relative h-full w-full bg-gradient-to-t from-black/80 to-black/50 flex flex-col justify-end p-5">
                  <h3 className="md:text-2xl text-xl font-medium mb-5">
                    {item.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-white text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
