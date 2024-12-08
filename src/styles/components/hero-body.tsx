import { Aclonica } from "next/font/google"
import Image from "next/image"
import HeroButton from "./hero-button"
const acnolica = Aclonica({
    weight: "400",
    subsets: ["latin"]
}
)
export function HeroBody() {

    return <div className={`${acnolica.className} h-full flex flex-col gap-3 text-center justify-center items-center`} >
        <div className="flex justify-center items-center gap-3">
            <div className="relative size-14 rounded-full hover:scale-125 transition-transform duration-200 hover:rotate-6  ">
                <Image src={"https://utfs.io/f/gI5KGu6XhByvdD1cCsrOWNmvbErdGK0JLZ3qy6ea5woh8iYC"} alt="Profile Image"
                    className="object-cover rounded-full " fill />
            </div>
            <HeroButton  >
                Hello, I&apos;m Samyam
            </HeroButton>
        </div>
        <div className={`text-7xl  `}>
            <h1>Full Stack </h1>
            <h1 className="text-red-500">Designer </h1>
            <h1 className="text-amber-500"> <span className="text-primary">& </span>Developer </h1>
        </div>
        <h1 className="text-lg">
            I create digital experiences that balances <br />
            <span className="text-amber-500">performance</span> with <span className="text-red-500">user satisfaction</span>
        </h1>
    </div >
}
