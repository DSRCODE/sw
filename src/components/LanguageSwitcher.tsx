"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

const languages = [
  { value: "en", label: "English", icon: "https://flagcdn.com/w40/us.png" },
  { value: "fr", label: "French", icon: "https://flagcdn.com/w40/fr.png" },
  { value: "de", label: "German", icon: "https://flagcdn.com/w40/de.png" },
  { value: "es", label: "Spanish", icon: "https://flagcdn.com/w40/es.png" },
  { value: "ja", label: "Japanese", icon: "https://flagcdn.com/w40/jp.png" },
  { value: "zh", label: "Chinese", icon: "https://flagcdn.com/w40/cn.png" },

  //   { value: "hi", label: "Hindi", icon: "https://flagcdn.com/w40/in.png" },
];

export default function LanguageSwitcher({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang) {
      setSelectedLang(storedLang);
      i18n.changeLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsOpen(false);
  };

  const current = languages.find((lang) => lang.value === selectedLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 cursor-pointer ${
          isMobile
            ? "text-white border border-white px-4 py-2 rounded-md"
            : "text-white border border-white px-3 py-1 rounded-md"
        } hover:bg-white hover:text-[#00233C] transition`}
      >
        <Globe size={18} />
        {current && (
          <>
            <span className="text-sm">{current.label}</span>
          </>
        )}
      </button>

      {isOpen && (
        <ul
          className={`absolute z-50 bg-white text-black rounded shadow-lg border mt-4 overflow-y-auto max-h-48 ${
            isMobile ? "w-40 right-0 text-sm" : "w-40 right-0"
          }`}
        >
          {languages.map((lang) => (
            <li
              key={lang.value}
              onClick={() => changeLanguage(lang.value)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={lang.icon} alt={lang.label} width={20} height={18} />
              <div className="flex flex-col">
                <span className="font-medium text-sm">{lang.label}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
