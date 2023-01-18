import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'


import { useState } from 'react'
import { Switch } from '@headlessui/react'
import CheckContext from './store/CheckContext'

export default function FeedBackList({feedbackItem, handleDelete}) {
    console.log(feedbackItem)
    
  const [enabled, setEnabled] = useState(false)


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  return (

   
    <CheckContext.Provider value={enabled}>
          <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 mr-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
          </Switch>
   
     
    

      <div className='feedback-list'>
    
        {feedbackItem.map((item) => (
       
             <FeedbackItem key={item.id} item= {item} handleDelete={handleDelete} />
      

        ))}
      
       
     </div>
    
  
     
 
   

   </CheckContext.Provider>
    
   
  
   


  )
}
