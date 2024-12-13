"use client";

import {
    AnimatePresence,
    type MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { type DockItems } from "./hero-footer";

interface AnimatedDockProps {
    items: DockItems[];
    largeClassName?: string;
    smallClassName?: string;
}

export default function AnimatedDock({
    items,
    largeClassName,
}: AnimatedDockProps) {
    return (
        <>
            <LargeDock items={items} className={largeClassName} />
        </>
    );
}

const LargeDock = ({
    items,
    className,
}: {
    items: DockItems[];
    className?: string;
}) => {
    const mouseXPosition = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseXPosition.set(e.pageX)}
            onMouseLeave={() => mouseXPosition.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3 dark:bg-primary", // Large dock styles
                className,
            )}
        >
            {items.map((item) => (
                <DockIcon
                    mouseX={mouseXPosition}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    href={item.href}
                />
            ))}
        </motion.div>
    );
};

function DockIcon({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    // Calculate the distance from the mouse to the icon
    const distanceFromMouse = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }; // Get icon bounds
        return val - bounds.x - bounds.width / 2; // Calculate distance from center
    });

    // Transform properties for width and height based on mouse distance
    const widthTransform = useTransform(
        distanceFromMouse,
        [-150, 0, 150],
        [40, 80, 40],
    );
    const heightTransform = useTransform(
        distanceFromMouse,
        [-150, 0, 150],
        [40, 80, 40],
    );

    // Transform properties for icon size based on mouse distance
    const iconWidthTransform = useTransform(
        distanceFromMouse,
        [-150, 0, 150],
        [20, 40, 20],
    );
    const iconHeightTransform = useTransform(
        distanceFromMouse,
        [-150, 0, 150],
        [20, 40, 20],
    );

    // Spring animations for smooth transitions
    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const iconWidth = useSpring(iconWidthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const iconHeight = useSpring(iconHeightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href ?? ""}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-white/20 text-primary shadow-lg backdrop-blur-md dark:bg-primary dark:text-white"
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md px-2 py-0.5 text-xs text-primary dark:text-white"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: iconWidth, height: iconHeight }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}

export const SmallDock = ({
    items,
    className,
}: {
    items: DockItems[];
    className?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layoutId="nav"
                        className="absolute -inset-x-16 top-full z-50 mb-2 flex flex-col gap-2"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    transition: { delay: index * 0.05 },
                                }}
                                transition={{ delay: (items.length - 1 - index) * 0.05 }}
                            >
                                <Link
                                    href={item.href ?? ""}
                                    key={item.title}
                                    className="flex w-fit items-center justify-start gap-2 rounded-full p-2 text-primary shadow-md backdrop-blur-md dark:text-white"
                                >
                                    <span>{item.icon}</span>
                                    {item.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-primary shadow-md backdrop-blur-md dark:bg-primary/20 dark:text-white"
            >
                {isOpen ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Menu className="h-5 w-5" />
                )}
            </button>
        </div>
    );
};
