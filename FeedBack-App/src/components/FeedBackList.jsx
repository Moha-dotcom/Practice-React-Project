import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedBackList({feedbackItem}) {
    console.log(feedbackItem)
  return (
  
    < >
      <div>
        {feedbackItem.map((item) => (
          <FeedbackItem key={item.id} item= {item}  />
        ))}
       </div>
   
    </>
  )
}
