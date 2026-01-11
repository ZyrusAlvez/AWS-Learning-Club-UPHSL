"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const VerifyPage = () => {
  const [input, setInput] = useState('')

  const handleVerify = () => {
    // Backend integration will be added later
    console.log('Verifying:', input)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          <span className='text-[#ffa23f] font-extrabold'>Verify</span> Certificate or Membership
        </h1>
        <p className="text-white/80 text-sm md:text-base">
          Enter your certificate reference number or membership ID
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter reference number or membership ID"
            className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]"
          />
          <button
            onClick={handleVerify}
            className="px-8 py-3 bg-[#ffa23f] hover:bg-[#ff8c1f] text-white font-bold rounded-md transition-colors"
          >
            Verify
          </button>
        </div>
        
        <p className="text-white/70 text-sm">
          Don't know your membership ID?{' '}
          <Link href="/find-membership-id" className="text-[#ffa23f] hover:underline">
            Click here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default VerifyPage
