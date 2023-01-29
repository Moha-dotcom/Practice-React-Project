import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeElement}) => {
  return<section>
    <div className='title'>
    <h2>Our Tours</h2>
    <div className='underline'></div>
    </div>
    <div>
      {tours.map((tours) => (
          <Tour key={tours.id} {...tours} removeElement={removeElement}>

          </Tour>
      ))}
    </div>
  </section>
};

export default Tours;
