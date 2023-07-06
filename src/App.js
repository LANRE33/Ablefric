import React from "react";
import "./App.css";
import Navbar from "./conponents/inc/Navbar";
import Home from "./conponents/pages/Home";
import About from "./conponents/pages/About";
import Contact from "./conponents/pages/Contact";
import Register from "./conponents/pages/Register";
import Login from "./conponents/pages/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./conponents/inc/Footer";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>

    < Route exact path="/"  element={<Home/>} />
    <Route  path="/About"  element={<About/>} />
    <Route path="/Contact"  element={<Contact/>} />
    <Route path="/Login"  element={<Login/>} />
    <Route path="/Register"  element={<Register/>} />
    </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
