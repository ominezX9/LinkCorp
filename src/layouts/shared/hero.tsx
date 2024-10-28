import React from 'react'
import Header from '@components/shared/header';
import { Link, useParams } from 'react-router-dom'
import HomeImage from '@assets/images/pictorals/heroImage/homepage-image.png'

export default function Hero() {
  const {route} = useParams()
  // alert(route)
  // header Title
  const headerTitle = [
    {
      useCase: 'homepage',
      topTitle: 'The right service on your own terms',
      maintitle: 'Find the right link service. Get the right service.',
      description: null,
      image: HomeImage,
      bottomLinks: [
        { label: 'IT Strategy', link: '/about' },
        { label: 'Digital Transformation', link: '/services' },
        { label: 'Cybersecurity', link: '/contact' },
        { label: 'Legal Compliance', link: '/contact' },
      ]
      
    },
    {

    }
  ]

  return (
    <div className='relative h-[780px] bg-[gray]'>
      <Header/>

      {/* Your Hero content goes here */}
      <div className="absolute top-0 left-0 bottom-0 right-0 hero-text h-full flex justify-center items-center">
        <div className="flash-message w-[600px] flex flex-col gap-4">
          <h1 className='large-text add-line-height text-center font-medium '>Technological and Legal Counsultancy</h1>
          {}
          <p className='text-center '>
            Mitigate risks, optimize operations, and stay aligned with tech advancements and regulations
          </p>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 links w-full h-[36px] flex">
          {/* {
            bottomLinks.map((link) => (
              <Link className="top-tabs basis-1/4 flex items-center justify-center" to={link.link}>
                <span className='text-md text-center font-medium'>{link.label}</span>
              </Link>
            ))
          } */}
      </div>
    </div>
  )
}
