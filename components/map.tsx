"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { TravelData } from "@/api/travel";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// 使用动态导入避免类型问题
declare const L: any;

export default function Map(props: {
  travelData: TravelData[];
}) {
  const { travelData } = props;
  const { theme } = useTheme();
  const router = useRouter();
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // 初始化地图
  useEffect(() => {
    const initMap = async () => {
      const L = (await import("leaflet")).default;
      
      if (!mapRef.current) {
        mapRef.current = L.map("map").setView([22.27, 113.46], 5);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // 主题切换
  useEffect(() => {
    const updateTheme = async () => {
      const L = (await import("leaflet")).default;
      
      if (!mapRef.current) return;

      // 移除现有的瓦片图层
      mapRef.current.eachLayer((layer: any) => {
        if (layer instanceof L.TileLayer) {
          mapRef.current?.removeLayer(layer);
        }
      });

      // 根据主题添加新的瓦片图层
      let tileLayer;
      if (theme === "dark") {
        tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        });
      } else {
        tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        });
      }
      
      tileLayer.addTo(mapRef.current);
    };

    updateTheme();
  }, [theme]);

  // 添加标记点
  useEffect(() => {
    const updateMarkers = async () => {
      const L = (await import("leaflet")).default;
      
      if (!mapRef.current) return;

      // 清除现有标记
      markersRef.current.forEach(marker => {
        mapRef.current?.removeLayer(marker);
      });
      markersRef.current = [];

      // 添加新标记
      travelData.forEach((item) => {
        const customIcon = L.divIcon({
          html: `
            <div style="
              width: 50px; 
              height: 50px; 
              border-radius: 50%; 
              background-image: url(${item.imageStatic.src}); 
              background-size: cover; 
              background-position: center;
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            "></div>
          `,
          className: "custom-marker",
          iconSize: [50, 50],
          iconAnchor: [25, 25],
        });

        const marker = L.marker([item.lngLat[1], item.lngLat[0]], { icon: customIcon });
        
        marker.on('click', () => {
          router.push(`/blog/detail/${item.postUrl}`);
        });

        marker.addTo(mapRef.current);
        markersRef.current.push(marker);
      });
    };

    updateMarkers();
  }, [travelData, router]);

  return <div id="map" className="w-full min-h-screen"></div>;
}
