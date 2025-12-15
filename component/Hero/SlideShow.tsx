"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import firstPic from "@/public/carousel/1.webp";
import secondPic from "@/public/carousel/2.webp";
import thirdPic from "@/public/carousel/3.webp";
import fourthPic from "@/public/carousel/4.webp";
const SlideShow = () => {
  const images = [
    firstPic,
    secondPic,
    thirdPic,
    fourthPic
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
    <div className="relative w-[80%] h-[55%] overflow-hidden rounded-2xl">
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
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
