"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";

const Page = () => {
  const { user } = useAuthStore();
  const [copied, setCopied] = useState(false);
  const referralLink = `https://surventix.com/signup?referral_code=${user?.referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">
          {" "}
          Refer a Friend - Earn Together
        </h2>
        <p className="text-[#AEB9E1] text-sm">Measure your referrals</p>
      </div>

      <div className="mt-8">
        <div className="w-full">
       

          <div className="flex flex-col lg:flex-row gap-4 w-full">
         
            <div
              className="bg-[#0B1739] border-[#343B4F] border-[0.6px] rounded-lg p-6 flex-1"
             
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Copy className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">
                  Your Unique Referral Link
                </h2>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Share this link with your friends to earn bonus rewards when
                they join!
              </p>

              <div className="relative">
                <div className="flex">
                  <div className="flex-1 bg-[#081028]/60 border border-border rounded-l-lg p-3 overflow-hidden overflow-ellipsis">
                    <p className="text-sm font-mono text-muted-foreground truncate">
                      {referralLink}
                    </p>
                  </div>

                  <Button
                    onClick={copyToClipboard}
                    className={`rounded-l-none glow-effect h-12 ${
                      copied
                        ? "bg-green-400 hover:bg-green-500"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    {copied ? (
                      <Check className="mr-2 h-4 w-4" />
                    ) : (
                      <Copy className="mr-2 h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-medium text-primary">i</span>
                </div>
                <p>
                  Your unique referral code:{" "}
                  <span className="font-semibold text-foreground">
                    {user?.referralCode}
                  </span>
                </p>
              </div>
            </div>

            {/* Benefits Card */}
            <div
              className="bg-[#0B1739] border-[#343B4F] border-[0.6px] rounded-lg p-6 flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold">Earn Rewards Together</h2>
              </div>

              <ul className="space-y-4 mb-6 ml-10">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    1
                  </div>
                  <div>
                    <p className="font-medium">You Share Your Link</p>
                    <p className="text-sm text-muted-foreground">
                      Send your unique referral link to friends
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Friends Sign Up</p>
                    <p className="text-sm text-muted-foreground">
                      When they register using your link
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Both Get Rewarded</p>
                    <p className="text-sm text-muted-foreground">
                      You and your friend earn bonus points
                    </p>
                  </div>
                </li>
              </ul>

              <div className="animate-pulse-glow bg-gradient-purple p-[1px] rounded-lg">
                <div className="bg-background rounded-lg p-4">
                  <p className="text-center font-semibold">
                    Get <span className="text-primary">500 points</span> for
                    each successful referral!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Stats */}
          <div
            className="mt-4 bg-[#0B1739] border-[#343B4F] border-[0.6px] rounded-lg p-6"
          
          >
            <h3 className="text-lg font-semibold mb-4">Your Referral Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#081028]/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Link Clicks</p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <div className="bg-[#081028]/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Successful Referrals
                </p>
                <p className="text-2xl font-bold text-primary">8</p>
              </div>
              <div className="bg-[#081028]/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Points Earned</p>
                <p className="text-2xl font-bold text-primary">4,000</p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="outline" className="gap-2 glow-effect">
              <svg
                className="w-5 h-5 fill-current text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Share on Facebook
            </Button>
            <Button variant="outline" className="gap-2 glow-effect">
              <svg
                className="w-5 h-5 fill-current text-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
              Share on Twitter
            </Button>
            <Button variant="outline" className="gap-2 glow-effect">
              <svg
                className="w-5 h-5 fill-current text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </Button>
            <Button variant="outline" className="gap-2 glow-effect">
              <svg
                className="w-5 h-5 fill-current text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M.057 19.84L1.8 13.28c-1.148-1.972-1.75-4.206-1.75-6.502C.055 3.028 3.52.005 7.818.005c2.086 0 4.05.81 5.525 2.282 1.477 1.471 2.29 3.429 2.29 5.513 0 4.245-3.463 7.7-7.718 7.7-1.33 0-2.639-.33-3.81-.957l-3.85 1.322c-.22.075-.452.115-.685.115-.365 0-.723-.136-.995-.388-.332-.306-.516-.74-.516-1.2 0-.18.032-.361.096-.533zM4.872 14.22l.221.135c.95.577 2.04.882 3.143.882 3.297 0 5.98-2.684 5.98-5.98 0-1.596-.624-3.103-1.757-4.236-1.133-1.134-2.64-1.757-4.237-1.757-3.296 0-5.979 2.684-5.979 5.98 0 1.104.306 2.18.882 3.116l.137.23-.584 2.12 2.194-.5zM7.945 4.73c.14-.01.27-.01.4-.01.176 0 .352.012.526.037.172.024.343.088.448.204.125.138.19.32.236.5.045.17.096.343.12.515.025.164.05.328.01.482-.038.149-.075.3-.135.434-.055.13-.14.247-.231.33-.09.086-.192.146-.302.191-.112.048-.224.085-.358.087-.134.003-.276-.024-.4-.076-.123-.053-.228-.133-.32-.222-.185-.175-.328-.39-.444-.618-.12-.231-.209-.477-.272-.726-.064-.253-.101-.51-.113-.77-.012-.26.006-.52.06-.773.055-.251.147-.496.28-.72.134-.224.307-.425.51-.597.203-.17.438-.308.686-.398.25-.089.512-.13.774-.13.263 0 .524.04.774.131.246.086.478.222.685.398.204.172.377.37.51.592.133.224.226.471.28.724.057.253.072.516.06.777-.012.26-.05.517-.113.77-.064.249-.153.493-.27.723-.118.228-.258.445-.444.618-.092.09-.197.17-.32.222-.122.052-.265.079-.4.076-.133-.002-.246-.04-.358-.087-.11-.045-.212-.105-.302-.19-.091-.084-.176-.202-.231-.33-.06-.135-.097-.284-.135-.434-.04-.155-.016-.32.01-.482.025-.172.077-.343.126-.513.045-.18.11-.362.236-.5.105-.116.276-.18.448-.204.174-.025.35-.037.526-.037.13 0 .26 0 .4.01 0 0-.009-.242-.012-.324 0-.08-.001-.172-.023-.254-.02-.08-.063-.154-.117-.214-.051-.06-.124-.103-.194-.103-.072 0-.148.043-.187.104-.04.058-.053.132-.053.203-.001.071.011.143.03.21.018.066.044.133.075.194.03.058.062.115.083.173.021.06.031.118.021.17-.01.053-.04.095-.079.13-.041.037-.09.063-.14.085-.05.02-.104.038-.15.05-.049.01-.09.015-.12.015-.092.001-.162-.028-.23-.064-.064-.035-.117-.086-.162-.143-.045-.057-.082-.12-.111-.188-.032-.068-.055-.141-.073-.215-.017-.074-.03-.15-.034-.226-.004-.076 0-.152.01-.228.012-.075.029-.15.055-.222.024-.071.057-.143.099-.208.042-.066.092-.127.152-.18.058-.054.127-.1.204-.133.075-.033.16-.053.247-.06.086-.01.175 0 .264.013.088.015.177.036.262.07.084.033.166.078.243.136.076.057.146.127.205.206.06.08.107.17.142.265.036.096.061.198.072.302.011.104.01.211-.004.317-.015.104-.042.207-.08.305-.038.098-.086.193-.141.278-.057.086-.122.163-.197.226-.073.065-.156.115-.242.15-.089.037-.18.059-.272.062-.09.004-.182-.01-.267-.04-.088-.029-.17-.075-.242-.134-.074-.057-.139-.131-.19-.213-.052-.083-.09-.173-.115-.265-.026-.093-.04-.188-.042-.283-.001-.095.009-.19.03-.283.022-.092.053-.183.095-.268.04-.086.09-.168.147-.24.057-.075.123-.143.196-.2.074-.058.155-.107.242-.143.087-.035.18-.058.275-.067.094-.01.19-.005.284.01.095.016.188.043.276.08.086.038.168.088.242.147.073.06.138.128.196.204.057.075.107.156.147.242.04.084.072.173.093.266.022.09.034.183.034.276v.001z" />
              </svg>
              Share on WhatsApp
            </Button>
            <Button variant="outline" className="gap-2 glow-effect">
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Share on Instagram
            </Button>
          </motion.div>
        </div>
      </div>

     
    </div>
  );
};

export default Page;
