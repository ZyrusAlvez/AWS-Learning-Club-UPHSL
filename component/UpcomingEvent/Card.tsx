import React from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTools, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa'

enum EventType {
  WORKSHOP = 'workshop',
  SEMINAR = 'seminar',
  COMPETITION = 'competition'
}

type Props = {
  title: string,
  subtitle: string,
  date?: string,
  time?: string,
  location?: string,
  type?: EventType
}

const Card = ({title, subtitle, date="TBA", time="TBA", location="TBA", type=EventType.WORKSHOP}: Props) => {
  const typeConfig = {
    [EventType.WORKSHOP]: { color: 'border-purple-500 bg-purple-500/10', icon: FaTools, label: 'Workshop' },
    [EventType.SEMINAR]: { color: 'border-blue-500 bg-blue-500/10', icon: FaChalkboardTeacher, label: 'Seminar' },
    [EventType.COMPETITION]: { color: 'border-yellow-500 bg-yellow-500/10', icon: FaTrophy, label: 'Competition' }
  }

  const TypeIcon = typeConfig[type].icon

  return (
    <div className={`border-2 ${typeConfig[type].color} rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl will-change-transform`}>
      <div className="flex items-center gap-2 mb-3">
        <TypeIcon className="text-[#ffa23f]" />
        <span className="text-xs font-semibold text-gray-400 uppercase">{typeConfig[type].label}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{subtitle}</p>
      <div className="space-y-2 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#ffa23f]" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-[#ffa23f]" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ffa23f]" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
export { EventType }