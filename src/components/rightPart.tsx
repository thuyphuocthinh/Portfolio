import HomeCV from "@/components/content/homecv";
import About from "@/components/content/about";
import Skills from "./content/skills";
import Projects from "./content/project";
import Contact from "./content/contact";

export default function RightPart() {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <HomeCV />

          {/* /* <!-- ABOUT --> */}
          <About />
          {/* /* <!-- /ABOUT --> */}

          {/* /* <!-- SKILLS --> */}
          <Skills />
          {/* /* <!-- /SKILLS --> */}

          {/* /* <!-- SERVICES --> */}
          <Projects />
          {/* /* <!-- /SERVICES --> */}

          {/* /* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* /* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
}
