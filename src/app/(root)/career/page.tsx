"use client";

import CareerModal from "@/components/card/CareerModal";
import FAQcard from "@/components/card/FAQcard";
import JobCard from "@/components/card/JobCard";
import { OPPORTUNITIES } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  const benefits = t("careerPage.benefits", { returnObjects: true }) as {
    id: number;
    title: string;
    description: string;
  }[];

  const OPPORTUNITIES_DATA = OPPORTUNITIES(t);

  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background: "url(/bg.png)",
          backgroundPosition: "center",
        }}
      >
        <video
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          src="/bg-video.mp4"
        ></video>
      </div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">{t("careerPage.home")}</Link> <span>/</span>{" "}
            <div>{t("careerPage.career")}</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              {t("careerPage.heroTitle")} <br />
              {t("careerPage.subHeroTitle")}
            </h1>

            <a
              href="#coc"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              {t("careerPage.browseJobs")}{" "}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#02000F] relative">
        <div className="relative bg-[#02000F] md:pb-20 container pt-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="">
                <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
                  {t("careerPage.joinTeam")}
                </h2>

                <p className="max-w-[750px] mx-auto text-white/80">
                  {t("careerPage.joinTeamDesc")}
                </p>
              </div>
              <div>
                <video
                  muted
                  autoPlay
                  loop
                  className="rounded-4xl"
                  src="/career.mp4"
                  poster="/career.png"
                ></video>
              </div>
            </div>

            <div className="gap-8 md:grid-cols-3 grid md:mt-16  mt-8">
              {OPPORTUNITIES_DATA.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-[#00233C]"
                >
                  <div className="w-full aspect-video relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={item.image || ""}
                      width={400}
                      height={400}
                      alt={item.title}
                    />
                  </div>

                  <div className="bg-[#00233C] md:p-6 p-4 rounded-2xl -mt-10 relative">
                    <div>
                      <h3 className="md:text-3xl text-2xl md:mb-4 mb-3 font-semibold truncate">
                        {item.title}
                      </h3>
                      <p className="font-light md:text-base text-sm line-clamp-4 text-justify">
                        {item.content.join(" ")}
                      </p>
                    </div>
                    <CareerModal
                      title={item.title}
                      content={item.content}
                      bg={"bg-[#00233C]"}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:mt-20 mt-8  mx-auto max-w-5xl">
              {OPPORTUNITIES_DATA.slice(3).map((item) => (
                <JobCard
                  key={item.id}
                  title={item.title}
                  animationFile={item.animation}
                  className={item.className}
                  content={item.content || [""]}
                  bg={item.bg}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container pb-20">
          <div className="flex items-center justify-center ">
            <div className="max-w-3xl shadow-xl rounded-2xl text-center">
              <h2 className="text-3xl font-bold">
                {t("careerPage.kickstartTitle")}{" "}
                <span className="text-blue-600">Surventix</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                {t("careerPage.kickstartDesc")}
              </p>
              <div className="mt-10 flex flex-col gap-4">
                {benefits.map((item) => (
                  <FAQcard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-16 gap-2">
            {t("careerPage.shareCV")}{" "}
            <a href="mailto:HR@surventix.com" className="text-blue-600">
              HR@surventix.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
