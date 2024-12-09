import { Briefcase, Circle, Contact, House, IdCard } from "lucide-react";
import { SmallDock } from "./dock";
import { DockItems } from "./hero-footer";

const items: DockItems[] = [
  //todo make it redirect to the correct page
  { title: "Home", icon: <House />, href: "" },
  { title: "Projects", icon: <Briefcase />, href: "" },
  { title: "About Me", icon: <IdCard />, href: "" },
  { title: "Contact me", icon: <Contact />, href: "" },
];
export function HeroNav() {
  return (
    <nav className=" flex h-16 items-center justify-between border-b border-b-slate-700 px-6 text-sm  ">
      <h1 className=" flex cursor-pointer items-center gap-2 rounded-full border border-slate-700 p-2 transition-colors duration-300 hover:text-orange-400 ">
        <Circle fill="white" className="size-4 " />
        Samyam
      </h1>

      <div className="hidden gap-2 rounded-full border border-slate-700 *:p-2 md:flex ">
        <div className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400">
          <House className="size-4" />
          Home
        </div>
        <div className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400">
          <Briefcase className="size-4" />
          Projects
        </div>
        <div className="flex  cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-orange-400">
          <IdCard className="size-4" />
          About Me
        </div>
      </div>
      <div className="hidden cursor-pointer items-center gap-2 rounded-full border border-slate-700 p-2  transition-colors duration-300 hover:text-orange-400 md:flex">
        <Contact className="size-4" />
        Contact Me
      </div>
      <SmallDock items={items} />
    </nav>
  );
}
