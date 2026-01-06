"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ImageFrame = ({image_path}: {image_path: string}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <div className="w-full">
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
          <Image 
            src={`${image_path}/1.webp`} 
            alt="Event Image of AWS Learning Club - UPHSL" 
            fill 
            className="object-cover cursor-pointer" 
            onClick={() => setSelectedImage(`${image_path}/1.webp`)}
            priority
          />
        </div>
        <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-1 sm:mt-2">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
            <Image 
              src={`${image_path}/2.webp`} 
              alt="Event Image of AWS Learning Club - UPHSL" 
              fill 
              className="object-cover cursor-pointer" 
              onClick={() => setSelectedImage(`${image_path}/2.webp`)}
            />
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
            <Image 
              src={`${image_path}/3.webp`} 
              alt="Event Image of AWS Learning Club - UPHSL" 
              fill 
              className="object-cover cursor-pointer" 
              onClick={() => setSelectedImage(`${image_path}/3.webp`)}
            />
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
            <Image 
              src={`${image_path}/4.webp`} 
              alt="Event Image of AWS Learning Club - UPHSL" 
              fill 
              className="object-cover cursor-pointer" 
              onClick={() => setSelectedImage(`${image_path}/4.webp`)}
            />
          </div>
        </div>
      </div>

      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 backdrop-blur-md z-[9999] flex items-center justify-center p-4" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-[10000] drop-shadow-lg" 
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <Image 
            src={selectedImage} 
            alt="Event Image of AWS Learning Club - UPHSL" 
            width={1920} 
            height={1080} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}

export default ImageFrame