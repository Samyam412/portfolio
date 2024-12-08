"use client"

import { type ReactNode } from "react";
import AnimatedDock from "./dock";
import { CalendarPlus, Github, Linkedin, Mail } from "lucide-react";
import { Discord } from "./icons/discord";

export interface DockItems {
    title: string
    icon: ReactNode
    href?: string
}

const DockItems: DockItems[] = [
    { title: "Github", icon: <Github />, href: "https://github.com/Samyam412" },
    { title: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/samyam-katwal" },
    { title: "Discord", icon: <Discord />, href: "https://discordapp.com/users/samyam_36412" },
    { title: "Book Me", icon: <CalendarPlus />, href: "https://cal.com/samyam-katwal" },
    { title: "Email", icon: <Mail />, href: "https://cal.com/samyam-katwal" },
]

export function HeroFooter() {
    return (<div className=" border-t border-t-slate-700 h-16 flex items-center justify-between px-6 text-sm  ">
        <AnimatedDock items={DockItems} />
    </div>)
}
