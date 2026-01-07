"use client"

import { useState, useEffect } from "react"
import Title from "@/component/Event/Title"
import ImageFrame from "./Event/ImageFrame"
import Pagination from "@/component/UI/Pagination"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import { FaCalendarAlt, FaMapMarkerAlt, FaTools, FaChalkboardTeacher, FaTrophy, FaUsers } from 'react-icons/fa'
import { events } from "@/data/event"
import { EventType } from "@/component/UpcomingEvent/Card"

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(events.length)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const infiniteEvents = [...events, ...events, ...events]

  const typeConfig = {
    [EventType.WORKSHOP]: { color: 'bg-purple-500/20 text-purple-300 border-purple-500', icon: FaTools, label: 'Workshop' },
    [EventType.SEMINAR]: { color: 'bg-blue-500/20 text-blue-300 border-blue-500', icon: FaChalkboardTeacher, label: 'Seminar' },
    [EventType.COMPETITION]: { color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500', icon: FaTrophy, label: 'Competition' },
    [EventType.COMMUNITY]: { color: 'bg-green-500/20 text-green-300 border-green-500', icon: FaUsers, label: 'Community' }
  }

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
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="md:flex items-center gap-4 max-w-7xl mx-auto mt-8">
        <div className="hidden md:block">
          <ArrowLeft onClick={handlePrev} />
        </div>
        <div className="relative overflow-hidden flex-1">
          <div 
            className="flex"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
            }}
          >
            {infiniteEvents.map((event, index) => {
              const TypeIcon = typeConfig[event.type].icon
              return (
              <div key={index} className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
                <div 
                  className="space-y-3 order-2 lg:order-1"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${typeConfig[event.type].color} text-xs font-semibold`}>
                    <TypeIcon className="text-[#ffa23f]" />
                    <span>{typeConfig[event.type].label}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {event.title}
                  </h2>
                  <div className="flex flex-col gap-1 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#ffa23f]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#ffa23f]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                    {event.subtitle}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <ImageFrame image_path={event.pictures}/>
                </div>
              </div>
            )})}
          </div>
        </div>
        <div className="hidden md:block">
          <ArrowRight onClick={handleNext} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-2 md:mt-6 max-w-7xl mx-auto">
        <div className="block md:hidden">
          <ArrowLeft onClick={handlePrev} />
        </div>
        <Pagination count={events.length} currentPage={actualIndex} onPageChange={(i) => setCurrentIndex(i + events.length)} />
        <div className="block md:hidden">
          <ArrowRight onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default Event