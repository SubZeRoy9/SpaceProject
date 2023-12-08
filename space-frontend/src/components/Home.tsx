import PlanetSearch from "./PlanetSearch";
import "./Home.css";
import { Carousel, Navbar } from "react-bootstrap";
import PlanetInfo from "./PlanetInfo";

function Home() {
  return (
    <>
      <h1>Welcome to Astro Facts!</h1>
      <PlanetSearch />
      <PlanetInfo />
    </>
  );
}
export default Home;
