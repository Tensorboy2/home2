import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const UnderConstruction: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    // Fetch a random image from NASA's Astronomy Picture of the Day API
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        setBackgroundImage(response.data.url);
      })
      .catch((error) => {
        console.error('Error fetching the NASA image:', error);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        fontSize: '3em',
        fontWeight: 'bold',
      }}
    >
      Under Construction
    </div>
  );
};

export default UnderConstruction;
