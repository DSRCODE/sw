"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/authStore";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  ChartNoAxesCombined,
  Ellipsis,
  Mail,
  TicketCheck,
  Users,
  Wallet,
} from "lucide-react";

interface ProfileCardProps {
  name: string;
  email: string;
  memberId: string;
  country: string;
  joinDate: string;
  availableSurveys: number;
  userLevel: string;
  pointBalance: number;
}

const Page = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">
          Welcome back, {user?.displayName}
        </h2>
        <p className="text-[#AEB9E1] text-sm">Measure your survey report</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-[#581c87] p-5 border-[#343B4F] border-[0.6px] rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-[#fff]">
              <ChartNoAxesCombined className="w-5" />
              <p className="font-medium">Survey</p>
            </div>

            <button>
              <Ellipsis className="text-[#ffffffb3]" />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <h3 className="text-2xl font-semibold leading-[32px]">10K</h3>
            <div className="flex items-center gap-1 bg-[#05C168]/20 border-[05C168]/50 border-[0.6px] rounded px-1 text-[#05C168] leading-[8px] text-xs font-medium">
              20% <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="bg-[#1e40a2] p-5 border-[#343B4F] border-[0.6px] rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-[#fff]">
              <Wallet className="w-5" />
              <p className="font-medium">Point Balance</p>
            </div>

            <button>
              <Ellipsis className="text-[#ffffffb3]" />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <h3 className="text-2xl font-semibold leading-[32px]">1000</h3>
            <div className="flex items-center gap-1 bg-[#FF5A65]/20 border-[FF5A65]/50 border-[0.6px] rounded px-1 text-[#FF5A65] leading-[8px] text-xs font-medium">
              2% <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="bg-[#065e46] p-5 border-[#343B4F] border-[0.6px] rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-[#fff]">
              <TicketCheck className="w-5" />
              <p className="font-medium">Redeem Points</p>
            </div>

            <button>
              <Ellipsis className="text-[#ffffffb3]" />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <h3 className="text-2xl font-semibold leading-[32px]">100</h3>
            <div className="flex items-center gap-1 bg-[#05C168]/20 border-[05C168]/50 border-[0.6px] rounded px-1 text-[#05C168] leading-[8px] text-xs font-medium">
              2% <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="bg-[#c4470f] p-5 border-[#343B4F] border-[0.6px] rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-[#fff]">
              <Users className="w-5" />
              <p className="font-medium">Referred Friends</p>
            </div>

            <button>
              <Ellipsis className="text-[#ffffffb3]" />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <h3 className="text-2xl font-semibold leading-[32px]">5</h3>
            <div className="flex items-center gap-1 bg-[#05C168]/20 border-[05C168]/50 border-[0.6px] rounded px-1 text-[#05C168] leading-[8px] text-xs font-medium">
              6% <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:flex-row flex-col flex gap-4">
        <Profile
          name={user?.displayName || ''}
          email={user?.email || ''}
          memberId="14567"
          country="India"
          joinDate="01/01/2023 7:09 PM"
          availableSurveys={0}
          userLevel="Basic"
          pointBalance={1000}
        />

        <RewardCard />
      </div>
    </div>
  );
};

export default Page;

const Profile: React.FC<ProfileCardProps> = ({
  name,
  email,
  memberId,
  country,
  joinDate,
  availableSurveys,
  userLevel,
  pointBalance,
}) => (
  <Card className="w-full max-w-md bg-[#0B1739] border-[#343B4F] border-[0.6px] rounded-lg">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/50 shadow-md">
          <AvatarFallback className="bg-primary/20 text-primary-foreground text-xl">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </CardHeader>

    <CardContent className="space-y-4 pt-2">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="space-y-1">
          <p className="text-muted-foreground">Member ID</p>
          <p className="font-medium">{memberId}</p>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">Country</p>
          <p className="font-medium">{country}</p>
        </div>
        <div className="col-span-2 space-y-1">
          <p className="text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> Join Date
          </p>
          <p className="font-medium">{joinDate}</p>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">Available Surveys</p>
          <span className="font-semibold">{availableSurveys}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">User Level</p>
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary-foreground border-primary/20"
          >
            {userLevel}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">Point Balance</p>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-subtle"></div>
            <span className="font-semibold">
              {pointBalance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const RewardCard = () => {
  return (
    <Card className="w-full bg-[#0B1739] border-[#343B4F] border-[0.6px] rounded-lg">
      <CardContent className="space-y-4 text-center justify-center items-center flex flex-col h-full">
        <h2 className="text-xl font-semibold tracking-tight text-center">
          Redeem your rewards
        </h2>
        <p className="text-muted-foreground">
          To redeem your rewards kindly reach out to us via email
        </p>
        <Button
          // className="w-full"
          variant="outline"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact us
        </Button>
      </CardContent>
    </Card>
  );
};
