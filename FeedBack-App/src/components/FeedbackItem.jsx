import React from 'react'
import Card from './UI/Card'
import {FaTimes} from 'react-icons/fa'

export default function FeedbackItem({item, handleDelete}) {

  return (


     <Card>
    <div className="num-display">{item.rating}</div>
    <button className='close'> 
    <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
    </button>
    <div className="text-display">
            {item.text}
    </div>
    </Card>
      

   
    
 
  )
}
