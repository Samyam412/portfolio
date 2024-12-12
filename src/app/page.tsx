import { CareerHeader } from '~/components/career/career-header';
import { HeroBody } from '~/components/hero-body';
import { HeroFooter } from '~/components/hero-footer';
import { HeroNav } from '~/components/hero-navbar';
import { SpringCards } from '~/components/skills/skills-card';

const HomePage = () => {
    return (
        <div className='flex flex-col w-full overflow-clip'>
            <div id='home' className="flex h-screen max-h-screen flex-col justify-between ">
                <HeroNav />
                <HeroBody />
                <HeroFooter />
            </div>
            <CareerHeader />
            <div id='skills' className=''>
                <h1 className='text-center text-2xl '>Skills</h1>
                <SpringCards />
            </div>
        </div >
    );
};

export default HomePage;
