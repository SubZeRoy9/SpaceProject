import React, { useState } from "react";
import axios from "axios";

interface PlanetData {
  name: string;
  num_moons: number;
  fact: string;
}

const PlanetInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [planetInfo, setPlanetInfo] = useState<PlanetData | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/planets/${searchTerm}`);
      setPlanetInfo(response.data as PlanetData); // Assuming the response structure matches PlanetData
    } catch (error) {
      console.error("Error fetching planet information:", error);
      setPlanetInfo(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a planet"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {planetInfo && (
        <div>
          <h2>{planetInfo.name}</h2>
          <p>Number of moons: {planetInfo.num_moons}</p>
          <p>Did you know?: {planetInfo.fact}</p>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
