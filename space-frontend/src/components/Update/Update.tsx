import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

interface Planet {
  name: string;
  num_moons: number;
  fact: string;
}

function Update() {
  const [planet, setPlanet] = useState<Planet>({
    name: "",
    num_moons: 0,
    fact: "",
  });
  const [error, setError] = useState(false);

  const { idplanet } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/planets/${idplanet}`
        );
        setPlanet(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchPlanet();
  }, [idplanet]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPlanet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      console.log("Updating planet with id:", idplanet); // Check if idplanet is defined
      console.log("Updated planet data:", planet); // Check the updated planet data
      await axios.put(`http://localhost:8800/planets/${idplanet}`, planet);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update Planet</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={planet.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Moons:
          <input
            type="text"
            name="num_moons"
            value={planet.num_moons}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fact:
          <textarea name="fact" value={planet.fact} onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleClick}>Update Planet</button>
      </form>
    </div>
  );
}

export default Update;
