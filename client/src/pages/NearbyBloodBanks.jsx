import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent";

const NearbyBloodBanks = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          fetch(
            `http://localhost:4000/bloodbanks/nearby?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&radius=10`
          )
            .then((response) => response.json())
            .then((data) => setBloodBanks(data));
        },
        (error) => console.log(error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <MapComponent
      center={{ lat: location.latitude, lng: location.longitude }}
      markers={bloodBanks.map((bank) => ({
        lat: bank.latitude,
        lng: bank.longitude,
      }))}
    />
  );
};

export default NearbyBloodBanks;
