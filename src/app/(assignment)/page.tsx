"use client"
import React from 'react'

import Navbar from './sections/Navbar'
import Features from './sections/Features'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Pricing_Plan from './sections/PricePlans'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Advantages from './sections/Advantages'
import Faqs from './sections/Faqs'

const home = () => {
  return (
    <>
        <section className='navbar'><Navbar/></section>
        <section className='hero'><Hero/></section>
        <section className='features'><Features/></section>
        <section className='Advantages'><Advantages/></section>
        <section className='testimonials'><Testimonials/></section>
        <section className='faqs'><Faqs/></section>
        <section className="getStartedImg"><img src="" alt="Image" /></section>
        <section className='pricingPlans'><Pricing_Plan/></section>
        <section className='contact'><Contact/></section>
    </>
  )
}

export default home