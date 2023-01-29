import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours ] = useState([])

  const removeElements = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)

  }
 const FetchTour = async () => {
   try{
    setLoading(true);
    const response = await fetch(url);
    const tour  = await response.json();
    setLoading(false);
    setTours(tour)
   }catch(error){
    setLoading(false);

   }

 }

 useEffect(() => {
  FetchTour()
 }, [])
  if(loading){
    return <main><Loading></Loading></main>
  }

  if(tours.length === 0){
    return <main> 
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={FetchTour}>refresh</button>
        </div>
    </main>
  }
  return <main><Tours tours={tours} removeElement={removeElements}></Tours></main>
}

export default App
