import "./App.css";
import Header from "./components/header";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Education />
        <Skills />
        <Experience />
      </main>
    </>
  );
}

export default App;
