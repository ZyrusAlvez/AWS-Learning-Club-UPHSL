"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { validateMembershipId } from '@/services/member'
import { toast } from 'sonner'
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaGraduationCap, FaCertificate, FaTools, FaChalkboardTeacher, FaTrophy, FaUsers, FaFacebook } from 'react-icons/fa'

const VerifyPage = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const eventTypeConfig: any = {
    workshop: { color: 'border-purple-500 bg-purple-500/20', icon: FaTools, label: 'Workshop' },
    seminar: { color: 'border-blue-500 bg-blue-500/20', icon: FaChalkboardTeacher, label: 'Seminar' },
    competition: { color: 'border-yellow-500 bg-yellow-500/20', icon: FaTrophy, label: 'Competition' },
    community: { color: 'border-green-500 bg-green-500/20', icon: FaUsers, label: 'Community' }
  }

  const handleVerify = async () => {
    if (!input.trim()) {
      toast.error('Please enter a membership ID')
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const data = await validateMembershipId(input)
      setResult(data)
      toast.success('Membership verified!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to verify membership')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full text-center space-y-6">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          <span className='text-[#ffa23f] font-extrabold'>Verify</span> Certificate or Membership
        </h1>
        <p className="text-white/80 text-sm md:text-base">
          Enter your certificate ID or membership ID
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter certificate ID or membership ID"
            className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]"
          />
          <button
            onClick={handleVerify}
            disabled={loading}
            className="px-8 py-3 bg-[#ffa23f] hover:bg-[#ff8c1f] text-white font-bold rounded-md transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
        
        <p className="text-white/70 text-sm">
          Don't know your membership ID?{' '}
          <Link href="/find-membership-id" className="text-[#ffa23f] hover:underline">
            Click here
          </Link>
        </p>

        {result && (
          <div className="mt-12 space-y-8">
            {/* Profile Section */}
            <div className="border-2 border-[#ffa23f] bg-[#ffa23f]/20 rounded-xl p-8 backdrop-blur-sm text-left">
              <div className="space-y-3">
                <div>
                  <p className="text-white text-sm uppercase mb-1">Name</p>
                  <p className="text-white text-2xl font-bold">{result.member.firstname} {result.member.middlename} {result.member.lastname}</p>
                </div>
                <div>
                  <p className="text-white text-sm uppercase mb-1">Program</p>
                  <p className="text-[#ffa23f] text-lg font-semibold">{result.member.program}</p>
                </div>
                {result.member.position && result.member.position.toLowerCase() !== 'member' && (
                  <div>
                    <p className="text-white text-sm uppercase mb-1">Position</p>
                    <p className="text-white text-lg font-semibold">{result.member.position}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Events Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Events Attended</h2>
              {result.events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {result.events.map((event: any, index: number) => {
                    const eventType = event.type?.toLowerCase() || 'workshop';
                    const config = eventTypeConfig[eventType] || eventTypeConfig.workshop;
                    const TypeIcon = config.icon;
                    const hasCertificate = event.certificate && event.certificate !== 'No certificate issued';
                    
                    return (
                      <div key={index} className={`border-2 ${config.color} rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                        <div className="flex items-center gap-2 mb-3">
                          <TypeIcon className="text-[#ffa23f]" />
                          <span className="text-xs font-semibold text-white uppercase">{config.label}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.name || event.title || event.eventname}</h3>
                        {event.description && <p className="text-white text-sm mb-4">{event.description}</p>}
                        <div className="space-y-2 text-sm text-white">
                          {event.date && (
                            <div className="flex items-center gap-2">
                              <FaCalendarAlt className="text-[#ffa23f]" />
                              <span>{event.date}</span>
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-[#ffa23f]" />
                              <span>{event.location}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 mt-3">
                            <FaCertificate className={hasCertificate ? "text-green-400" : "text-white"} />
                            <span className={hasCertificate ? "text-green-400 font-semibold" : "text-white"}>
                              {hasCertificate ? event.certificate : 'No certificate issued'}
                            </span>
                          </div>
                          {event.link && (
                            <div className="mt-3 pt-3 border-t border-white/20">
                              <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ffa23f] hover:underline">
                                <FaFacebook />
                                <span className="text-sm">See more details</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="border-2 border-gray-500 bg-gray-500/20 rounded-xl p-8 backdrop-blur-sm text-center">
                  <p className="text-white">No events attended yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VerifyPage

