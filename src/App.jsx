import ContactSection from "./components/ContactSection/Contact Section";
import Introduction from "./components/Introduction/Introduction";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Skills from "./components/Skills/Skills";
import { PROJECTS } from "./assets/mock/projects-mock";

function App() {

  return (
    <div className="App">
      <Introduction/>
      <Skills/>
      <ProjectSection data={PROJECTS}/>
      <ContactSection/>
    </div>
  )
}

export default App
