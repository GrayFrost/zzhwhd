"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { travelData } from "@/config/travel";
import { useRouter } from "next/navigation";
export default function Map(props: { darkStyle: string; lightStyle: string }) {
  const { darkStyle, lightStyle } = props;
  const [map, setMap] = useState<maplibregl.Map | undefined>();
  const { theme } = useTheme();
  const router = useRouter();
  const markersRef = useRef<maplibregl.Marker[]>([]);

  // from https://cloud.maptiler.com/maps/

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map", // container id
      // style: '',// style URL
      center: [115, 39], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    setMap(map);

    return () => {
      map?.remove();
      setMap(undefined);
    };
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

  useEffect(() => {
    if (!map) {
      return;
    }
    markersRef.current.forEach((marker) => marker.remove());

    travelData.forEach((item) => {
      const marker = new maplibregl.Marker({ color: "#FFFFFF" });

      marker.setLngLat(item.lngLat).addTo(map);
      marker.getElement().addEventListener("click", () => {
        router.push(`/blog/detail/${item.postUrl}`);
      });
    });
  }, [map, router]);

  return <div id="map" className="w-full min-h-screen"></div>;
}
