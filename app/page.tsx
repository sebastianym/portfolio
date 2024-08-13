import Home from "./home";
import Projects from "./projects";
import AboutMe from "./aboutMe";
import Education from "./education";
import Skills from "./skills";
import ScrollButton  from "./scrollButton";
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
