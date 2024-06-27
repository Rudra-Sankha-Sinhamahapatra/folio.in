import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { Education } from "./components/ui/mybox";
import { Navbar } from "./components/ui/nav";
import Skills from "./components/ui/skills";
import { Learning } from "./components/ui/Learning";
import { Socials } from "./components/ui/Socials";
import { Projects } from "./components/ui/Projects";

const Home: React.FC = () => {
  return (
    <BackgroundGradientAnimation>
      <Navbar />
      <div className="text-xl font-semibold text-white flex justify-center mt-4">
        About
      </div>
      <div className="min-h-screen w-full pt-20">
        <section id="home" className="mb-10 scroll-mt-20">
          <div className="grid grid-cols-3 gap-4">
            <Education />
            <Learning />
            <div className="w-60">
              <Socials />
            </div>
          </div>
        </section>
        <section id="skills" className="mb-10 scroll-mt-20">
          <Skills />
        </section>
        <section id="projects" className="mb-10 scroll-mt-20">
        <Projects/>
        </section>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Home;
