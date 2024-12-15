'use client';

import { motion } from 'framer-motion';

export default function AboutMeCard() {
    return (
        <div id="aboutMe" className="flex items-center justify-center  p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl overflow-hidden rounded-lg bg-primary shadow-xl"
            >
                <div className="p-8">
                    <h1 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl">
                        About Me
                    </h1>
                    <p className="mt-4 text-sm text-gray-500 md:text-lg">
                        I am a full-stack software engineer with over 2 years of experience. I
                        specialize in developing web-based applications using NextJs and NodeJS for
                        backend, and ReactJS for frontend (including PWA and SPA). Client
                        satisfaction is my top priority, and I always adhere to best practices and
                        industry standards.
                    </p>
                    <p className="mt-4  text-sm text-gray-500 md:text-lg">
                        I believe in delivering the best User Experience [UI/UX] with efficient and
                        seamless application performance. My experience spans all phases of the
                        software development life-cycle: from client-side UI, middle-tier MVC, API
                        services, backend database, to release delivery pipeline.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
