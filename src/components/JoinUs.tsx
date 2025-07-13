import { values } from "@/assets";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const JoinUs = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-[436.52px] h-[544.07px] rotate-[-47.46deg] blur-[200px] rounded-[200px] -left-40 bg-gradient-to-tr from-[#1A2980] to-[#26D0CE]"></div>
      <div className="md:py-16 py-8 container relative">
        <div className="grid md:grid-cols-2 md:gap-10 gap-5">
          <div className="flex flex-col">
            <h2 className="md:text-5xl text-3xl mb-5">{t("joinUs.title")}</h2>

            <p className="mb-10">{t("joinUs.subtitle")}</p>

            <p>{t("joinUs.description")}</p>
          </div>

          <div className="flex flex-col justify-center items-center pl-8 relative z-10">
            <div className="h-full md:min-h-[500px] relative z-10">
              <div className="h-[90%] w-[90%] aspect-square overflow-hidden rounded-[15px]">
                <Image
                  src={values}
                  className="h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="w-[50%] aspect-square absolute bottom-0 right-0 rounded-[10px] border-[5px] border-[#F7F9FC]">
                <video
                  src="/sea.mp4"
                  className="h-full w-full rounded-[10px] object-cover"
                  preload="metadata"
                  muted
                  autoPlay
                  loop
                ></video>
                {/* <div className="absolute flex items-center justify-center top-0 left-0 right-0 rounded-[10px] bottom-0 bg-[#222d3960]">
                  <div className="h-[55px] w-[55px]">
                    <PlayWhite />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
