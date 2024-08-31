import Home from "../components/sections/home";
import Projects from "../components/sections/projects";
import AboutMe from "../components/sections/aboutMe";
import Education from "../components/sections/education";
import Skills from "../components/sections/skills";
import ScrollButton  from "../components/items/scrollButton";
export default function App() {
  return (
    <div>
      <Home />
      <div className="py-10" id="about-me">
        <AboutMe />
      </div>
      <Education />
      <Skills />
      <Projects />
      <ScrollButton />
    </div>
  );
}
