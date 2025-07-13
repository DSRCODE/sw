import { ETHICS } from "@/constant/data";
import React from "react";
import EthicalCard from "../card/EthicalCard";
import { useTranslation } from "react-i18next";

const Ethics = () => {
  const {t} = useTranslation();
  const ETHICS_DATA = ETHICS(t);
  return (
    <div className="relative bg-[#02000F] md:pb-20 ">
      <div className="container">
        <div className="md:text-center md:sticky top-80">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            {t("ethics.heading")}
          </h2>

          <p className="max-w-[750px] mx-auto text-white/80">
            {t("ethics.description")}
          </p>
        </div>
        <div className="md:mt-16 mt-8 max-w-5xl mx-auto">
          {ETHICS_DATA.map((item) => (
            <EthicalCard
              key={item.id}
              title={item.title}
              description={item.description}
              animationFile={item.animation}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ethics;
