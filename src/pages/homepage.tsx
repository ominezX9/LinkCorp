import React from 'react'
import Hero from '@/layouts/shared/hero'
import Jumbotron from '@/components/shared/jumbotron'
import Features from '@/components/shared/features'
export default function Homepage() {
  return (
    <div>
      <Hero />

      {/* Your Homepage content goes here */}
      <Jumbotron />
      
      <Features 
        title={''} 
        description={''} 
        image={''}
        />
      
    </div>
  )
}
