//import logo from './logo.svg';
//import './App.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navBar";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;