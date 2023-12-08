import React, { ChangeEvent, useEffect, useState } from "react";
import "./PlanetSearch.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

interface Planet {
  idplanet: number;
  name: string;
}

function PlanetSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [validOptions, setValidOptions] = useState<Planet[]>([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await fetch("/api/planets?searchTerm=Mercury");
      const data = await response.json();
      console.log("Search term:", searchTerm);
      console.log("Search results:", data);
      // Update state or perform other actions with the search results
    } catch (error) {
      console.error("Error fetching planet options:", error);
    }
  };

  useEffect(() => {
    // Fetch valid planet options from the server
    fetchPlanetOptions();
  }, []); // Run this effect only once when the component mounts

  const fetchPlanetOptions = async () => {
    try {
      const response = await fetch("http://localhost:3001/planets");
      const data = await response.json();

      // Assuming that your server returns an array of planet names in the 'planet_name' field
      const options: Planet[] = data;
      setValidOptions(options);
    } catch (error) {
      console.error("Error fetching planet options:", error);
    }
  };

  return (
    <MDBCard className="planetcard">
      <h3>Planets</h3>
      <MDBCardImage
        className="planetimg"
        src="https://images.pexels.com/photos/12491599/pexels-photo-12491599.jpeg?cs=srgb&dl=pexels-zch-12491599.jpg&fm=jpg"
        alt="..."
        position="top"
      />
      <MDBCardBody>
        <MDBCardText>
          Embark on an astronomical journey with our innovative planet search
          tool. Uncover the mysteries of our closest neighbors. <br />
          <br />
          Click button to see NASA's Astronomical image of the day.
        </MDBCardText>

        <MDBBtn>
          <Link to="/apod">Apod</Link>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default PlanetSearch;
