'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    contactNumber: '',
    facebookLink: '',
    personalEmail: '',
    schoolEmail: '',
    program: '',
    yearSection: '',
    interest: ''
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const requiredFields = ['firstName', 'lastName', 'age', 'contactNumber', 'facebookLink', 'personalEmail', 'schoolEmail', 'program', 'yearSection']
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim())
    
    if (emptyFields.length > 0) {
      alert('Please fill in all required fields.')
      return
    }
    
    
    console.log('Form submitted:', formData)
    alert('Application submitted successfully!')
  }

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center gap-4">
      <Image src="/awslc banner.jpg" alt="AWS Learning Club - UPHSL Banner" width={672} height={150} className='rounded-lg'/>
      <div className="max-w-2xl mx-auto">

          <div className='rounded-t-md border-t-8 border-[#ffa23f] bg-[#ffa23f]'/>
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

          <div className='rounded-t-md border-[#ffa23f] bg-[#ffa23f] mt-8 font-bold text-white/80 text-lg px-4 py-2'>
            Personal Information
          </div>
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Middle Name</label>
                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Leave blank if none" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Age *</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Contact Number *</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Facebook Link *</label>
                <input type="url" name="facebookLink" value={formData.facebookLink} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Personal Email *</label>
                <input type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
            </div>
          </div>

          <div className='rounded-t-md border-[#ffa23f] bg-[#ffa23f] mt-8 font-bold text-white/80 text-lg px-4 py-2'>
            Educational Background
          </div>
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">School Email *</label>
                <input type="email" name="schoolEmail" value={formData.schoolEmail} onChange={handleChange} required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Program *</label>
                <input type="text" name="program" value={formData.program} onChange={handleChange} placeholder="ex. BSCS - DS / BSIT - GD" required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Year and Section for A.Y. '25-'26 *</label>
                <input type="text" name="yearSection" value={formData.yearSection} onChange={handleChange} placeholder="ex. J3A" required className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Interest</label>
                <textarea name="interest" value={formData.interest} onChange={handleChange} rows={3} className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffa23f] resize-none" />
              </div>
            </div>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm shadow-xl p-8 border border-white/20 mt-8">
            <p className="text-white/90 text-sm leading-relaxed">
              By completing this form and clicking "Submit", you agree to the{' '}
              <Link href="/code-of-conduct" className="text-[#ffa23f] hover:underline font-medium">
                Code of Conduct
              </Link>
              . AWSLC - UPHSL handles your information as described in the{' '}
              <Link href="/privacy-policy" className="text-[#ffa23f] hover:underline font-medium">
                Privacy Notice
              </Link>
              .
            </p>
            <button type="submit" onClick={handleSubmit} className="w-full mt-6 bg-[#ffa23f] text-white font-bold py-3 px-4 rounded-md hover:bg-[#ff8c1a] transition-colors">
              Submit
            </button>
          </div>
        
          <div className="mt-6 text-center text-sm text-white/70">
            <p>Questions? Contact us at <a href="mailto:awslc.uphsl@gmail.com" className="text-[#ffa23f] hover:underline">awsclub@uphsl.edu</a></p>
          </div>
        </div>
      </div>
  )
}

export default MembershipForm