// constants/navLinks.ts

export const NAV_LINKS = (t: (key: string) => string) => [
  { label: t("nav.home"), href: "/" },
  { label: t("nav.about_us"), href: "/about-us" },
  { label: t("nav.our_services"), href: "/services" },
  { label: t("nav.code_of_conduct"), href: "/code-of-conduct" },
  { label: t("nav.security_check"), href: "/security-check" },
  { label: t("nav.career"), href: "/career" },
];

// export const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Our Services", href: "/services" },
//   { label: "Code of Conduct", href: "/code-of-conduct" },
//   { label: "Security Check", href: "/security-check" },
//   { label: "career", href: "/career" },
// ];
