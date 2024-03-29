import React, { useState, useEffect } from 'react';

function GPSComponent() {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const fetchCoordinates = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
      }
    };

    fetchCoordinates()

    return () => {

    },
  }, []);

  return (
    <div>
      <h2>GPS Component</h2>
      <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p>
    </div>
  )