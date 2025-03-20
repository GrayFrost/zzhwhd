"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { TravelData } from "@/api/travel";

export default function Map(props: {
  darkStyle: string;
  lightStyle: string;
  travelData: TravelData[];
}) {
  const { darkStyle, lightStyle, travelData } = props;
  const [map, setMap] = useState<maplibregl.Map | undefined>();
  const { theme } = useTheme();
  const router = useRouter();

  // from https://cloud.maptiler.com/maps/

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map", // container id
      // style: '',// style URL
      center: [113.46, 22.27], // starting position [lng, lat]
      zoom: 5, // starting zoom
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

    travelData.forEach((item) => {
      const el = document.createElement("div");
      el.className = `w-[50px] h-[50px] rounded-full bg-cover`;
      el.style.backgroundImage = `url(${item.imageStatic.src})`;
      // el.style.width = `50px`;
      // el.style.height = `50px`;

      // const marker = new maplibregl.Marker({ color: "#FFFFFF" });
      const marker = new maplibregl.Marker({ element: el });
      marker.setLngLat(item.lngLat).addTo(map);
      // marker.getElement().addEventListener("click", () => {
      //   router.push(`/blog/detail/${item.postUrl}`);
      // });
      el.addEventListener("click", () => {
        router.push(`/blog/detail/${item.postUrl}`);
      });
    });
  }, [map, router, travelData]);

  return <div id="map" className="w-full min-h-screen"></div>;
}
