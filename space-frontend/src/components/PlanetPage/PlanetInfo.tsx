import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PlanetInfo.css"; // Import the provided CSS file

interface Planet {
  idplanet: number;
  name: string;
  num_moons: number;
  image: string;
  fact: string;
  // Add other fields if necessary
}

function PlanetInfo() {
  const [planets, setPlanets] = useState<Planet[] | undefined>(undefined);

  useEffect(() => {
    const fetchAllPlanets = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planets");
        setPlanets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPlanets();
  }, []);

  const handleDelete = async (idplanet: number) => {
    try {
      await axios.delete(`http://localhost:8800/planets/${idplanet}`);
      // Update the state without a page reload
      setPlanets((prevPlanets) =>
        prevPlanets?.filter((planet) => planet.idplanet !== idplanet)
      );
    } catch (err) {
      console.log("This is the error" + err);
    }
  };

  return (
    <>
      <h1>Planets</h1>
      <div className="planets">
        {planets &&
          planets.map((planet) => (
            <div className="planetcard" key={planet.idplanet}>
              <h2>{planet.name}</h2>
              <p>Number of moons: {planet.num_moons}</p>
              <p>{planet.fact}</p>
              {planet.image && (
                <img className="planetimg" src={planet.image} alt="" />
              )}
              <button
                className="delete"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(planet.idplanet);
                }}
              >
                Delete
              </button>
              <button className="update">
                <Link
                  to={`/update/${planet.idplanet}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Update
                </Link>
              </button>
            </div>
          ))}
      </div>
      <button>
        <Link to="/add">Add new planet</Link>
      </button>
    </>
  );
}

export default PlanetInfo;
