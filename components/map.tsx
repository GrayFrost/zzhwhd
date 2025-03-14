"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function Map(props: { darkStyle: string; lightStyle: string }) {
  const { darkStyle, lightStyle } = props;
  const [map, setMap] = useState<maplibregl.Map | undefined>();
  const { theme } = useTheme();

  // from https://cloud.maptiler.com/maps/

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map", // container id
      // style: '',// style URL
      center: [115, 39], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (theme === "dark") {
      map.setStyle(darkStyle);
    } else {
      map.setStyle(lightStyle);
    }
  }, [theme, map, darkStyle, lightStyle]);

  return <div id="map" className="w-full min-h-screen"></div>;
}
