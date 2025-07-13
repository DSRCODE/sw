import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const posts = [
  {
    id: 1,
    image:
      "https://media.licdn.com/dms/image/v2/D4D05AQHHqp12ZgSHsA/videocover-high/B4DZXsu620GkBs-/0/1743433490099?e=1744952400&v=beta&t=a573CouOGv0qOIUb4vePaEvpxeQ2TJ-aEUkSfLz0O3Q",
    url: "https://www.linkedin.com/posts/surventix_eidmubarak-celebratingtogether-peaceandprosperity-activity-7312490073566908419-HoRD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY05EABkarnC8QOpcpHySVkb76laPvwGlQ",
  },

  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQELxX8BJQfiFg/feedshare-shrink_800/B56ZXoRyeLHEAg-/0/1743358737758?e=1747267200&v=beta&t=-eXZENGFZL5KvLM6AVQdlUnyeTFLpz40jXmG93hdkAc",
    url: "https://www.linkedin.com/posts/surventix_navratri-jaimatadi-shakti-activity-7312176530451808256-89w4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY05EABkarnC8QOpcpHySVkb76laPvwGlQ",
  },
  {
    id: 3,
    image:
      "https://media.licdn.com/dms/image/v2/D5605AQHVjxwRvDdeaw/videocover-low/B56ZXMZe0rGQCU-/0/1742890991526?e=1744948800&v=beta&t=E5MeOaLuwIRa4x1393JijBvRCETjiIHN73HWjTbtGYM",
    url: "https://www.linkedin.com/posts/surventix_marketresearch-businessinsights-eruditemr-activity-7310214929377017856-Ml2P?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY05EABkarnC8QOpcpHySVkb76laPvwGlQ",
  },
  {
    id: 4,
    url:
      "https://www.linkedin.com/posts/surventix_marketresearch-datadriven-innovation-activity-7308728685266620416-t43E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY05EABkarnC8QOpcpHySVkb76laPvwGlQ",
    image: "https://media.licdn.com/dms/image/v2/D5605AQFMbzvAEpkcNA/videocover-low/B56ZW3R9ZVGoCQ-/0/1742536703265?e=1744948800&v=beta&t=4QdLr28indrgsn1JywQshizB3CYMjFlPMWl-g-QqRTM",
  },
  {
    id: 5,
    url:
      "https://www.linkedin.com/posts/surventix_marketresearch-surveysolutions-dataaccuracy-activity-7308590408853295105-0IfN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADY05EABkarnC8QOpcpHySVkb76laPvwGlQ",
    image: "https://media.licdn.com/dms/image/v2/D5605AQF0677tAYA28g/videocover-low/B56ZW1UMkcHsCQ-/0/1742503735309?e=1744948800&v=beta&t=vHLkDKJtd3XyVeXd3OrxwpcPgFe3HF7T8meevqGlqpg",
  },

];

const Social = () => {
  const {t} = useTranslation();
  return (
    <div className="container md:py-16 py-8">
      <h2 className="md:text-5xl text-3xl  text-center md:mb-16 mb-8">
        {t("socialMedia")}
      </h2>

      <div className="grid md:grid-cols-5 md:gap-8 gap-4">
        {posts.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            className="w-full aspect-square overflow-hidden group relative"
          >
            <Image
              className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300"
              src={item.image}
              alt="image"
              width={200}
              height={200}
            />

            <div className="bg-black absolute inset-0 flex items-end p-2 translate-y-full group-hover:translate-y-0 duration-300 transition-all ease-in-out">
              <Linkedin />
            </div>
          </a>
        ))}

        {/* <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7312176529537409025?collapsed=1"
          height="399"
          width={"100%"}
          frameBorder="0"
          title="Embedded post"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Social;
