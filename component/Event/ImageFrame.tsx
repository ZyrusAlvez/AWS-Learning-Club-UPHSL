"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ImageFrame = ({image_path}: {image_path: string}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <>
      <div>
        <Image src={`${image_path}/1.webp`} alt="Event Image of AWS Learning Club - UPHSL" height={800} width={1200} className="w-full h-auto cursor-pointer" onClick={() => setSelectedImage(`${image_path}/1.webp`)}/>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <Image src={`${image_path}/2.webp`} alt="Event Image of AWS Learning Club - UPHSL" height={600} width={800} className="w-full h-auto cursor-pointer" onClick={() => setSelectedImage(`${image_path}/2.webp`)}/>
          <Image src={`${image_path}/3.webp`} alt="Event Image of AWS Learning Club - UPHSL" height={600} width={800} className="w-full h-auto cursor-pointer" onClick={() => setSelectedImage(`${image_path}/3.webp`)}/>
          <Image src={`${image_path}/4.webp`} alt="Event Image of AWS Learning Club - UPHSL" height={600} width={800} className="w-full h-auto cursor-pointer" onClick={() => setSelectedImage(`${image_path}/4.webp`)}/>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-30 z-50 flex items-center justify-center p-4 overflow-hidden" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 drop-shadow-lg" onClick={() => setSelectedImage(null)}>&times;</button>
          <Image src={selectedImage} alt="Event Image of AWS Learning Club - UPHSL" width={1920} height={1080} className="max-w-full max-h-full object-contain"/>
        </div>
      )}
    </>
  )
}

export default ImageFrame