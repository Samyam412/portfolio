'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { cn } from '~/lib/utils'
import Image from 'next/image'

export const ImageSwiper: React.FC<{ images: string[]; className?: string; }> = ({
    images,
    className,
}) => {
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
        setImgIndex(0)
    }, [images])

    const dragX = useMotionValue(0)

    const onDragEnd = () => {
        const x = dragX.get()
        if (x <= -10 && imgIndex < images.length - 1) {
            setImgIndex((e) => e + 1)
        } else if (x >= 10 && imgIndex > 0) {
            setImgIndex((e) => e - 1)
        }
    }

    return (
        <div
            className={cn(
                'group/hover relative aspect-video overflow-hidden rounded-lg',
                className
            )}>
            <div className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-5 ">
                <button
                    style={imgIndex === 0 ? { opacity: 0 } : {}}
                    className="pointer-events-auto h-fit w-fit rounded-full bg-white/80 p-2  "
                    onClick={() => {
                        if (imgIndex > 0) {
                            setImgIndex((pv) => pv - 1)
                        }
                    }}>
                    <IconChevronLeft className="stroke-neutral-600" size={20} />
                </button>
                <button
                    style={imgIndex === images.length - 1 ? { opacity: 0 } : {}}
                    className="pointer-events-auto h-fit w-fit rounded-full bg-white/80 p-2  "
                    onClick={() => {
                        if (imgIndex < images.length - 1) {
                            setImgIndex((pv) => pv + 1)
                        }
                    }}>
                    <IconChevronRight className="stroke-neutral-600" size={20} />
                </button>
            </div>
            <div className="pointer-events-none absolute bottom-2 z-10 flex w-full items-center justify-center">
                <div className="flex w-9 items-center justify-center rounded-md bg-black/80 p-0.5 text-xs text-white ">
                    <div>
                        {imgIndex + 1}/{images.length}
                    </div>
                </div>
            </div>
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                dragMomentum={false}
                style={{
                    x: dragX
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`
                }}
                onDragEnd={onDragEnd}
                transition={{ damping: 18, stiffness: 90, type: 'spring', duration: 0.2 }}
                className=" flex h-full cursor-grab items-center rounded-[inherit] active:cursor-grabbing">
                {images.map((src, i) => {
                    return (
                        <motion.div
                            key={i}
                            className="h-full relative w-full shrink-0 overflow-hidden bg-neutral-800 object-cover first:rounded-l-[inherit] last:rounded-r-[inherit]">
                            <Image fill alt="Project Images" src={src} className="pointer-events-none object-cover" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}
