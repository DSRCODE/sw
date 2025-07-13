import { companyValues } from "@/constant/data";
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { v1 } from "@/assets";
import { useTranslation } from "react-i18next";

const CompanyValues = () => {
  const {t} = useTranslation();
  const companyValueData = companyValues(t);
  return (
    <div className="container md:py-16 py-8 grid md:grid-cols-3 md:gap-6 gap-4 relative">
      {companyValueData.map((item, i) => (
        <Card
          key={i}
          className={cn(
            "flex flex-col justify-center items-center rounded-lg border-t relative group",
            "bg-gradient-to-b from-[#00233C]/50 to-[#00233C]/10",
            "p-4 text-start sm:p-6",
            "hover:from-muted/60 hover:to-muted/20",
            "transition-colors duration-300 overflow-hidden"
          )}
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl text-center ">{item.title}</h3>

            <p className="sm:text-md text-sm text-muted-foreground text-center group-hover:text-white/80">
              {item.description}
            </p>
          </div>

          <div className="absolute inset-0 bg-[#3961DC] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <div className="absolute inset-0 bg-black/45"></div>
            <Image
              src={item.image || v1}
              alt={item.title}
              width={260}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CompanyValues;
