import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt, FaAws, FaCloud, FaCheckCircle, FaUserPlus, FaShieldAlt, FaFileAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black/30 backdrop-blur-sm text-white py-6 relative overflow-hidden border-t border-[#ffa23f]/30 mt-8'>
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-5 left-10'>
          <FaAws className='h-20 w-20 transform rotate-12' />
        </div>
        <div className='absolute bottom-5 right-10'>
          <FaCloud className='h-24 w-24 transform -rotate-12' />
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-6 text-sm'>
          <div className='col-span-2 md:col-span-2'>
            <Link href='/' className='flex items-center mb-2 hover:opacity-80 transition-opacity'>
              <Image src='/awslc logo.webp' alt='AWS Learning Club' width={24} height={24} />
              <span className='ml-2 text-base font-bold'>AWS Learning Club</span>
            </Link>
            <p className='text-gray-400 text-xs mb-3'>
              UPHSL's community for cloud computing growth and AWS learning.
            </p>
            <div className='flex space-x-3'>
              <a href='https://www.facebook.com/awslearningclub' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#ffa23f] transition-colors'>
                <FaFacebook className='h-4 w-4' />
              </a>
              <a href='https://www.linkedin.com/company/awslcuphsl' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#ffa23f] transition-colors'>
                <FaLinkedin className='h-4 w-4' />
              </a>
              <a href='https://discord.gg/KFUVjh3Xqt' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#ffa23f] transition-colors'>
                <FaDiscord className='h-4 w-4' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-sm font-semibold mb-2 text-[#ffa23f]'>Quick Links</h3>
            <ul className='space-y-1 text-xs'>
              <li>
                <Link href='/verify' className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
                  <FaCheckCircle className='h-3 w-3 text-[#ffa23f]' />
                  <span>Verify</span>
                </Link>
              </li>
              <li>
                <Link href='/membership' className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
                  <FaUserPlus className='h-3 w-3 text-[#ffa23f]' />
                  <span>Membership</span>
                </Link>
              </li>
              <li>
                <Link href='/privacy-policy' className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
                  <FaShieldAlt className='h-3 w-3 text-[#ffa23f]' />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href='/code-of-conduct' className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
                  <FaFileAlt className='h-3 w-3 text-[#ffa23f]' />
                  <span>Code of Conduct</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold mb-2 text-[#ffa23f]'>Contact</h3>
            <div className='space-y-1 text-xs'>
              <a href='mailto:awslc.uphsl@gmail.com' className='flex items-center text-gray-400 hover:text-white transition-colors'>
                <FaEnvelope className='h-3 w-3 mr-2 text-[#ffa23f]' />
                <span>awslc.uphsl@gmail.com</span>
              </a>
              <a href='tel:+639936628701' className='flex items-center text-gray-400 hover:text-white transition-colors'>
                <FaPhone className='h-3 w-3 mr-2 text-[#ffa23f]' />
                <span>+639936628701</span>
              </a>
              <a href='https://maps.google.com/?q=College+of+Computer+Studies+UPHSL+Biñan' target='_blank' rel='noopener noreferrer' className='flex items-center text-gray-400 hover:text-white transition-colors'>
                <FaMapMarkerAlt className='h-3 w-3 mr-2 text-[#ffa23f]' />
                <span>CCS - UPHSL, Biñan</span>
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-[#ffa23f]/30 mt-4 pt-4 text-center text-xs'>
          <p className='text-gray-500'>
            © 2026 AWS Learning Club - UPHSL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer