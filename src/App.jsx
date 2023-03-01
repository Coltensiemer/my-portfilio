import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero"; 
import Languages from "./components/Languages/Languages";
import Projects from "./components/Project.jsx/Projects";
import Footer from "./components/Footer"; 

function App() {
  return (
  <div className="App">
    <Header />
    <Hero />
    <AboutMe />
    <Languages />
    <Projects />
    <Footer />
  </div>

  )
}

export default App;
