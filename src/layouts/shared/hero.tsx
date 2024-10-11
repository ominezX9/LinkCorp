import React from 'react'
import Header from '@components/shared/header';
import { Link } from 'react-router-dom'

export default function Hero() {

  const bottomLinks = [
    { label: 'IT Strategy', link: '/about' },
    { label: 'Digital Transformation', link: '/services' },
    { label: 'Cybersecurity', link: '/contact' },
    { label: 'Legal Compliance', link: '/contact' },
    // Add more links as needed...
  ]
  return (
    <div className='relative h-[780px] bg-[gray]'>
      <Header/>

      {/* Your Hero content goes here */}
      <div className="hero-text h-full flex justify-center items-center">
        <div className="flash-message w-[600px] flex flex-col gap-4">
          <h1 className='text-5xl text-center font-medium '>Technological and Legal Counsultancy</h1>
          <p className='text-center '>
            Mitigate risks, optimize operations, and stay aligned with tech advancements and regulations
          </p>
        </div>
      </div>


      <div className="links w-full h-[36px] flex">
          {
            bottomLinks.map((link) => (
              <Link className="basis-1/4" to={link.link}>
                <span className='text-2xl text-center font-medium'>{link.label}</span>
              </Link>
            ))
          }
      </div>
    </div>
  )
}
