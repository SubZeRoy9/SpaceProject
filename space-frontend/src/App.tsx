import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav";
import PlanetInfo from "./components/PlanetInfo";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
