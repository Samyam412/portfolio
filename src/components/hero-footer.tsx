'use client';

import { type ReactNode } from 'react';
import { CalendarPlus, Github, Linkedin, Mail } from 'lucide-react';
import Discord from './icons/discord';
import AnimatedDock from './dock';

export interface DockItems {
    title: string;
    icon: ReactNode;
    href?: string;
}

export const DockItems: DockItems[] = [
    { title: 'Github', icon: <Github />, href: 'https://github.com/Samyam412' },
    {
        title: 'LinkedIn',
        icon: <Linkedin />,
        href: 'https://www.linkedin.com/in/samyam-katwal',
    },
    {
        title: 'Discord',
        icon: <Discord />,
        href: 'https://discordapp.com/users/samyam_36412',
    },
    {
        title: 'Book Me',
        icon: <CalendarPlus />,
        href: 'https://cal.com/samyam-katwal',
    },
    { title: 'Email', icon: <Mail />, href: 'mailto:samyamkatwalwork@gmail.com' },
];

export function HeroFooter() {
    return (
        <div className=" flex h-16 items-center justify-between border-t border-t-slate-700 px-6 text-sm  ">
            <AnimatedDock items={DockItems} />
        </div>
    );
}
