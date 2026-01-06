"use client"

import { useState, useEffect } from "react"
import Title from "@/component/Event/Title"
import ImageFrame from "./Event/ImageFrame"
import Pagination from "@/component/UI/Pagination"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import { events } from "@/data/event"

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(events.length)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const infiniteEvents = [...events, ...events, ...events]

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(events.length)
      }, 500)
    } else if (currentIndex === infiniteEvents.length - events.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(events.length)
      }, 500)
    }
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  const actualIndex = currentIndex % events.length

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="relative overflow-hidden max-w-7xl mx-auto mt-8">
        <div 
          className="flex"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
          }}
        >
          {infiniteEvents.map((event, index) => (
            <div key={index} className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
              <div 
                className="space-y-2 order-2 lg:order-1"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {event.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  {event.date}
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
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
        <Pagination count={events.length} currentPage={actualIndex} onPageChange={(i) => setCurrentIndex(i + events.length)} />
        <ArrowRight onClick={handleNext} />
      </div>
    </div>
  )
}

export default Event