import React from 'react'
import Image from 'next/image';
import Img from '../images/featureSectionImg.png'

const Features = () => {
  return (
    <>
      <div className="common">
        <div className="leftSide"><Image src={Img} alt='Image' /></div>
        <div className="rightSide">
          <div className="featuresHeading">
            <h3>Features</h3>
            <h1>Uifry premium</h1>
          </div>
          <div className="featuresList">
            <div className="feature1">
            <h5>Budgeting intervals</h5>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="feature2">
              <h5>Budgeting intervals</h5>
              <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="feature3">
              <h5>Budgeting intervals</h5>
              <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features