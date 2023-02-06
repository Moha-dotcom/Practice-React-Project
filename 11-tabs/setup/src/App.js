import React, { useState, useEffect } from 'react'
import { FaAmazonPay, FaAngleDoubleRight } from 'react-icons/fa'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Jobdata from './data'
import Header from './Header';
import Education from './Education';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [JobData, setJobData] = useState(Jobdata);
  const [Loading, setLoading] = useState(true);
  const [value, setValue] = useState(0)


  


  const fetchData = async () => {
   
    setJobData(JobData);
    setLoading(false)

  }

  useEffect(( ) => {
      fetchData()
  }, [])




  if(Loading){
    return (
    <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }


  const { company, dates, duties, title } = JobData[value]

  return (

      <>
      <Education />
    
      <section className="section"> 
     
        <Header name="Experience"  />
      <div className="jobs-center">
      <div className="btn-container">
        {JobData.map((job, index) => {
          return (
            <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
          )
        })}
      
    
      </div>

      <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <BsFillArrowLeftSquareFill className="job-icon"></BsFillArrowLeftSquareFill>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
 
    </section>
      
      </>
  )






}

export default App
