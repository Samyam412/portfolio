'use client';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Eye, Triangle, ZoomIn } from 'lucide-react';
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { ImageSwiper } from './image-carousel';

const SwapColumnFeatures = () => {
    const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]!);

    return (
        <section className="relative mx-auto max-w-7xl">
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
                    stiffness: 400,
                    damping: 25,
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
            className="relative z-0 flex h-fit md:h-screen"
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
                    <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
                    <p className="text-slate-600">{featureInView.description}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="mt-8 block md:hidden"
                >
                    <ExampleFeature featureInView={featureInView} />
                </motion.div>
            </div>
        </section>
    );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
    return (
        <div className="h-96 w-full rounded-xl bg-slate-800 shadow-xl">
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
    Icon: ReactNode;

};

const features: FeatureType[] = [
    {
        id: 1,
        callout: 'Full-Stack Developer',
        title: 'Maheswori Group',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.',
        contentPosition: 'r',
        Icon: <Eye />,
        Images: ["https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwxfHxwcm9kdWN0c3xlbnwwfHx8fDE3MzM3Mjk3ODZ8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1676906242973-739577556387?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwzfHxhZG1pbiUyMHBhbmVsfGVufDB8fHx8MTczMzcyOTg2M3ww&ixlib=rb-4.0.3"]
    },
    {
        id: 2,
        callout: 'Find people',
        title: "They're all here",
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.',
        contentPosition: 'l',
        Icon: <ZoomIn />,
        Images: ["https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwxfHxwcm9kdWN0c3xlbnwwfHx8fDE3MzM3Mjk3ODZ8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1676906242973-739577556387?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwzfHxhZG1pbiUyMHBhbmVsfGVufDB8fHx8MTczMzcyOTg2M3ww&ixlib=rb-4.0.3"]
    }, {
        id: 3,
        callout: 'Have fun',
        title: "Let's party",
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.',
        contentPosition: 'r',
        Icon: <Triangle />,
        Images: ["https://images.unsplash.com/photo-1676906242973-739577556387?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwzfHxhZG1pbiUyMHBhbmVsfGVufDB8fHx8MTczMzcyOTg2M3ww&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixid=M3w2MjE1NTV8MHwxfHNlYXJjaHwxfHxwcm9kdWN0c3xlbnwwfHx8fDE3MzM3Mjk3ODZ8MA&ixlib=rb-4.0.3"]

    },
    {
        id: 4,
        callout: 'Get paid',
        title: 'Cha-ching!',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.',
        contentPosition: 'l',
        Icon: <DollarSign />,
    },
];
