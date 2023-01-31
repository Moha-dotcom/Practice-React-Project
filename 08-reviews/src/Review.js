import React, { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {

const [index, setIndex] = useState(0);
const { name, job, image, text} = reviews[index];

const checkNumber = (number) => {
  if(number > reviews.length -1){
    return 0;
  }
  if(number < 0){
    return reviews.length - 1;
  }

  return number;
}

const nextPerson = () => {
    setIndex(() => {
      let newIndex  = index + 1;
        return checkNumber(newIndex);
    })
}

const prevPerson = () => {
  setIndex(() => {
    let newIndex  = index - 1;
    return checkNumber(newIndex);
  })
}


const randomPerson =( ) =>{
  let randomPerson  = Math.floor(Math.random() * reviews.length);
  setIndex(randomPerson)
}



  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt="peopleImage" />
        <span className='quote-icon'><FaQuoteRight /></span>
     
      </div>
      <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'> 
          <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
          <button className='next-btn'  onClick={nextPerson}><FaChevronRight /></button>
        </div>
        <button className='random-btn' onClick={randomPerson}>SUPRISE ME</button>
    </article>
    
  )
};

export default Review;
