import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = "your_mapbox_access_token_here";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-74.5, 40],
              },
              properties: {
                title: "Map Center",
                description: "This is the center of the map",
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#ff0000",
          "circle-radius": 10,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });
    });
  }, []);

  return <div id="map" className="map" />;
};

export default Map;
