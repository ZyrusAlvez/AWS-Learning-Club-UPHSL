"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slideshow = () => {
  const images = [
    "/carousel/1.jpg",
    "/carousel/2.jpg",
    "/carousel/3.png",
    "/carousel/4.png",
  ];

  const [current, setCurrent] = useState(0);
  
  // Auto change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[500px] h-[300px] overflow-hidden rounded-2xl">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
