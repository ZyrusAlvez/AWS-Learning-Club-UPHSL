"use client"

import { useState } from "react"
import Title from "@/component/Event/Title"
import ImageFrame from "./Event/ImageFrame"
import Pagination from "@/component/UI/Pagination"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import { events } from "@/data/event"

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext()
    if (touchStart - touchEnd < -50) handlePrev()
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="relative overflow-hidden max-w-7xl mx-auto mt-8">
        <div 
          className="flex transition-transform duration-500 ease-out"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div key={index} className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {event.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  {event.date}
                </p>
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed whitespace-pre-line">
                  {event.subtitle}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <ImageFrame image_path={event.pictures}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8 max-w-7xl mx-auto">
        <ArrowLeft onClick={handlePrev} />
        <Pagination count={events.length} currentPage={currentIndex} onPageChange={setCurrentIndex} />
        <ArrowRight onClick={handleNext} />
      </div>
    </div>
  )
}

export default Event