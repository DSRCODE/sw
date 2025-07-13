"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, LinkedIn } from "@/assets/Icon";
import { NAV_LINKS } from "@/constant/path";
import PanelBook from "./PanelBook";
import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navLinks = NAV_LINKS(t);
  return (
    <div
      className="flex flex-col text-white py-9 bg-[#02000F]"
      style={{ background: "linear-gradient(180deg, #02000f, #001238)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between md:gap-[110 px] gap-[50px] md:pb-[80px] pb-10">
          <div>
            <div>
              <Link href="/">
                <Image
                  src="/SURVENTIX.png"
                  alt="SURVENTIX"
                  width={150}
                  height={120}
                />
              </Link>
            </div>

            <p className="max-w-[300px] md:mt-5 mt-3 text-white/80">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <div className=" md:mt-2.5">
              <h3 className="text-xl font-semibold mb-6">
                {t("footer.quick_links")}
              </h3>

              <div className="md:gap-[30px] gap-4 flex  flex-col opacity-80">
                {navLinks.map((item, i) => (
                  <Link key={i} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:mt-2.5">
            <h3 className="text-xl font-semibold mb-6">
              {t("footer.lets_connect")}
            </h3>
            <div className="flex md:gap-[30px] gap-4 flex-col">
              <p className="font-bold">
                {t("footer.address_line1")}
                <br />
                {t("footer.address_line2")}
                <br />
                {t("footer.address_line3")}
              </p>

              <a target="_blank" href="#">
                {t("footer.email")}
              </a>
            </div>
          </div>

          <div>
            <div className="Footer_styles_socials__TONa1 flex flex-wrap md:pb-10 pb-6 gap-[14px]">
              <a target="_blank" href="#">
                <Facebook />
              </a>
              {/* <a target="_blank" href="#">
                <X />
              </a> */}
              <a
                target="_blank"
                href="https://www.linkedin.com/company/surventix/"
              >
                <LinkedIn />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/surventix/?hl=en"
              >
                <div className="w-12 h-12 bg-[#EAEDFF] rounded-full flex justify-center items-center">
                  <Instagram className="text-[#02000F]" />
                </div>
              </a>
            </div>

            <PanelBook />
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-[#84828c] pt-5 gap-5">
          <p className="text-[10px] md:text-sm text-[#84828c] text-center">
            {t("footer.copyright_line1")}
            <br />
            {t("footer.copyright_line2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
