// CloudDivider.jsx
"use client";
import React, {useState} from "react";
import Image from "next/image";
import cloud1 from "@/public/clouds/1.svg";
import cloud3 from "@/public/clouds/3.svg";
import cloud9 from "@/public/clouds/9.svg";
import awkward from "@/public/emotes/awkward.webp";
import curious from "@/public/emotes/curious.webp";
import hello from "@/public/emotes/hello.webp";
import thumbsUp from "@/public/emotes/thumbs-up.webp";
const CloudDivider = () => {
  const emojiSize = 100;
  const [cloudOne, setCloudOne] = useState(false);
  const [cloudTwo, setCloudTwo] = useState(false);
  const [cloudThree, setCloudThree] = useState(false);
  return (
    <div className="relative h-64 overflow-hidden w-full">
      {/* Track wrapper */}
      <div className="absolute flex w-[250%] h-full animate-marquee">
        {/* First set of clouds */}
        <div className="flex w-[42%] relative">
          {/* First Cloud */}
          <div className={`absolute transition-transform ease-in-out ${cloudOne ? "scale-110": "scale-100"} w-[30%] relative`}  >
            <div className={`absolute top-[30%] left-[50%] z-0`}>
              <Image
                src={awkward}
                alt="awkward"
                width={emojiSize}
                height={emojiSize}
                className={`transition-transform duration-500 ease-in-out ${
                  cloudOne ? "-translate-y-14 translate-x-20 scale-110" : "translate-y-0 translate-x-0 scale-100"
                }`}
              />
            </div>
            <Image src={cloud9} alt="cloud9" className="z-10 relative" onMouseEnter={() => setCloudOne(true)} onMouseLeave={() => setCloudOne(false)}/>
          </div>
          {/* Second Cloud */}
          <div className={`absolute transition-transform ease-in-out ${cloudTwo ? "scale-110": "scale-100"} w-[30%] left-[40%] top-[30%]`}  >
            <div className={`absolute top-[22%] left-[23%] z-0`}>
                <Image
                  src={hello}
                  alt="hello"
                  width={emojiSize}
                  height={emojiSize}
                  className={`transition-transform duration-500 ease-in-out ${
                    cloudTwo ? "-translate-y-14 -translate-x-14 scale-110" : "translate-y-0 translate-x-0 scale-100"
                  }`}
                />
            </div>
            <Image
              src={cloud1}
              alt="cloud1"
              className="relative z-10"
              onMouseEnter={() => setCloudTwo(true)} 
              onMouseLeave={() => setCloudTwo(false)}
            />
          </div>
          {/* Third Cloud */}
          <div className={`absolute transition-transform ease-in-out ${cloudThree ? "scale-110": "scale-100"} w-[30%] left-[70%]`} >
            <div className={`absolute top-[24%] left-[50%] z-0`}>
              <Image
                src={thumbsUp}
                alt="thumbsUp"
                width={emojiSize}
                height={emojiSize}
                className={`transition-transform duration-500 ease-in-out ${
                  cloudThree ? "-translate-y-12 -translate-x-33 scale-110" : "translate-y-0 scale-100"
                }`}
              />
            </div>
            <Image
              src={cloud3}
              alt="cloud3"
              className="relative z-10"
              onMouseEnter={() => setCloudThree(true)} 
              onMouseLeave={() => setCloudThree(false)}
            />
          </div>
        </div>
        <div className="w-[16%]"></div>
        {/* Duplicate set of clouds */}
        <div className="flex w-[42%] relative">
         {/* First Cloud */}
          <div className={`absolute transition-transform ease-in-out ${cloudOne ? "scale-110": "scale-100"} w-[30%] relative`} >
            <div className={`absolute top-[30%] left-[50%] z-0 `}>
              <Image
                src={awkward}
                alt="awkward"
                width={emojiSize}
                height={emojiSize}
                className={`transition-transform duration-500 ease-in-out ${
                  cloudOne ? "-translate-y-14 translate-x-20 scale-110" : "translate-y-0 translate-x-0 scale-100"
                }`}
              />
            </div>
            <Image src={cloud9} alt="cloud9" className="z-10 relative" onMouseEnter={() => setCloudOne(true)} onMouseLeave={() => setCloudOne(false)}/>
          </div>
          {/* Second Cloud */}
          <div className={`absolute transition-transform ease-in-out ${cloudTwo ? "scale-110": "scale-100"} w-[30%] left-[40%] top-[30%]`} >
            <div className={`absolute top-[22%] left-[23%] z-0`}>
                <Image
                  src={hello}
                  alt="hello"
                  width={emojiSize}
                  height={emojiSize}
                  className={`transition-transform duration-500 ease-in-out ${
                    cloudTwo ? "-translate-y-14 -translate-x-14 scale-110" : "translate-y-0 translate-x-0 scale-100"
                  }`}
                />
            </div>
            <Image
              src={cloud1}
              alt="cloud1"
              className="relative z-10" 
              onMouseEnter={() => setCloudTwo(true)} 
              onMouseLeave={() => setCloudTwo(false)} 
            />
          </div>
          <div className={`absolute transition-transform ease-in-out ${cloudThree ? "scale-110": "scale-100"} w-[30%] left-[70%]`} >
            <div className={`absolute top-[24%] left-[50%] z-0`}>
              <Image
                src={thumbsUp}
                alt="thumbsUp"
                width={emojiSize}
                height={emojiSize}
                className={`transition-transform duration-500 ease-in-out ${
                  cloudThree ? "-translate-y-12 -translate-x-33 scale-110" : "translate-y-0 scale-100"
                }`}
              />
            </div>
            <Image
              src={cloud3}
              alt="cloud3"
              className="relative z-10"
              onMouseEnter={() => setCloudThree(true)} 
              onMouseLeave={() => setCloudThree(false)}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CloudDivider;
