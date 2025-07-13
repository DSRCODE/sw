import { BLOGS } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();
    const blogsData = BLOGS(t);
  return (
    <div className="container text-white  md:py-16 py-12">
      <h2 className="md:text-5xl text-3xl  text-center md:mb-16 mb-8">
        {t("blogsSection.title")}
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-4 md:-ml-8">
          {blogsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-[#003B64] rounded group mt-20">
                <div className=" p-6">
                  <div
                    className="bg-[#C3ECEE] -mt-20 relative rounded"
                    style={{
                      boxShadow:
                        "#0C5388 0px 5px, #0C5388 0px 10px, #0C5388 0px 15px, #0C5388 0px 20px, #0C5388 0px 25px",
                    }}
                  >
                    {/* <div className="bg-[#0E5AA6] w-full h-full absolute top-5 rounded group-hover:left-5"></div> */}
                    <div className="relative">
                      <Image
                        className="w-full h-[220px] object-cover rounded"
                        src={item.thumbnail}
                        alt={item.title}
                        width={350}
                        height={200}
                      />
                    </div>

                    {/* <div className="text-[#003B64] relative bg-[#C3ECEE] rounded-b flex h-11 items-center justify-between px-3 uppercase font-bold">
                      <p>{item.category}</p>
                      <p>{item.date}</p>
                    </div> */}
                  </div>

                  <div className="mt-12">
                    <h2 className="md:text-[30px] text-2xl font-bold leading-9 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="md:mt-16 mt-8 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-400 px-6 py-4 flex justify-end items-center">
                  {/* <button className="bg-[#F05BBE] px-6 py-1.5 rounded font-bold">
                    Join
                  </button> */}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-bold uppercase"
                  >
                    {t("readMore")}
                  </Link>
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
    </div>
  );
};

export default Blog;
