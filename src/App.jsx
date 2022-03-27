import Contact from "./components/contact_pages/Contact";
import Intro from "./components/intro/Intro";
import Project from "./components/projects/Project";
import Topbar from "./components/topbar/Topbar";
import "./App.scss"
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;