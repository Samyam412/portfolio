"use client"
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { type ReactNode } from "react";
import { HoverIcon } from "./skills-icon";
import PosgresIcon from "./skills-icons/postgres";
import TypescriptIcon from "./skills-icons/typescript";
import NodeJsIcon from "./skills-icons/node-js";


export const SpringCards = () => {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
                <Card
                    title="Frontend & Design"
                    subtitle="I love designing visually appealing systems with subtle animations, prioritizing UX over UI to create minimal, efficient solutions that help users solve problems without distractions."
                    className="bg-primary text-primary-foreground"
                    icons={[{ icon: <Linkedin />, title: "Discord" }]}
                />
                <Card
                    title="Backend"
                    subtitle="I find problem solving and creating complex systems fun. I strive to create scalable, reliable and secure systems."
                    className="bg-secondary sm:-translate-y-6"
                    icons={[{ icon: <PosgresIcon />, title: "Postgres" }, { icon: <TypescriptIcon />, title: "Typescript" }, { icon: <NodeJsIcon />, title: "NodeJs" }]}
                />
                <Card
                    title="Cloud & DevOps"
                    subtitle="I have managed various cloud services for multiple projects."
                    className="bg-[#81BFDA]"
                    icons={[]}
                />
                <Card
                    title="Management"
                    subtitle="I have worked with multiple clients and stakeholders to define projects that suit their needs and managed these projects from start to finish."
                    className="bg-[#FADA7A] text-primary-foreground sm:-translate-y-6"
                    text={["Agile", "Scrum"]}
                />
            </div>
        </section>
    );
};

interface iconProps {
    icon: ReactNode
    title: string
}

const Card = ({
    title,
    subtitle,
    className,
    icons,
    text
}: {
    title: string;
    subtitle: string;
    className?: string;
    icons?: iconProps[]
    text?: string[]

}) => {
    return (
        <MotionConfig
            transition={{
                type: "spring",
                bounce: 0.5,
            }}
        >
            <motion.div
                whileHover="hovered"
                className={twMerge(
                    "group w-full border-2 border-black bg-emerald-300 backdrop-blur-xl",
                    className
                )}
            >
                <motion.div
                    initial={{
                        x: 0,
                        y: 0,
                    }}
                    variants={{
                        hovered: {
                            x: -8,
                            y: -8,
                        },
                    }}
                    className={twMerge(
                        "-m-0.5 border-2 border-black bg-emerald-300",
                        className
                    )}
                >
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0,
                        }}
                        variants={{
                            hovered: {
                                x: -8,
                                y: -8,
                            },
                        }}
                        className={twMerge(
                            "relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black bg-emerald-300 p-8",
                            className
                        )}
                    >
                        <p className="flex items-center text-2xl font-medium uppercase">
                            <ArrowDown className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
                            {title}
                        </p>

                        <div>

                            <p className="transition-[margin] text-sm duration-300 ease-in-out group-hover:mb-10">
                                {subtitle}
                            </p>
                            <div className="transition-[margin] text-sm duration-300 ease-in-out ">
                                {text ? <div className="flex gap-2">
                                    {text.map((item,_i) => {
                                        return <div key={_i} className="flex items-center justify-center">{item}</div>

                                    })}
                                </div> :
                                    <div className="size-fit">
                                        {icons?.map((icon) => {
                                            return < HoverIcon key={icon.title} icon={icon.icon} text={icon.title} />
                                        })}
                                    </div>
                                }
                            </div>


                        </div>


                        <motion.svg
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            }}
                            style={{
                                top: "0",
                                right: "0",
                                x: "50%",
                                y: "-50%",
                                scale: 0.75,
                            }}
                            width="200"
                            height="200"
                            className="pointer-events-none absolute z-10 rounded-full"
                        >
                            <path
                                id="circlePath"
                                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                                fill="none"
                            />
                            <text>
                                <textPath
                                    href="#circlePath"
                                    fill="black"
                                    className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                >
                                    DESIGN • Code • TEST •  REPEAT • DESIGN • Code • TEST •  REPEAT •
                                </textPath>
                            </text>
                        </motion.svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </MotionConfig>
    );
};
