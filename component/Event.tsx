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
  const currentEvent = events[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mt-8">
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {currentEvent.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-medium">
              {currentEvent.date}
            </p>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed whitespace-pre-line">
              {currentEvent.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <ArrowLeft onClick={handlePrev} />
            <Pagination count={events.length} currentPage={currentIndex} onPageChange={setCurrentIndex} />
            <ArrowRight onClick={handleNext} />
          </div>
        </div>
        <ImageFrame image_path={currentEvent.pictures}/>
      </div>
    </div>
  )
}

export default Event