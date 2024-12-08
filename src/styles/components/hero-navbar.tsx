import { Briefcase, Circle, Contact, House, IdCard } from "lucide-react"


export function HeroNav() {

    return <nav className=" border-b border-b-slate-700 h-16 flex items-center justify-between px-6 text-sm  ">
        <h1 className=" p-2 border border-slate-700 rounded-full flex items-center gap-2 ">
            <Circle fill="white" className="size-4 " />Samyam
        </h1>

        <div className="flex gap-2 border border-slate-700 *:p-2 rounded-full ">
            <div className="flex  gap-2 items-center">
                <House className="size-4" />
                Home
            </div>
            <div className="flex  gap-2 items-center">
                <Briefcase className="size-4" />
                Projects
            </div>
            <div className="flex  gap-2 items-center">
                <IdCard className="size-4" />
                About Me
            </div>

        </div>
        <div className="flex p-2 rounded-full  gap-2 items-center border border-slate-700">
            <Contact className="size-4" />
            Contact Me
        </div>
    </nav>
}
