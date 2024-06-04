import React from 'react';

type FaqCardProps = {
    title: string;
    body: string;
};

const FaqCard: React.FC<FaqCardProps> = ({ title, body }) => {
  return (
    <div className="faqCard">
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  );
}

export default FaqCard;
