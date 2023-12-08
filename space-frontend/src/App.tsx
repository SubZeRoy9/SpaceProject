import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav";
import PlanetInfo from "./components/PlanetPage/PlanetInfo";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";
import Apod from "./components/Apod/Apod";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/apod" element={<Apod />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
