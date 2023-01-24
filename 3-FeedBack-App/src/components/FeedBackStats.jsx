import React from 'react'

export default function FeedBackStats({feedback}) {
    // Calculating Avergae Rating
    let Average = feedback.reduce((acc, curValue) => {
        return  acc + curValue.rating
    }, 0) / feedback.length

    console.log(Average)

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Averaging Rating : {isNaN(Average) ? 0 : Average.toFixed(1)}</h4>
    </div>
  )
}
