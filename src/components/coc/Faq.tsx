import { FAQ } from "@/constant/data";
import React from "react";
import FAQcard from "../card/FAQcard";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const {t} = useTranslation();
  const FAQ_DATA = FAQ(t);
  return (
    <div className="relative bg-[#02000F] md:pb-20 pb-12">
      <div className="container">
        <div className="">
          <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
            {t("faq.heading")}
          </h2>

          <p className="max-w-[750px] text-white/80">{t("faq.description")}</p>
        </div>
        <div className="md:mt-16 mt-8 flex flex-col md:gap-8 gap-5">
          {FAQ_DATA.map((item) => (
            <FAQcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
