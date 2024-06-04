import React from 'react'
import Image from 'next/image';

import Img1 from "../images/heroSectionImg1.png"
import Img2 from "../images/heroSectionImg2.png"

const Hero = () => {
  return (
    <div className="common">
      <div className="leftSide">
        <div className="leftUpper">
          <h1>make the best financial decisions</h1>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className="buttons">
            <button>Get Started</button>
          </div>
        </div>
        <div className="leftBottom"><Image src={Img1} alt="Img 1" /></div>
      </div>
      <div className="rightSide"><Image src={Img2} alt="Img 2" /></div>

    </div>
  )
}

export default Hero