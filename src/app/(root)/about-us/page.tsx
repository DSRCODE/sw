"use client";

import { about1 } from "@/assets";
import OurVission from "@/components/about/our-vission";
import Image from "next/image";
import React from "react";
import WhyChooseUs from "@/components/about/why-choose-us";
import MeetOurTeam from "@/components/about/team";
import GetinTouch from "@/components/GetinTouch";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="relative min-h-screen md:mb-[80px] mb-16 overflow-hidden bg-gradient-to-tr from-[#5D1FE6] to-[#03C8CF] py-10 md:pt-28 pt-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 overflow-hidden gap-8 md:gap-0">
            <div className="flex w-full flex-col pr-0 mb-4 mb-md-0 relative z-10">
              <h1 className="text-white text-sm mb-2 pt-[30px] uppercase tracking-wider">
                {t("companyOverview.tag")}
              </h1>
              <h2 className="text-white md:text-[50px] md:leading-[50px] text-3xl leading-[30px] font-bold mb-5 ">
                {t("companyOverview.headline")}
              </h2>
              <p className="text-white text-sm  pt-0 mb-5 xl:mb-[30px] md:pr-[30px]">
                {t("companyOverview.paragraph")}
              </p>
              <div className="flex mb-0 gap-[30px] items-center">
                <Link
                  href="/signup"
                  className="uppercase text-xs py-2.5 px-4 bg-white text-[#02000F] rounded-3xl"
                >
                  {t("companyOverview.joinPanel")}
                </Link>

                <a className="btn-anchor mt-0 mb-0 " href="#contact">
                  {t("companyOverview.contactUs")}
                </a>
              </div>
            </div>

            <div className="flex flex-col  justify-center items-center md:pl-8 relative z-10">
              <div className=" h-full relative z-10">
                <div className="h-[90%] w-[90%] aspect-square overflow-hidden rounded-[15px]">
                  <Image
                    src={about1}
                    className="h-full w-full object-cover"
                    alt="image"
                  />
                </div>

                {/* <div className="w-[50%] aspect-square absolute bottom-0 right-0 rounded-[10px] border-[5px] border-[#F7F9FC]">
          

                  <video
                    src="/about1.mp4"
                    className="h-full w-full rounded-[10px] object-cover"
                    preload="metadata"
                    muted
                    autoPlay
                    loop
                  ></video>

                  <div className="absolute flex items-center justify-center top-0 left-0 right-0 rounded-[10px] bottom-0 bg-[#222d3960]">
                    <div className="h-[55px] w-[55px]">
                      <PlayWhite />
                    </div>
                  </div>
                </div> */}
              </div>

              <img
                className="absolute bottom-0"
                src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/phone-gb.svg"
              />
            </div>
            <img
              src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/wsj_mobile_bg_nodots.webp"
              className="block xl:hidden absolute w-full h-full"
              style={{ top: 0, left: 0 }}
            />
            <img
              src="https://www.qualtrics.com/m/assets/wp-content/uploads/2024/09/section-bg@2x-scaled.webp"
              className="hidden xl:flex absolute w-full h-full"
              style={{ top: 0, left: 0 }}
            />
          </div>
        </div>
      </section>
      {/* <CompanyOverview /> */}

      <OurVission />

      <WhyChooseUs />
      <MeetOurTeam />
      <GetinTouch />
    </div>
  );
};

export default AboutUs;
