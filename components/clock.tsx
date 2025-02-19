"use client";

import { useState, useEffect, useRef } from "react";
import "@/styles/clock.css";

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const deg = 6;

export default function Time() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const timerID = useRef<NodeJS.Timeout | null>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timerID.current = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      if (timerID.current) {
        clearInterval(timerID.current);
      }
    };
  }, []);

  function setClock() {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    if (hourRef.current) {
      hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    }
    if (minRef.current) {
      minRef.current.style.transform = `rotateZ(${mm}deg)`;
    }
    if (secRef.current) {
      secRef.current.style.transform = `rotateZ(${ss}deg)`;
    }
  }
  function updateTime() {
    const cd = new Date();
    const clockTime =
      zeroPadding(cd.getHours(), 2) +
      ":" +
      zeroPadding(cd.getMinutes(), 2) +
      ":" +
      zeroPadding(cd.getSeconds(), 2);
    const clockDate =
      zeroPadding(cd.getFullYear(), 4) +
      "-" +
      zeroPadding(cd.getMonth() + 1, 2) +
      "-" +
      zeroPadding(cd.getDate(), 2) +
      " " +
      week[cd.getDay()];

    setDate(clockDate);
    setTime(clockTime);
    setClock();
  }

  function zeroPadding(num: number, digit: number): string {
    let zero = "";
    for (let i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + num).slice(-digit);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[#4a5568]">{date}</div>
      <div className="text-[#4a5568]">{time}</div>
      <div className="flex items-center justify-center clock">
        <div className="hour" ref={hourRef}></div>
        <div className="min" ref={minRef}></div>
        <div className="sec" ref={secRef}></div>
      </div>
    </div>
  );
}
