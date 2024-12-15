'use client';

import { Github, Linkedin, DiscIcon as Discord, CalendarPlus, Mail, Contact } from 'lucide-react';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const DockItems = [
    {
        title: 'Github',
        icon: <Github className="mr-2 h-4 w-4" />,
        href: 'https://github.com/Samyam412',
    },
    {
        title: 'LinkedIn',
        icon: <Linkedin className="mr-2 h-4 w-4" />,
        href: 'https://www.linkedin.com/in/samyam-katwal',
    },
    {
        title: 'Discord',
        icon: <Discord className="mr-2 h-4 w-4" />,
        href: 'https://discordapp.com/users/samyam_36412',
    },
    {
        title: 'Book Me',
        icon: <CalendarPlus className="mr-2 h-4 w-4" />,
        href: 'https://cal.com/samyam-katwal',
    },
    {
        title: 'Email',
        icon: <Mail className="mr-2 h-4 w-4" />,
        href: 'mailto:samyamkatwalwork@gmail.com',
    },
];

export function ContactDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hidden cursor-pointer items-center gap-2 rounded-full border border-slate-700 p-2 transition-colors duration-300 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 md:flex">
                <Contact className="size-4" />
                Contact Me
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border border-slate-700 bg-slate-800">
                {DockItems.map((item) => (
                    <DropdownMenuItem
                        key={item.title}
                        className="focus:bg-slate-700 focus:text-orange-400"
                    >
                        <Link
                            href={item.href}
                            className="flex w-full items-center px-2 py-2 text-sm text-slate-200 transition-colors duration-200 hover:text-orange-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
