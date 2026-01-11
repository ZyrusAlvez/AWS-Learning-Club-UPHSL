"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { findMemberId } from '@/services/member'
import { toast } from 'sonner'

export default function FindMembershipIdPage() {
  const [schoolEmail, setSchoolEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [memberData, setMemberData] = useState<any>(null)

  const handleFind = async () => {
    if (!schoolEmail.trim()) {
      toast.error('Please enter your school email')
      return
    }

    setLoading(true)
    setMemberData(null)

    try {
      const data = await findMemberId(schoolEmail)
      if (data) {
        setMemberData(data)
        toast.success('Membership found!')
      } else {
        toast.error('No membership found with this email')
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to find membership')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          <span className='text-[#ffa23f] font-extrabold'>Find</span> Your Membership ID
        </h1>
        <p className="text-white/80 text-sm md:text-base">
          Enter your school email to retrieve your membership ID
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <input
            type="email"
            value={schoolEmail}
            onChange={(e) => setSchoolEmail(e.target.value)}
            placeholder="Enter your school email"
            className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]"
          />
          <button
            onClick={handleFind}
            disabled={loading}
            className="px-8 py-3 bg-[#ffa23f] hover:bg-[#ff8c1f] text-white font-bold rounded-md transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Find'}
          </button>
        </div>

        {memberData && (
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md">
            <p className="text-white text-lg"><span className="font-semibold">Membership ID:</span> {memberData.memberid}</p>
          </div>
        )}

        <p className="text-white/70 text-sm">
          <Link href="/verify" className="text-[#ffa23f] hover:underline">
            Back to Verify
          </Link>
        </p>
      </div>
    </div>
  )
}
