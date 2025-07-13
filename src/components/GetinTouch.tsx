import React from "react";
import { useTranslation } from "react-i18next";

const GetinTouch = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="md:py-16 py-8 md:my-16 my-8  bg-[#003B64]">
      <div className="container grid md:grid-cols-2 gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13337.457255597996!2d77.09743300000001!3d28.451407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196a9219452f%3A0x2b7db4e11e0c29d1!2sWeWork%20Two%20Horizon%20Centre!5e1!3m2!1sen!2sus!4v1744348407832!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl min-h-[400px]"
        ></iframe>

        <div className="bg-[#003B64] rounded-2xl p-6">
          <h3 className="text-4xl font-medium">{t("getInTouch")}</h3>
          <form className="mt-10 flex flex-col gap-5">
            <div>
              <input
                className="w-full h-11 px-4 border-white/20 border outline-0 rounded"
                placeholder={t("yourEmail")}
              />
            </div>
            <div>
              <input
                className="w-full h-11 px-4 border-white/20 border outline-0 rounded"
                placeholder={t("yourName")}
              />
            </div>
            <div>
              <input
                className="w-full h-11 px-4 border-white/20 border outline-0 rounded"
                placeholder={t("subject")}
              />
            </div>

            <div>
              <textarea
                className="w-full h-24 py-2 px-4 border-white/20 border outline-0 resize-none rounded"
                placeholder={t("message")}
              />
            </div>

            <div>
              <button className="h-11 border border-white px-6 hover:bg-white hover:text-[#003B64] duration-300 transition-all ease-in-out">
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
