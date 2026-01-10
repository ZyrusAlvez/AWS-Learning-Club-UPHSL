"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { submitMember } from '@/services/member'
import { toast } from 'sonner' 

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

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'age', 'contactNumber', 
      'facebookLink', 'personalEmail', 'schoolEmail', 
      'program', 'yearSection'
    ]
    const emptyFields = requiredFields.filter(
      field => !formData[field as keyof typeof formData].trim()
    )

    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)

    try {
      await submitMember(formData) // call the service function
      toast.success('Application submitted successfully!')
      setFormData({
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
    } catch (err: any) {
      toast.error(err.message || 'Failed to submit membership.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center gap-4">
      <Image src="/awslc banner.jpg" alt="AWS Learning Club - UPHSL Banner" width={672} height={150} className='rounded-lg'/>
      <div className="max-w-2xl mx-auto">

        {/* ...rest of your form UI... */}

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
          <button 
            type="submit" 
            onClick={handleSubmit} 
            disabled={loading}
            className="w-full mt-6 bg-[#ffa23f] text-white font-bold py-3 px-4 rounded-md hover:bg-[#ff8c1a] transition-colors"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-white/70">
          <p>Questions? Contact us at <a href="mailto:awslc.uphsl@gmail.com" className="text-[#ffa23f] hover:underline">awslc.uphsl@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default MembershipForm
