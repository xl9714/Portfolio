import Contact from "./components/contact_pages/Contact";
import Intro from "./components/intro/Intro";
import Project from "./components/projects/Project";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./App.scss"
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;