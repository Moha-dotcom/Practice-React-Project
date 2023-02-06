import React from 'react'
import Header from './Header'

function Education({name}) {
  return (
    <section className='section' >
        <div className='education-center'> 
        <Header name="Education" />
        <div className='within'>
            <div className='move'>
            <article className="job-info">
            <h3>Metropolitan State University</h3>
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="job-date">Jan 2017 - Dec 2020</p>
          </article>
            </div>
        </div>
        
        </div>



 </section>
  
  )
}

export default Education
