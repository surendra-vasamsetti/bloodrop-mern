import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const DirectionsComponent = ({ center, destination }) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (center && destination) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: center,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [center, destination]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAHeGDxTMfmn_S2-PZ2Fl00dgX4CkU6jGY">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
        <Marker position={destination} />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default DirectionsComponent;
