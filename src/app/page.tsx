import { HeroBody } from "~/components/hero-body";
import { HeroFooter } from "~/components/hero-footer";
import { HeroNav } from "~/components/hero-navbar";

const HomePage = () => {
  return (
    <div>
      <div className="flex h-screen max-h-screen w-full flex-col justify-between ">
        <HeroNav />
        <HeroBody />
        <HeroFooter />
      </div>
      <div className="h-screen">hello</div>
    </div>
  );
};

export default HomePage;
