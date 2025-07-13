import { CODE_OF_CONDUCT } from "@/constant/data";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const CodeOfConduct = () => {
  const { t } = useTranslation();
  const CODE_OF_CONDUCT_DATA = CODE_OF_CONDUCT(t);
  return (
    <div id="coc" className="relative bg-[#02000F] md:py-20 py-12">
      <div className="container">
        <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
          {t("codeOfConduct.title")}
        </h2>

        <div className="gap-8 md:grid-cols-3 grid md:mt-16  mt-8">
          {CODE_OF_CONDUCT_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-[#00233C]"
            >
              <div className="w-full aspect-video relative">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.title}
                />
                <div
                  className="absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-2xl"
                  style={{ backgroundColor: item.bg, color: item.text }}
                >
                  {item.icon()}
                </div>
              </div>

              <div className="bg-[#00233C] md:p-6 p-4 rounded-2xl -mt-10 relative">
                <h3 className="md:text-4xl text-2xl md:mb-4 mb-3">
                  {item.title}
                </h3>
                <p className="font-light md:text-base text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
