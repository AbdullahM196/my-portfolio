// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/portfolio";
import Services from "./Components/Services/Srvices";
import Contact from "./Components/Concat/Concat";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="MyPages">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </>
  );
}
