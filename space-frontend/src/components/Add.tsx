import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Add() {
  const [planet, setPlanet] = useState({
    name: "",
    num_moons: "",
    fact: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlanet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/planets", planet);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form">
        <h1>Add new book</h1>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="num_moons"
          onChange={handleChange}
          name="num_moons"
        />
        <input
          type="text"
          placeholder="fact"
          onChange={handleChange}
          name="fact"
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}

export default Add;
