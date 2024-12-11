'use client';
import { motion, useInView } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ImageSwiper } from './image-carousel';

const SwapColumnFeatures = () => {
    const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]!);

    return (
        <section className="relative mx-auto max-w-7xl ">
            <SlidingFeatureDisplay featureInView={featureInView} />
            {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
            <div className="-mt-[100vh] hidden md:block" />
            {features.map((s) => (
                <Content key={s.id} featureInView={s} setFeatureInView={setFeatureInView} {...s} />
            ))}
        </section>
    );
};

const SlidingFeatureDisplay = ({ featureInView }: { featureInView: FeatureType }) => {
    return (
        <div
            style={{
                justifyContent: featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
            }}
            className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
        >
            <motion.div
                layout
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
                className="h-fit w-3/5 rounded-xl p-8"
            >
                <ExampleFeature featureInView={featureInView} />
            </motion.div>
        </div>
    );
};

const Content = ({
    setFeatureInView,
    featureInView,
}: {
    setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
    featureInView: FeatureType;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-150px',
    });

    useEffect(() => {
        if (isInView) {
            setFeatureInView(featureInView);
        }
    }, [isInView]);

    return (
        <section
            ref={ref}
            className="relative z-0 flex h-fit md:h-screen "
            style={{
                justifyContent: featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
            }}
        >
            <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
                        {featureInView.callout}
                    </span>
                    <p className="my-3 text-2xl md:text-4xl font-bold">{featureInView.title}</p>
                    <p
                        className="text-slate-500 hidden text-sm md:block"
                        dangerouslySetInnerHTML={{ __html: featureInView.description }}
                    />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="md:mt-8 block md:hidden"
                >
                    <ExampleFeature featureInView={featureInView} />
                    <p
                        className="text-slate-500 mt-4 md:hidden text-sm "
                        dangerouslySetInnerHTML={{ __html: featureInView.description }}
                    />




                </motion.div>
            </div>
        </section>
    );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
    return (
        <div className="md:h-96 aspect-video w-full rounded-xl bg-slate-800 shadow-xl">
            <ImageSwiper images={featureInView.Images ?? []} />
        </div>
    );
};

export default SwapColumnFeatures;

type FeatureType = {
    id: number;
    callout: string;
    title: string;
    description: string;
    contentPosition: 'l' | 'r';
    Images?: string[];

};

const features: FeatureType[] = [
    {
        id: 1,
        callout: 'Full-Stack Developer',
        title: 'Maheswori Group',
        description:
            `- Developed a multi-tenant school management platform with Next.js for 6000+ users.<br/>  
- Designed scalable data storage using PostgreSQL and Drizzle ORM.<br/>  
- Reduced deployment time by 60% with Docker containerization.<br/>  
- Applied repository pattern for maintainable, modular code.<br/>  
- Automated attendance, fee collection, and reporting to enhance efficiency.<br/>  `,
        contentPosition: 'r',
        Images: [
            "https://utfs.io/f/gI5KGu6XhByvHoWlFv7KJe0GxYR6lXW85ygtwQuIT3kcEjv7",
            "https://utfs.io/f/gI5KGu6XhByvHJFMEK7KJe0GxYR6lXW85ygtwQuIT3kcEjv7",
            "https://utfs.io/f/gI5KGu6XhByvG6cJPqz3YiIBJo78GT1MlnRPu9OVhLUHW2jd",
            "https://utfs.io/f/gI5KGu6XhByvMh2rKmV30SpqHPXViLyTkCeAQU9xJl4cgadm"
        ]
    },
    , {
        id: 2,
        callout: 'Full-Stack Developer',
        title: "Eze / ToysNpark",
        description:
            `- Built an e-commerce platform with an admin panel for managing orders, products, and sales.<br/>  
- Integrated semantic product search using OpenAI API and Upstash vector DB.<br/>  
- Automated order tracking via WhatsApp API and Zapier for business owners.<br/>  
- Developed a real-time sales dashboard to track history and visualize growth.<br/>  
- Increased monthly sales by 800 through automated message replies.<br/>  
- Enhanced customer support with error handling using Sentry.<br/>  `,
        contentPosition: 'r',
        Images:
            [
                "https://utfs.io/f/gI5KGu6XhByvC9bRoBd8nScyRUxJWeAOsl4NkvquFP0GjhbT",
                "https://utfs.io/f/gI5KGu6XhByvV1WgdtqHk9cq4dM8jN3nYPzTfbg7pKosGQRJ",
                "https://utfs.io/f/gI5KGu6XhByvicBNZFkxPsuL9MBGEowyvq2jIiDeQXW0YSgN",
                "https://utfs.io/f/gI5KGu6XhByvkxcH26IUnIcYSJt8iCeg19OMsXzEF4NaT3WA",
                "https://utfs.io/f/gI5KGu6XhByvYt7KiRGrgZsf8mCzvUMGFo4dckPpw6aS9HnI"
            ]

    },
    {
        id: 3,
        callout: 'Associate Software Developer',
        title: "Shree Harikul",

        description:
            `- Redesigned a school management system with Next.js and role-based access control.<br/>  
- Integrated Kinde Auth using scalable APIs and webhooks.<br/>  
- Improved system metrics with telemetry and contextual API logging.<br/>  
- Built a customizable Admin Panel for content management.<br/>  
- Implemented AWS S3 for image uploads and Next.js Image for optimizations.<br/>  
- Developed efficient API endpoints for fee and salary calculations, boosting scalability.<br/>  `,
        contentPosition: 'l',
        Images: ["https://utfs.io/f/gI5KGu6XhByvSGlTOUFOEFGLpNI5UuKM1PagcroJwnTxCY08", "https://utfs.io/f/gI5KGu6XhByvKwXHcsJqoeCHMnrIJajGZ0Tg8Qt32zbFBW4m"]
    },
    {
        id: 4,
        callout: 'Web-Development Intern',
        title: 'Yatri-Supply',
        description:
            `- Created a responsive e-commerce platform with an intuitive user interface.<br/>  
- Implemented secure RESTful APIs with JWT-based authentication.<br/>  
- Developed a task management system with streamlined cart and checkout features.`,
        contentPosition: 'l',
        Images:
            [
                "https://utfs.io/f/gI5KGu6XhByvXItnUdS8Y6LR3iEMwOxVhrlC24U9NueJBKzG",
                "https://utfs.io/f/gI5KGu6XhByvV80y7LHk9cq4dM8jN3nYPzTfbg7pKosGQRJu",
            ]
    },
];
