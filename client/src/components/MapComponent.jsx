import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ center, markers }) => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAHeGDxTMfmn_S2-PZ2Fl00dgX4CkU6jGY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
