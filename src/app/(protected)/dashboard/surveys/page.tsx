"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  Heart,
  House,
  MessageCircleHeart,
  Plane,
  User,
  Wallet,
  X,
} from "lucide-react";


const surveyCards = [
  {
    title: "About Me",
    description:
      "Don't forget to include your contact information and links to your social media profiles.",
    icon: User,
  },
  {
    title: "Financial",
    description:
      "Finance is the study and discipline of money, currency and capital assets.",
    icon: Wallet,
  },
  {
    title: "Health & Fitness",
    description:
      "Fitness involves activity of some sort that stimulates various systems of the body and maintains a certain condition within the body.",
    icon: Heart,
  },
  {
    title: "Hobbies & Interests",
    description:
      "Your hobbies include activities that you do on a regular basis, such as making food.",
    icon: MessageCircleHeart,
  },
  {
    title: "Household",
    description:
      "A household consists of two or more persons who live in the same dwelling.",
    icon: House,
  },
  {
    title: "Occupation",
    description:
      "Occupation is a general term that refers to the field or industry you are a part of or the work you are interested in.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technology",
    description:
      "Technology involves the application of scientific knowledge for practical purposes.",
    icon: Cpu,
  },
  {
    title: "Travel",
    description:
      "Travel is the movement of people between distant geographical locations.",
    icon: Plane,
  },
  {
    title: "Education",
    description:
      "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, and habits.",
    icon: GraduationCap,
  },
];

const Page = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Profile Survey</h2>
        <p className="text-[#AEB9E1] text-sm">Your profile is 33% completed</p>
      </div>

      <div className="mt-4">
        <Progress value={33} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {surveyCards.map((card, index) => (
          <div key={index} className="bg-[#0B1739] p-5 border-[#343B4F] border-[0.6px] rounded-lg flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <div className="">
                <card.icon />
              </div>

              <Button size={'icon'} variant="ghost" className="hover:bg-[#081028]">
                <X className="w-4 h-4 text-destructive" />
              </Button>
            </div>

            <div className="">
              <h3 className="text-2xl font-semibold leading-[32px]">
                {card.title}
              </h3>
              <p className=" text-[#AEB9E1] text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;