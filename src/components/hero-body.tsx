import { Aclonica } from 'next/font/google';
import Image from 'next/image';
import HeroButton from './hero-button';
import Ripple from '~/components/ui/ripple';
const acnolica = Aclonica({
    weight: '400',
    subsets: ['latin'],
});
export function HeroBody() {
    return (
        <div
            className={`${acnolica.className} relative flex h-full flex-col items-center justify-center gap-3 text-center`}
        >
            <div className="flex items-center justify-center gap-3">
                <div className="relative size-14 rounded-full transition-transform duration-200 hover:rotate-6 hover:scale-125  ">
                    <Image
                        src={
                            'https://fo4ugc338q.ufs.sh/f/gI5KGu6XhByvdB0hDwrOWNmvbErdGK0JLZ3qy6ea5woh8iYC'
                        }
                        alt="Profile Image"
                        className="rounded-full object-cover "
                        fill
                    />
                </div>
                <HeroButton>Hello, I&apos;m Samyam</HeroButton>
            </div>
            <div className={`text-5xl md:text-7xl  `}>
                <h1>Full Stack </h1>
                <h1 className="text-red-500">Designer </h1>
                <h1 className="text-amber-500">
                    <span className="text-primary">& </span>Developer{' '}
                </h1>
            </div>
            <h1 className="text-sm md:text-lg">
                I create digital experiences that balances <br />
                <span className="text-amber-500">performance</span> with{' '}
                <span className="text-red-500">user satisfaction</span>
            </h1>
            <Ripple mainCircleSize={700} numCircles={5} />
        </div>
    );
}
