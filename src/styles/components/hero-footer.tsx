"use client"
import { ReactNode } from "react";
import AnimatedDock from "./dock";
import { Github, Linkedin, Mail } from "lucide-react";
import { Discord } from "./icons/discord";
import Calendly from "./icons/calendly";
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
    { title: "Calendly", icon: <Calendly />, href: "https://cal.com/samyam-katwal/15min" },
]

export function HeroFooter() {
    const { toast } = useToast()
    function copyText(text: string) {
        navigator.clipboard.writeText(text)
        toast({ description: "Email copied to clipboard" })
    }


    return <div className="border-t border-t-slate-700 h-16 flex items-center justify-between px-6 text-sm  ">
        <h1>Design, Code, Test</h1>
        <AnimatedDock items={DockItems} />
        <div className="hidden md:flex gap-2 md:items-center " onClick={() => copyText("samyamkatwalwork@gmail.com")}>
            <span><Mail /></span>
            samyamkatwalwork@gmail.com
        </div>
    </div>
}
