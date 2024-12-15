'use client'

import  { type ReactNode, useState } from 'react'

interface props {
    icon: ReactNode;
    text: string
}
export const HoverIcon = ({ icon, text }: props) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative inline-block" >
            <div
                className="relative size-12 md:size-14   p-3 transition-colors duration-200 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={text}
            >
                {icon}
            </div>
            {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                    {text}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
                </div>
            )}
        </div >
    )
}

