import React, { useState } from 'react';
import data from './data'
import Question from './Question';

function App({setApp}) {
  const [CloseAll, setCloseAll] = useState(true)
 const handleClose = () => {
  setCloseAll(false)
 }
  return(
    <main>
      <div className='container'>
          <h3>Questions and Answers About Logins</h3>
          <section>
          {data.map((question) => {
            return (
              <Question id={question.id} {...question} showInfo={CloseAll} />
            )
          })}
          </section>
        
      </div>
   
    </main>

  )
}

export default App;
