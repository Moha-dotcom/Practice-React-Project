import React from 'react'
import Card from './Card'
import { useState } from 'react'
import Button from './Button'
import RatingSelect from '../RatingSelect'



export default function FeedBackForm({HandleFormAdd}) {

    const [text, setText ] =useState("")
    const [btnDisbaled, setBtnDisabled ] =useState(true)
    const [rating, setRating ] =useState(10)
    const [message, setMessage ] =useState("")
 
    const HandleSetText = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setMessage("Text must me at least 10 Characters");
            setBtnDisabled(true);
            
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
        
    }


    const fill = (a) => {
       setRating(a)
    }

    const submitForm = (e) => {
        e.preventDefault();

        const Data = {
            text, rating
        }
       
        HandleFormAdd(Data)

        setText('')

    }
  return (
   <Card>
        <form onSubmit={submitForm}>
            <h2>How would you rate our Service</h2>
            <RatingSelect select={fill}/>
            <div className="input-group">
                <input  onChange={HandleSetText}  type="text" placeholder='write a review' />
                <Button type="submit"  isDisabled={btnDisbaled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
   </Card>
  )
}
