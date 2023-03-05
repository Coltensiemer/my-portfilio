import React, { useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero"; 
import Languages from "./components/Languages/Languages";
import Projects from "./components/Project.jsx/Projects";
import Footer from "./components/Footer"; 
import Contact from "./components/Contact";

function App() {

const [darkModeTheme, setDarkModeTheme ] = React.useState(false)

const darkmodeHandle = darkModeTheme ? "dark" : ""; 

function toggleDarkMode() { 
  setDarkModeTheme(prev => !prev)
}


  return (
  <div className="App">
    <div className={darkmodeHandle}> 
    <Header 
     
    />
    <Hero />
    <AboutMe />
    <Languages />
    <Projects />
    <Contact />
    <Footer />
    </div>
  </div>

  )
}

export default App;
