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
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] overflow-hidden rounded-t-2xl">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`slide-${i}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
          i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
};

export default SlideShow;
