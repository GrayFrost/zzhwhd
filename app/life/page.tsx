"use client";

// import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// import { useEffect } from "react";

export default function Page() {
  // useEffect(() => {
  //   const map = new maplibregl.Map({
  //     container: "map", // container id
  //     style: "https://demotiles.maplibre.org/style.json", // style URL
  //     center: [115, 39], // starting position [lng, lat]
  //     zoom: 3, // starting zoom
  //   });
  // }, []);

  return <div id="map" className="w-full min-h-screen"></div>;
}
