import { SECURITY_CHECK } from "@/constant/data";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SmartivityTimeline() {
  const { t } = useTranslation();
  const securityData = SECURITY_CHECK(t);
  return (
    <div className="py-12">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute md:left-1/2 transform md:-translate-x-1/2 h-full border-l border-dashed border-gray-300"></div>

        {/* First Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[0].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {securityData[0].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[0].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* second Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[1].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[1].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {securityData[1].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* third Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[2].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {securityData[2].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[2].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* fourth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[3].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[3].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {securityData[3].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* fifth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[4].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {securityData[4].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[4].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* sixth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[5].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[5].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {securityData[5].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* seventh Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[6].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {securityData[6].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[6].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* eight Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[7].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[7].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {securityData[7].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* nineth Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[8].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                {securityData[8].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[8].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 10th Section */}
        <div className="relative mb-16">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[9].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content - Image */}
            <div className="md:pr-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={securityData[0].image}
                  alt="People packing and assembling boxes"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="md:pl-12">
              <ul className="space-y-4">
                {securityData[9].items?.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 11th Section */}
        <div className="relative">
          {/* Year pill */}
          <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -top-5 z-10">
            <div className="bg-purple-700 text-white px-6 py-1 rounded-full text-center font-medium">
              {securityData[10].title}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-4 md:pl-0">
            {/* Left content */}
            <div className="md:pr-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1 mr-3"></div> */}
                  <p className="text-white/80">
                    {securityData[10].description}
                  </p>
                </li>
              </ul>
            </div>

            {/* Right content - Image */}
            <div className="md:pl-12">
              <div className="rounded-lg overflow-hidden">
                <video
                  width={500}
                  height={300}
                  autoPlay
                  muted
                  loop
                  src="/Panelist Dupe Score.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
