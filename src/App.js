
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/project" element={<Projects/>} />
        <Route  path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
