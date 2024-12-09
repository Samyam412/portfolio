import { CareerHeader } from '~/components/career/career-header';
import { HeroBody } from '~/components/hero-body';
import { HeroFooter } from '~/components/hero-footer';
import { HeroNav } from '~/components/hero-navbar';

const HomePage = () => {
    return (
        <div>
            <div className="flex h-screen max-h-screen w-full flex-col justify-between ">
                <HeroNav />
                <HeroBody />
                <HeroFooter />
            </div>
            <CareerHeader />
        </div>
    );
};

export default HomePage;
