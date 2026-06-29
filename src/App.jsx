import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experince from "./components/Experince";
import { motion } from "framer-motion";

const App=()=> {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset:100,
  });
},
[]);

  return (
    <div className="bg-[#111827] min-h-screen text-white">
    
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experince/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;