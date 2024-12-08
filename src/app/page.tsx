import { HeroBody } from "~/styles/components/hero-body";
import { HeroFooter } from "~/styles/components/hero-footer";
import { HeroNav } from "~/styles/components/hero-navbar";

const HomePage = () => {
    return (
        <div
            className="w-full h-screen max-h-screen flex justify-between flex-col " >
            <HeroNav />
            <HeroBody />
            <HeroFooter />
        </div>

    );
};

export default HomePage;
