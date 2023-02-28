import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero"; 
import Languages from "./components/Languages";
import Projects from "./components/Project.jsx/Projects";

function App() {
  return (
  <div className="App">
    <Header />
    <Hero />
    <AboutMe />
    <Languages />
    <Projects />
    <h1>Hello World</h1>
  </div>

  )
}

export default App;
