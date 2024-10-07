import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // Create a reference for the map container
  const mapRef = useRef(null);

  useEffect(() => {
    // Ensure the map is only initialized once
    if (mapRef.current === null) {
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }

    // Cleanup function to ensure map is destroyed if the component is unmounted
    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="overflow:hidden"
      id="map"
      style={{ height: "350px", width: "100%" }}
    ></div>
  );
};

export default Map;
