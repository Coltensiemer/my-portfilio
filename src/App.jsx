import React, { useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Languages from "./components/Languages/Languages";
import Projects from "./components/Project.jsx/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {ReactComponent as Background } from "./assets/svgs/mountainvector.svg"
import {ReactComponent as BackgroundPng } from "./assets/svgs/mountainvector.svg"


function App() {
  const [darkModeTheme, setDarkModeTheme] = React.useState(true);

  const darkmodeHandle = darkModeTheme ? "dark" : "";

  function toggleDarkMode() {
    setDarkModeTheme((prev) => !prev);
  }

  console.log(darkModeTheme);

  return (
    <div className="App">

      <div className={darkmodeHandle}>
        <Header toggleDarkMode={toggleDarkMode} darkModeTheme={darkModeTheme} />
        <Hero darkModeTheme={darkModeTheme} />
        <AboutMe darkModeTheme={darkModeTheme} />
        <Languages />
        <Projects />
        <Contact />
       
        <Footer />
      </div>
    </div>
  );
}

export default App;
