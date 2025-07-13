import { about1, about2 } from "@/assets";
import { PlayWhite } from "@/assets/Icon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CompanyOverview() {
  const { t } = useTranslation();
  console.log(t("companyOverview"));
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mb-[80px] overflow-hidden bg-gradient-to-tr from-[#5D1FE6] to-[#03C8CF] mt-20 py-10"
    >
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 overflow-hidden"
        >
          <div className="flex w-full flex-col pr-0 mb-4 mb-md-0 relative z-10">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm mb-2 pt-[30px] uppercase tracking-wider"
            >
              {t("companyOverview.tag")}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white text-[50px] leading-[50px] font-bold mb-5"
            >
              {t("companyOverview.headline")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-sm pt-0 mb-5 xl:mb-[30px] md:pr-[30px]"
            >
              {t("companyOverview.paragraph")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex mb-0 gap-[30px] items-center"
            >
              <button className="uppercase text-xs py-2.5 px-4 bg-white text-[#02000F] rounded-3xl">
                {t("companyOverview.joinPanel")}
              </button>
              <a className="btn-anchor mt-0 mb-0" href="#">
                {t("companyOverview.contactUs")}
              </a>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center pl-8 relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-full relative z-10"
            >
              <div className="h-[90%] w-[90%] overflow-hidden rounded-[15px]">
                <Image
                  src={about1}
                  className="h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="w-[50%] aspect-square absolute bottom-0 right-0 rounded-[10px] border-[5px] border-[#F7F9FC]">
                <Image
                  src={about2}
                  className="h-full w-full rounded-[10px] object-cover"
                  alt="image"
                />
                <div className="absolute flex items-center justify-center top-0 left-0 right-0 rounded-[10px] bottom-0 bg-[#222d3960]">
                  <div className="h-[55px] w-[55px]">
                    <PlayWhite />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
