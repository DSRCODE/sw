"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FAQcard = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    image?: string;
  };
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:border-t-2 border-t border-b md:border-b-2 md:py-5 py-4 border-purple-700">
      <div
        className="flex justify-between "
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className="md:text-2xl text-lg md:font-bold font-semibold">
          {item.title}
        </h2>{" "}
        <motion.button animate={{ rotate: open ? 180 : 0 }}>
          {open ? <Minus /> : <Plus />}
        </motion.button>
      </div>

      <motion.div
        className={cn(
          open ? "mt-6" : "",
          "overflow-hidden flex md:flex-row flex-col  md:gap-10 gap-8"
        )}
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
      >
        <p className="md:text-lg text-sm text-start">{item.description}</p>
        {item.image && (
          <div>
            <div className="md:w-[300px] w-full h-[200px]">
              <Image
                className="w-full h-full"
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FAQcard;
