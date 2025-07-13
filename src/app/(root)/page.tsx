"use client"

import AboutUs from "@/components/about-us";
import Blog from "@/components/blog";
import HeroSection from "@/components/hero-section";
import OurExpertise from "@/components/our-expertise";
import OurJourney from "@/components/our-journey";
import Client from "@/components/Client";
import CompanyValues from "@/components/companyValues";
import JoinUs from "@/components/JoinUs";
import Social from "@/components/Social";
import GetinTouch from "@/components/GetinTouch";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <AboutUs />
      <OurExpertise />

      <Blog />

      <OurJourney />

      <Client />
      <JoinUs />
      <CompanyValues />
      <Social />
      <GetinTouch />
    </div>
  );
}
