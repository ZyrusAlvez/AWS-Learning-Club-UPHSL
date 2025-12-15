'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const MembershipForm = () => {

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center gap-4">
      <Image src="/awslc banner.jpg" alt="AWS Learning Club - UPHSL Banner" width={672} height={150} className='rounded-lg'/>
      <div className="max-w-2xl mx-auto">

          <div className='rounded-t-md border-t-8 border-[#b21b6e] bg-[#b21b6e]'/>
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20">
            <div className="text-center">
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'><span className='text-[#ffa23f] font-extrabold'>AWS</span> Learning Club</h1>
              <h2 className='text-md md:text-lg font-bold mt-1'>University of Perpetual Help System Laguna - Biñan</h2>
              <div className='border-b border-white/20 mt-6'/>
              <div className="text-start mt-4">
                <h2 className='text-lg font-bold text-[#ffa23f]'>Official Membership Application</h2>
                <p className="text-white/80">I’m excited to invite you to officially join the Amazon Web Services (AWS) Learning Club — a space where we grow our cloud knowledge and collaborate with fellow learners and enthusiasts! </p>
                <p className="text-white/80 mt-4">To get started, please fill in the information below. Let’s build the future of cloud learning together. See you in the club! ☁️🚀</p>
                <p className="text-white mt-2 text-end">- Awie</p>
              </div>
            </div>
          </div>

          <div className='rounded-t-md border-[#b21b6e] bg-[#b21b6e] mt-12 font-bold text-white text-lg px-4 py-2'>
            Personal Information
          </div>
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20">
            
          </div>

          <div className='rounded-t-md border-[#b21b6e] bg-[#b21b6e] mt-12 font-bold text-white text-lg px-4 py-2'>
            Educational Background
          </div>
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20">
            
          </div>
        
          <div className="mt-6 text-center text-sm text-white/70">
            <p>Questions? Contact us at <a href="mailto:awslc.uphs;@gmail.com" className="text-[#ffa23f] hover:underline">awsclub@uphsl.edu</a></p>
          </div>
        </div>
      </div>
  )
}

export default MembershipForm