"use client"

import { type ReactNode } from "react";
import AnimatedDock from "./dock";
import { CalendarPlus, Github, Linkedin, Mail } from "lucide-react";
import { Discord } from "./icons/discord";
import { useToast } from "~/hooks/use-toast";

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
    const { toast } = useToast()
    function copyText(text: string) {
        navigator.clipboard.writeText(text)
        toast({ description: "Email copied to clipboard" })
    }


    return <div className=" border-t border-t-slate-700 h-16 flex items-center justify-between px-6 text-sm  ">
        {/* <h1>Design, Code, Test</h1> */}
        {/* <div className="hidden md:flex gap-2 md:items-center hover:text-orange-400 transition-colors duration-300 " onClick={() => copyText("samyamkatwalwork@gmail.com")}> */}
        {/*     <span><Mail /></span> */}
        {/*     samyamkatwalwork@gmail.com */}
        {/* </div> */}
        <AnimatedDock items={DockItems} />
    </div>
}
