"use client";

import { NAV_LINKS } from "@/constant/path";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
   const { t } = useTranslation();
 const navLinks = NAV_LINKS(t);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header
      className={cn(
        isScrolled || pathname !== "/"
          ? "bg-[#00233C]"
          : "md:bg-[#00233C]/40 bg-[#00233C]",
        "fixed w-full top-0 z-50 transition-all"
      )}
    >
      <div className="container flex justify-between items-center ">
        <Link href="/" className="flex items-center gap-2 py-2">
          {/* <div className="relative ">
            <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
              <div className="bg-white md:w-[40px] md:h-[40px] h-[29px] w-[30px]"></div>
            </div>
            <Image
              className="relative w-[65px] h-[65px] md:w-[74px] md:h-[74px]"
              src="/logo.png"
              alt="logo"
              width={74}
              height={74}
            />
          </div>
          <div>
            <p className="uppercase font-bold md:text-lg text-base">
              Surventix
            </p>
            <p className="md:text-xs text-[10px] opacity-80">
              Driven By Discovery
            </p>
          </div> */}
          <Image src="/SURVENTIX.png" alt="SURVENTIX" width={100} height={70} />
        </Link>

        <nav className="hidden md:flex gap-7">
          {navLinks.map((item, i) => (
            <li key={i} className="nav-links list-none capitalize">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="border-[1.5px] border-white text-white hover:bg-white hover:text-[#04021d] duration-300 transition-all ease-in-out px-8 text-lg capitalize py-2.5 rounded-4xl"
          >
            {t("join_our_panel")}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#00233C] flex flex-col items-center justify-center space-y-6 text-white text-xl transform transition-transform duration-300",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="capitalize"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/signin"
          className="border-[1.5px] border-white text-white capitalize hover:bg-white hover:text-[#04021d] duration-300 transition-all ease-in-out px-6 py-2 rounded-4xl"
          onClick={() => setMenuOpen(false)}
        >
          join our panel
        </Link>

        {/* Pass isMobile=true to match mobile styling */}
        <LanguageSwitcher isMobile />
      </div>
    </header>
  );
};

export default Header;
