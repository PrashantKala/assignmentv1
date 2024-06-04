import React from 'react'
import FaqCard from '../components/FaqCard'

const Faqs = () => {
    return (
        <>
            <div className="faqHead">
                <h5>FAQ</h5>
                <h2>Frequently asked questions</h2>
            </div>
            <div className="faq">
                <div className="faqBody"><FaqCard cardTitle={<>Title</>}  cardBody={<>Body</>}/></div>
                <div className="faqBody"><FaqCard cardTitle={<>Title</>}  cardBody={<>Body</>}/></div>
                <div className="faqBody"><FaqCard cardTitle={<>Title</>}  cardBody={<>Body</>}/></div>
                <div className="faqBody"><FaqCard cardTitle={<>Title</>}  cardBody={<>Body</>}/></div>
            </div>
        </>
    )
}

export default Faqs