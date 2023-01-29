import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeElement}) => {



  const [readMore, setReadMore] = useState(false);

  return (
  <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'> 
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{
        readMore ? info : `${info.substring(0, info.length/2- 60)}....`} 
        {readMore === true ? <button onClick={() => setReadMore(false)}>Minimize</button> : <button onClick={() => setReadMore(true)}>Readmore</button>} </p>
        <button onClick={() => {removeElement(id)}} className='delete-btn'>not-interested </button>
      </footer>
  </article>
  )
};

export default Tour;
