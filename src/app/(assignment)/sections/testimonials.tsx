import React from 'react'
import Image from 'next/image';
import Img from "../images/testimonialSectionImg.png"

const Testimonials = () => {
  return (
    <>
      <div className='testimonials'>
        <div className="heading">
          <h3>TESTIMONIALS</h3>
          <h1>What Our Users <br /> Say About Us?</h1>
        </div>
        <div className='common'>
          <div className="leftSide">
            <Image src={Img} alt='Image' />
          </div>
          <div className="rightSide">
            <h4>The Best Financial Accounting App Ever!</h4>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            <div className="userImg">
              <div className="img1"><img src="" alt="img1" /></div>
              <div className="img2"><img src="" alt="img2" /></div>
              <div className="img3"><img src="" alt="img3" /></div>
              <div className="img4"><img src="" alt="img4" /></div>
              <div className="img5"><img src="" alt="img5" /></div>
            </div>
            <div className="currentUser">Nick Jonas</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials