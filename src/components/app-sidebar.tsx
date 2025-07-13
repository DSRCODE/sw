"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
 
    },
    {
      title: "Profile Surveys",
      url: "/dashboard/surveys",
      icon: User,
      
    },
    {
      title: "Refer Friends",
      url: "/dashboard/refer",
      icon: Users,
      
    },
   
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-[#081028] shadow-lg">
      <SidebarHeader className="bg-[#081028]">
        {/* <TeamSwitcher teams={data.teams} /> */}
       <div>
        <Image src='/SURVENTIX.png' alt="SURVENTIX" width={100} height={70} />
       </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#081028]">
        <NavMain items={data.navMain} />
      
      </SidebarContent>
      <SidebarFooter className="bg-[#081028]">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
