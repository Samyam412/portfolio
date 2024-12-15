import { Briefcase, Circle, Contact, House, IdCard } from 'lucide-react';
import { SmallDock } from './dock';
import { type DockItems } from './hero-footer';
import Link from 'next/link';

const items: DockItems[] = [
    //todo make it redirect to the correct page
    { title: 'Home', icon: <House />, href: '#home' },
    { title: 'Projects', icon: <Briefcase />, href: '#projects' },
    { title: 'About Me', icon: <IdCard />, href: '#skills' },
    { title: 'Contact me', icon: <Contact />, href: '#contact' },
];
export function HeroNav() {
    return (
        <nav className=" flex h-16 items-center justify-between border-b border-b-slate-700 px-6 text-sm  ">
            <Link
                href="#home"
                className=" flex cursor-pointer items-center gap-2 rounded-full border border-slate-700 p-2 transition-colors duration-300 hover:text-orange-400 "
            >
                <Circle fill="white" className="size-4 " />
                Samyam 
            </Link>

            <div className="hidden gap-2 rounded-full border border-slate-700 *:p-2 md:flex ">
                <Link
                    href="#home"
                    className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400"
                >
                    <House className="size-4" />
                    Home
                </Link>
                <Link
                    href="#projects"
                    className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400"
                >
                    <Briefcase className="size-4" />
                    Projects
                </Link>
                <Link
                    href="#skills"
                    className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400"
                >
                    <IdCard className="size-4" />
                    About Me
                </Link>
            </div>
            <Link
                href="/contact"
                className="hidden cursor-pointer items-center gap-2 rounded-full border border-slate-700 p-2  transition-colors duration-300 hover:text-orange-400 md:flex"
            >
                <Contact className="size-4" />
                Contact Me
            </Link>
            <SmallDock items={items} />
        </nav>
    );
}
