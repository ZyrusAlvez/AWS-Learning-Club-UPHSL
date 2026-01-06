"use client";

import React, { useState, useEffect, useCallback } from "react";
import Card from "./Team/Card"
import Pagination from "./UI/Pagination";
import Arrow_Left from "./UI/ArrowLeft";
import Arrow_Right from "./UI/ArrowRight";
import Title from "@/component/Team/Title"

interface TeamMember {
  img: string;
  name: string;
  title: string;
  subtitle: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      img: "/team/Zyrus Alvez - President.webp",
      name: "Zyrus Alvez",
      title: "President",
      subtitle: "Leads the organization and sets overall direction.",
    },
    {
      img: "/team/Renzo Ramos - Vice President.webp",
      name: "Renzo Ramos",
      title: "Vice President",
      subtitle: "Supports the president and oversees operations.",
    },
    {
      img: "/team/Allan John Funelas - Executive Secretary.webp",
      name: "Allan John Funelas",
      title: "Executive Secretary",
      subtitle: "Manages records, documentation, and official communications.",
    },
    {
      img: "/team/Wilmar Lipata - Associate Secretary.webp",
      name: "Wilmar Lipata",
      title: "Associate Secretary",
      subtitle: "Assists in administrative tasks and coordination.",
    },
    {
      img: "/team/Josh Leonard Mendoza - Head of Communications.webp",
      name: "Josh Leonard Mendoza",
      title: "Head of Communications",
      subtitle: "Oversees internal and external communications.",
    },
    {
      img: "/team/Sherwin Limosnero - P.R.O. External.webp",
      name: "Sherwin Limosnero",
      title: "P.R.O. External",
      subtitle: "Handles public relations and external partnerships.",
    },
    {
      img: "/team/France Raphael Rivera - Marketing Director.webp",
      name: "France Raphael Rivera",
      title: "Marketing Director",
      subtitle: "Plans and executes marketing strategies.",
    },
    {
      img: "/team/Richard Torculas - Social Media Marketing Manager.webp",
      name: "Richard Torculas",
      title: "Social Media Marketing Manager",
      subtitle: "Manages social media platforms and campaigns.",
    },
    {
      img: "/team/Trisha Biglete - Content Manager.webp",
      name: "Trisha Biglete",
      title: "Content Manager",
      subtitle: "Creates and manages written and digital content.",
    },
    {
      img: "/team/Jullie Temporosa - Head of Creatives.webp",
      name: "Jullie Temporosa",
      title: "Head of Creatives",
      subtitle: "Leads creative direction and visual identity.",
    },
    {
      img: "/team/Alyssa Marie Valera - Graphic Designer.webp",
      name: "Alyssa Marie Valera",
      title: "Graphic Designer",
      subtitle: "Designs visual assets and branding materials.",
    },
    {
      img: "/team/Andrew Velandrez - Graphic Designer.webp",
      name: "Andrew Velandrez",
      title: "Graphic Designer",
      subtitle: "Creates graphics for digital and print media.",
    },
    {
      img: "/team/Allianna Faith Palmiery - Graphic Artist.webp",
      name: "Allianna Faith Palmiery",
      title: "Graphic Artist",
      subtitle: "Produces illustrations and creative visuals.",
    },
    {
      img: "/team/Rain Jade De Castro - Support Staff.webp",
      name: "Rain Jade De Castro",
      title: "Support Staff",
      subtitle: "Provides operational and logistical support.",
    },
    {
      img: "/team/Carl Angelo Hernandez - Logistic Coordinator.webp",
      name: "Carl Angelo Hernandez",
      title: "Logistic Coordinator",
      subtitle: "Manages logistics, resources, and event needs.",
    },
    {
      img: "/team/Ram Andrei Manalo - Multimedia Specialist.webp",
      name: "Ram Andrei Manalo",
      title: "Multimedia Specialist", 
      subtitle: "Creates video, audio, and multimedia content.",
    },
  ];


  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Function to update cards to show based on window width
  const updateCardsToShow = useCallback(() => {
    if (window.innerWidth >= 1536) {
      // 2xl
      setCardsToShow(5);
    } else if (window.innerWidth >= 1280) {
      // xl
      setCardsToShow(4);
    } else if (window.innerWidth >= 1024) {
      // lg
      setCardsToShow(3);
    } else if (window.innerWidth >= 640) {
      // sm
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  }, []);

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  // to reset the interval of autoSlide


  // to imitate a infinite loop of array
  const extendedMembers = [
    ...teamMembers.slice(-cardsToShow),
    ...teamMembers,
    ...teamMembers.slice(0, cardsToShow),
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (startIndex >= teamMembers.length) {
      setStartIndex(0);
    } else if (startIndex < 0) {
      setStartIndex(teamMembers.length - 1);
    }
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setStartIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setStartIndex((prev) => prev - 1);
  };

  // Modified to handle pagination clicks
  const handlePaginationClick = (newIndex: number) => {
    setIsTransitioning(true);
    setStartIndex(newIndex);
  };

  useEffect(() => {
    if (!isTransitioning) {
      if (startIndex >= teamMembers.length) {
        setStartIndex(0);
      } else if (startIndex < 0) {
        setStartIndex(teamMembers.length - 1);
      }
    }
  }, [startIndex, isTransitioning, teamMembers.length]);

  const getTranslateX = () => {
    const baseTranslate = (startIndex + cardsToShow) * (100 / cardsToShow);
    return baseTranslate;
  };
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 py-6">
      <Title />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${getTranslateX()}%)`,
              transition: isTransitioning
                ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedMembers.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2 sm:px-4 lg:px-6 flex items-start justify-center
                  ${
                    cardsToShow === 1
                      ? "w-full"
                      : cardsToShow === 2
                      ? "w-1/2"
                      : cardsToShow === 3
                      ? "w-1/3"
                      : cardsToShow === 4
                      ? "w-1/4"
                      : "w-1/5"
                  }`}
              >
                <Card
                  img={member.img}
                  name={member.name}
                  title={member.title}
                  subtitle={member.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 sm:px-8">
        <Pagination
          count={teamMembers.length}
          currentPage={
            startIndex >= teamMembers.length
              ? 0
              : startIndex < 0
              ? teamMembers.length - 1
              : startIndex
          }
          onPageChange={handlePaginationClick}
        />
        <div className="flex gap-4">
          <Arrow_Left onClick={prevSlide}/>
          <Arrow_Right onClick={nextSlide}/>
        </div>
      </div>
    </div>
  )
}

export default Team;