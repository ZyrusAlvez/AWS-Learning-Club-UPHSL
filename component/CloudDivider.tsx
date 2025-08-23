import React from 'react'
import Image from "next/image";
const CloudDivider = () => {
    const cloudImages = [
        "./clouds/1.svg" ,
        "./clouds/2.svg" ,
        "./clouds/3.svg" ,
        "./clouds/4.svg" ,
        "./clouds/5.svg" ,
        "./clouds/6.svg" ,
        "./clouds/7.svg" ,
        "./clouds/8.svg" ,
        "./clouds/9.svg" ,
        "./clouds/10.svg" ,
        "./clouds/11.svg" ,
        "./clouds/12.svg" ,
    ]
  return (
    <div className="relative h-64 overflow-hidden">
    {cloudImages.map((img, i) => {
        const duration = 10 + Math.random() * 10;
        return  <Image
        src={img}
        key={i}
        height={200}
        width={200}
        alt={`cloud${i}`}
        className="absolute cloud"
        style={{
            top: `${i * 20}px`, // stagger vertically
            animationDelay: `${-i * 3.25}s`, // stagger timing
            animationDuration: `${duration}s`
        }}
        />
    })
}
    </div>

  )
}

export default CloudDivider