import React from "react";
import Link from "next/link";
import Image from "next/image";
import { about1 } from "@/assets";
import { useTranslation } from "react-i18next";
// import { PlayWhite } from "@/assets/Icon";

const AboutUs = () => {
  const { t } = useTranslation();
  // const videoRef = useRef<HTMLVideoElement | null>(null);
// const [isPlaying, setIsPlaying] = useState(false);

// const toggleVideoPlayback = () => {
//   if (!videoRef.current) return;

//   if (isPlaying) {
//     videoRef.current.pause();
//   } else {
//     videoRef.current.play();
//   }
//   setIsPlaying(!isPlaying);
// };

  return (
    <div className=" text-white md:py-10 py-8 relative">
      <div className="absolute bottom-0 w-[436.52px] h-[544.07px] rotate-[-47.46deg] blur-[200px] rounded-[200px] -left-40 bg-gradient-to-tr from-[#1A2980] to-[#26D0CE]"></div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 md:gap-20 gap-12 md:mt-16 mt-8">
          <div className="flex flex-col justify-center">
            <div className="md:mb-16 mb-4">
              <div className="max-w-[650px] mx-auto">
                <h2 className="md:text-5xl text-3xl md:mb-5 mb-3">
                  {" "}
                  {t("about.heading")}
                </h2>
                <p className=" opacity-80 mb-5 md:mb-0">
                  {t("about.subheading")}
                </p>
              </div>
            </div>

            <p className="md:text-lg text-sm">{t("about.description")}</p>

            <div className="mt-10">
              <Link
                href="/about-us"
                className="uppercase text-xs py-3 px-7 bg-white text-[#02000F] rounded-3xl"
              >
                {t("about.learn_more")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:pl-8 relative z-10">
            <div className="h-full md:min-h-[500px] relative z-10">
              <div className="h-[90%] w-[90%] overflow-hidden rounded-[15px]">
                <Image
                  src={about1}
                  className="h-full aspect-square object-cover"
                  alt="image"
                />
              </div>
              <div className="w-[50%] aspect-square absolute bottom-0 right-0 rounded-[10px] border-[5px] border-[#F7F9FC]">
                <video
                  src="/home.mp4"
                  className="h-full w-full rounded-[10px] object-cover"
                  preload="metadata"
                  muted
                  autoPlay
                  loop
                  poster="/thumnail.png"
                ></video>
                {/* <button onClick={toggleVideoPlayback} className="absolute flex items-center justify-center top-0 left-0 right-0 rounded-[10px] bottom-0 bg-[#222d3960]">
                  <div className="h-[55px] w-[55px]">
                    <PlayWhite />
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
