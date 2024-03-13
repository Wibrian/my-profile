import "./App.css";
import Header from "./components/header";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Header />
      <main>
        <Education />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

export default App;
