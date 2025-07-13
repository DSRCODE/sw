import { COMMITMENTS } from "@/constant/data";
import React from "react";
import CommitmentCard from "../card/CommitmentCard";
import { useTranslation } from "react-i18next";

const Commitment = () => {
  const {t} = useTranslation();
  const COMMITMENTS_DATA = COMMITMENTS(t);
  return (
    <div className="relative bg-[#02000F] md:pb-20 pb-12">
      <div className="container">
        <h2 className="md:text-[35px] text-2xl leading-[24px] md:leading-[35px] mb-5 ">
        Our Commitments
        </h2>

        <div className="md:gap-16 gap-8 md:grid-cols-3 grid md:mt-16 mt-8">
          {COMMITMENTS_DATA.map((item) => (
            <CommitmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commitment;
