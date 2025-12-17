import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t-[1.5px] border-[#ffa23f] mx-4 mt-8 py-4 text-white/70 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
      <p>© 2025 AWS Learning Club - UPHSL. All rights reserved.</p>
      <div className='flex gap-4 underline'>
        <Link href="/">About Us</Link>
        <Link href="/policy">Privacy Policy</Link>
        <Link href="/code-of-conduct">Code of Conduct</Link>
      </div>
    </div>
  )
}

export default Footer