"use client";
import SecurityFlowChart from "@/components/SecurityFlowChart";
import StepForm from "@/components/StepForm";
import SmartivityTimeline from "@/components/Timeliner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { surventixHighlights } from "@/constant/data";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  const surventixHighlightsdata = surventixHighlights(t);
  return (
    <div className="">
      <div
        className="md:h-screen h-[75vh] bg-cover fixed top-0 w-full"
        style={{
          background: "url(/surv-bg6.jpg)",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="md:h-screen h-[75vh] relative bg-gradient-to-br from-black/70 to-black/35">
        <div className="container  md:pt-40 pt-32 ">
          <div className="pb-3 flex uppercase gap-2 text-sm tracking-[2.4px] font-bold border-b border-[#ffffff4d]">
            <Link href="/">{t("nav.home")}</Link> <span>/</span>{" "}
            <div>{t("nav.security_check")}</div>
          </div>

          <div className="md:mt-16 mt-8">
            <h1 className="md:mb-8 mb-3 md:leading-[64px] leading-[36px] md:text-[64px] text-4xl">
              {t("security_check.hero.heading")}
            </h1>
            <p className="max-w-[700px] md:text-2xl text-base tracking-[0.5px] mb-6">
              {t("security_check.hero.subheading")}
            </p>

            <a
              href="#online"
              className="md:text-lg text-base tracking-[0.5px] flex items-center gap-4"
            >
              {t("security_check.hero.button")}
              <span className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="online" className="relative bg-[#02000F] md:py-20 py-12">
        <div className="container mb-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-6xl font-bold mb-7">
              {t("security_check.sectionOnline.heading")}
              <span className="text-[#EF742C]">Surventix</span>
            </h1>
            <p className="text-white/80">
              {t("security_check.sectionOnline.paragraph")}
            </p>
          </div>

          <div className="h-full">
            <video
              poster="/video-poster.png"
              autoPlay
              loop
              muted
              src="/about.mp4"
              className="h-full object-cover w-full rounded-4xl"
            ></video>
          </div>
        </div>

        <div className="mb-20">
          <div className="container py-20">
            <h1 className="text-center text-5xl font-bold mb-4">
              {t("security_check.sectionHighlight.introHeading1")}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to bg-yellow-500 bg-clip-text text-transparent">
                {t("security_check.sectionHighlight.introHeading2")}
              </span>{" "}
              {t("security_check.sectionHighlight.introHeading3")}
              <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to bg-pink-500 bg-clip-text text-transparent">
                {" "}
                {t("security_check.sectionHighlight.introHeading4")}
              </span>
            </h1>
            <p className="max-w-4xl mx-auto text-center mb-10">
              {t("security_check.sectionHighlight.introParagraph")}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {surventixHighlightsdata.map((item, i) => (
                <div key={i} className="bg-[#00233c] relative p-6 rounded-4xl">
                  <div className="card-highlight"></div>
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-surventix-lightGray dark:bg-[#1c384c]">
                    <item.icon className="h-6 w-6 text-surventix-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-surventix-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <StepForm />
        </div>

        <div className="container">
          <SmartivityTimeline />
        </div>

        <div>
          <SecurityFlowChart />
        </div>

        <div className="container mx-auto py-12">
          <Card className="max-w-3xl mx-auto bg-[#003C65] backdrop-blur-sm border border-primary/10">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold ">
                {t("contactCard.title")}
              </CardTitle>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-center leading-relaxed text-white/95">
                {t("contactCard.line1")}
              </p>

              <p className="text-center leading-relaxed text-white/95">
                {t("contactCard.line2")}
              </p>

              <div className="flex flex-col items-center space-y-3 mt-8">
                <p className="font-semibold"> {t("contactCard.catLine")}</p>
                <a
                  href="mailto:Sales@surventix.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("contactCard.email")}
                </a>
              </div>

              <p className="text-center italic mt-6 text-white/95">
                {t("contactCard.footerNote")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
