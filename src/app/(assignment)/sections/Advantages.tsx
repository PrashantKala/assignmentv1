import React from 'react'
import Image from 'next/image';
import Img1 from "../images/advantageSectionImg1.png"
import Img2 from "../images/advantageSectionImg2.png"

const Advantages = () => {
    return (
        <>
            <div className="common">
                <div className="rightSide">
                    <Image src={Img1} alt='Image 1' />
                </div>
                <div className="leftSide">
                    <div className="heading">
                        <h5>ADVANTAGES</h5>
                        <h3>why choose Uifry?</h3>
                    </div>
                    <div className="advantage1">
                        <h4>clever notifications</h4>
                        <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </div>
            <div className="common">
                <div className="leftSide">
                    <div className="advantage1">
                        <h4>fully customizable</h4>
                        <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
                <div className="rightSide">
                    <Image src={Img2} alt='Image 2'/>
                </div>
            </div>
        </>
    )
}

export default Advantages