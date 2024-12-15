import { CareerHeader } from '~/components/career/career-header';
import { HeroBody } from '~/components/hero-body';
import { HeroFooter } from '~/components/hero-footer';
import { HeroNav } from '~/components/hero-navbar';
import AboutMeCard from '~/components/icons/about/about-card';
import { SpringCards } from '~/components/skills/skills-card';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col overflow-clip">
            <section id="home" className="flex h-screen max-h-screen flex-col justify-between ">
                <HeroNav />
                <HeroBody />
                <HeroFooter />
            </section>
            <CareerHeader />
            <section id="skills">
                <h1 className="text-center text-2xl ">Skills</h1>
                <SpringCards />
            </section>
            <section id="about me">
                <AboutMeCard />
            </section>
        </div>
    );
};

export default HomePage;
