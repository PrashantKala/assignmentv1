import React, { useEffect, useState } from 'react';
import FaqCard from '../components/FaqCard';
import cardData from '../JsonData/faqData.json';

type Card = {
    cardTitle: string;
    cardBody: string;
};

const Faqs = () => {
    const [cards, setCards] = useState<Card[]>([]);
    
    useEffect(() => {
        setCards(cardData);
    }, []);
    
    return (
        <>
            <div className="faqHead">
                <h5>FAQ</h5>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq">
                {cards.map((card, index) => (
                    <FaqCard key={index} title={card.cardTitle} body={card.cardBody} />
                ))}
            </div>
        </>
    );
}

export default Faqs;
