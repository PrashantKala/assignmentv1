"use client"
import React from 'react'

import Hero from './sections/hero'
import Features from './sections/features'
import Gallery from './sections/gallery'
import Testimonials from './sections/testimonials'
import Pricing_Plan from './sections/pricingPlans'
import Contact from './sections/contact'

const home = () => {
  return (
    <>
        <section className='hero'><Hero/></section>
        <section className='features'><Features/></section>
        <section className='gallery'><Gallery/></section>
        <section className='testimonials'><Testimonials/></section>
        <section className='pricingPlans'><Pricing_Plan/></section>
        {/* <section className='contact'><Contact/></section> */}
    </>
  )
}

export default home