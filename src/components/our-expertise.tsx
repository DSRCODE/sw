import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { EXPERTISE } from "@/constant/data";
import { useTranslation } from "react-i18next";

const OurExpertise = () => {
  const { t } = useTranslation();
  const expertiseData = EXPERTISE(t);
  return (
    <div className=" text-white md:pb-[80px] pb-12 md:pt-10 pt-6 relative">
      <div className="absolute bottom-0 w-[436.52px] h-[544.07px] rotate-[47.46deg] blur-[200px] rounded-[200px] -right-40 bg-gradient-to-tr from-[#1A2980] to-[#26D0CE]"></div>
      <div className="container relative">
        <h2 className="md:text-5xl text-3xl  md:mb-16 mb-12 ">
          {t("expertise.title")}
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {expertiseData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 md:gap-20 gap-10">
                  <div className="relative">
                    <Image
                      src={item.image}
                      className="h-full max-h-[400px] w-full rounded-[15px] object-cover"
                      alt={item.title}
                      width={550}
                      height={400}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="md:text-3xl text-2xl mb-6">{item.title}</h3>
                    <p className="md:text-lg text-sm">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bg-red-600 pt-28 left-1/2 translate-x-1/2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="grid grid-cols-2 gap-20"></div>
      </div>
    </div>
  );
};

export default OurExpertise;
