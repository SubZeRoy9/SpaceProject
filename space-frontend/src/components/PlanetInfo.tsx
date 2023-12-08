import axios from "axios";
import { useEffect, useState } from "react";
import PlanetSearch from "./PlanetSearch";
import { Link } from "react-router-dom";

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

  const handleDelete = async (id: number) => {
    try {
      console.log("Deleting planet with ID:", id);
      await axios.delete(`http://localhost:8800/planet/${id}`);
      console.log("Deletion successful!");
      // Update state or UI if needed
      window.location.reload();
    } catch (err) {
      console.error("Error deleting planet:", err);
    }
  };

  return (
    <>
      <h1>Planets</h1>
      <div className="planets">
        {planets &&
          planets.map((planet) => (
            <div className="planet" key={planet.idplanet}>
              <h2>{planet.name}</h2>
              <p>Number of moons: {planet.num_moons}</p>
              <p>{planet.fact}</p>
              {planet.image && <img src={planet.image} alt="" />}
              <button
                className="delete"
                onClick={() => handleDelete(planet.idplanet)}
              >
                Delete
              </button>
              <button>Update</button>
            </div>
          ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </>
  );
}

export default PlanetInfo;
