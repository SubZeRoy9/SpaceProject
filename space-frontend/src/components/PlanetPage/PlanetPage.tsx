import { useState } from "react";

function PlanetPage() {
  const [name, setName] = useState("");
  const [fact, setFact] = useState("");
  const [num_moons, setNum_moons] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{fact}</p>
      <p>{num_moons}</p>
    </>
  );
}

export default PlanetPage;
