'use client'
import {
  IconHome,
  IconNewSection
} from "@tabler/icons-react";
import { Star, User2Icon } from "lucide-react";
import Image from "next/image";
import { BiQuestionMark } from "react-icons/bi";
import { GrDocumentUser } from "react-icons/gr";
import { FloatingDock } from "./ui/floating-dock";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About Me",
      icon: (
              
        <User2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "My Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Software Developer",
      icon: (
        <Image
          src="/me.jpg"
          width={50}
          height={50}
          alt="Ignatius Emeka Joshua"
          className="rounded-full h-full w-full"
        />
      ),
      href: "/",
    },
    {
      title: "SKills",
      icon: (
        
        <Star className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },

    {
      title: "Contact Me",
      icon: (
        <BiQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Hire Me",
      icon: (
        
        <GrDocumentUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "resume",
    },
   
  ];
  return (
    <div className="flex items-center z-30 bottom-0 fixed justify-center h-44 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
