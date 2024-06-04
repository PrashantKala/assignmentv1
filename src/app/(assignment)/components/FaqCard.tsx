import React from 'react'

const FaqCard = (props) => {
  return (
    <>
        <div className="cardTitle">{props.cardTitle}</div>
        <div className="cardBody">{props.cardBody}</div>
    </>
  )
}

export default FaqCard