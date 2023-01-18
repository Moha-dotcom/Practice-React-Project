
import React from 'react'
import Card from './UI/Card'


export default function FeedbackItem({item}) {

    
  return (

 
    <Card>
    <div className="num-display">{item.rating}</div>
    <div className="text-display">
            {item.text}
    </div>
    </Card>
      
    
 
  )
}
