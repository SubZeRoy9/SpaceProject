import React, { useState, useEffect } from "react";
import "./Apod.css";

// Define an interface for the APOD data structure
interface ApodData {
  title: string;
  date: string;
  hdurl: string;
  explanation: string;
}

function Apod() {
  const [apodData, setApodData] = useState<ApodData>({} as ApodData);
  const apiKey = "Zwwi3LrA0vikxPl6EyzCmsug8jXyQdQX1j2JEIS4"; // Your NASA API key

  useEffect(() => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: ApodData) => {
        setApodData(data);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
      });
  }, [apiKey]);

  return (
    <>
      <h1>Astronomy Picture of the Day</h1>
      <div className="apod-container">
        {apodData.title && <p>{apodData.title}</p>}
        {apodData.date && <p>{apodData.date}</p>}
        {apodData.hdurl && (
          <img
            src={apodData.hdurl}
            alt={apodData.title}
            className="apod-image"
          />
        )}
        {apodData.explanation && <p>{apodData.explanation}</p>}
      </div>
    </>
  );
}

export default Apod;
