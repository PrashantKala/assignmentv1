import React from 'react'
import Image from 'next/image';
import Img from '../images/logo.png'

const Navbar = () => {
  return (
    <>
      <center>
        <div className="navbar">
          <div className="logo">
            <Image src={Img} alt='Image' />
          </div>
          <ul className="navBtns">
            <li className="navBtn">Home</li>
            <li className="navBtn">About Us</li>
            <li className="navBtn">Pricing</li>
            <li className="navBtn">Features</li>
        </ul>
          <button className="downloadBtn">Download</button>
        </div>
      </center>
    </>
  )
}

export default Navbar