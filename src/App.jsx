import ContactSection from "./components/ContactSection/Contact Section";
import Introduction from "./components/Introduction/Introduction";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Skills from "./components/Skills/Skills";

function App() {

  return (
    <div className="App">
      <Introduction/>
      <Skills/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default App
