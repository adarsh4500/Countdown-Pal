"use client";
import React, { useEffect, useState } from "react";

const Timer = ({ eventDate }) => {
  const eDate = new Date(eventDate);
  const timeLeftFrom = () => {
    const difference = +eDate - +new Date();
    let timeleft = {};

    if (difference > 0) {
      timeleft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeleft;
  };

  const [timeLeft, setTimeLeft] = useState(timeLeftFrom);
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(timeLeftFrom()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-8xl my-4">
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
        {timeLeft.seconds}{" "}
      </h1>
    </>
  );
};

export default Timer;
