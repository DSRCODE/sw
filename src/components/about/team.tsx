"use client";
import { teamMembers } from "@/constant/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MeetOurTeam() {
  const { t } = useTranslation();
  const teamMembersData = teamMembers(t);
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container text-white md:py-16 text-center mb-10">
      <h2 className="md:text-5xl text-3xl font-bold mb-4">
        {t("meetTeam.heading")}
      </h2>
      <p className="text-gray-400 mb-10 text-sm max-w-2xl mx-auto">
        {t("meetTeam.paragraph")}
      </p>
      <div className="grid md:grid-cols-3 gap-10 pt-10">
        {teamMembersData.map((member, index) => {
          const isFlipped = flippedCards.includes(index);

          return (
            <motion.div
              key={index}
              className="relative w-full aspect-square cursor-pointer perspective"
              onClick={() => isMobile && toggleFlip(index)}
              whileHover={!isMobile ? { scale: 1.05 } : undefined}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ rotateY: isMobile && isFlipped ? 180 : 0 }}
                whileHover={!isMobile ? { rotateY: 180 } : {}}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center p-4 rounded-xl shadow-lg rotate-y-180 backface-hidden">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.designation}</p>
                  <p className="text-xs text-gray-300 mt-2">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
