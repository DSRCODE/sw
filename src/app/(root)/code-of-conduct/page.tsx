"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CodeOfConduct from "@/components/coc/CodeOfConduct";
import Ethics from "@/components/coc/Ethics";
import Commitment from "@/components/coc/Commitment";
import Faq from "@/components/coc/Faq";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background: "url(/surv-bg3.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">{t("nav.home")}</Link> <span>/</span>{" "}
            <div>{t("codeOfConduct.title")}</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              {t("codeOfConduct.title")}
            </h1>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-5">
              {t("codeOfConduct.subtitle")}
            </p>
            <p className="max-w-[800px] md:text-2xl text-base tracking-[0.5px] mb-6">
              {t("codeOfConduct.description")}
            </p>

            <a
              href="#coc"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              {t("readMore")}{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#02000F] relative">
        <CodeOfConduct />
        <Commitment />
        <Ethics />
        <Faq />
      </div>
    </div>
  );
};

export default Page;
