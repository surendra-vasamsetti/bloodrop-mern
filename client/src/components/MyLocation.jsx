import React, { useState, useEffect } from "react";

const MyLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <div>
      Your current location is: {location.latitude}, {location.longitude}
    </div>
  );
};

export default MyLocation;
//AIzaSyAHeGDxTMfmn_S2-PZ2Fl00dgX4CkU6jGY