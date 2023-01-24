
import React, { useState } from 'react'
import { data } from './data'
import Form from './Form'
import List from './List'
import Header from './Header'

function App() {

  const [people, setPeople] = useState(data)


  const addtolist = (list) => {

    setPeople((prev) => {
      return [...prev, list]
    })

  }

  return (


  <div>
    <Header></Header>
  
      <div className='containerf'> 
    
      <Form saveData={addtolist}></Form>


    <main>
    

    <section className='container1'>
    <h3>{people.length} birthdays today</h3>
     <List people={people} />
   
  
     <button 
     className="ml-64 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
     onClick={() => setPeople([])} >Clear All</button>

   </section>

 </main>
    </div>
  </div>

  )
}

export default App;

