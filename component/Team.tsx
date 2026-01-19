"use client";

import React, { useState, useEffect, useCallback } from "react";
import Card from "./Team/Card"
import Pagination from "@/component/UI/Pagination";
import ArrowLeft from "@/component/UI/ArrowLeft";
import ArrowRight from "@/component/UI/ArrowRight";
import Title from "@/component/Team/Title"
import { teamMembers } from "@/data/team";

const Team: React.FC = () => {

  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Function to update cards to show based on window width
  const updateCardsToShow = useCallback(() => {
      if (window.innerWidth >= 1280) {
      // xl
      setCardsToShow(5);
    } else if (window.innerWidth >= 1024) {
      // lg
      setCardsToShow(4);
    } else if (window.innerWidth >= 640) {
      // sm
      setCardsToShow(3);
    } else {
      setCardsToShow(2);
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
    <div id="team" className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 py-4 scroll-mt-[70px]">
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
                  facebook={member.facebook}
                  linkedin={member.linkedin}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row justify-center sm:justify-between items-center gap-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <Pagination
          team={true}
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
        <div className="flex gap-4 lg:gap-6">
          <ArrowLeft onClick={prevSlide}/>
          <ArrowRight onClick={nextSlide}/>
        </div>
      </div>
    </div>
  )
}

export default Team;