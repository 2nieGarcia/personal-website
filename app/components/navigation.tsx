import next from "next";
import { IconHome, IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconUser, IconBriefcase2 } from "@tabler/icons-react";
import { FloatingDock } from "./floating-dock";

export default function Navigation(){

    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/home",
        },
      
        {
          title: "About me",
          icon: (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#about",
        },
        {
          title: "Projects",
          icon: (
            <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/projects",
        },
        {
          title: "Facebook",
          icon: (
            <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.facebook.com/GarciaAntonioJr/",
        },
      
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/2nieGarcia",
        },
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/GarciaAntonioJr",
        },
      ];
    
    return(
        <div className="fixed right top-[90%] md:top-10 right-10 flex z-50">
          <div className="flex items-center justify-center w-full">
              <FloatingDock
                items={links}
              />
          </div>
        </div>
    )
}