import { v4 as uuidv4 } from 'uuid'
import {  useState } from 'react';
import './App.css';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';

import Header from './components/Header';
import FeedBackForm from './components/UI/FeedBackForm';
import FeedBackData from './data/FeedBackData'




function App() {
  const [feedback, setFeedBack] = useState(FeedBackData)

  const feedbackDelete = (id) => {
    if(window.confirm("Are you sure you want to delete")){
        setFeedBack(feedback.filter((item) => 
         item.id !== id
  ))
    }
    
  }

  const handleAdd = (Newfeedback) => {
    Newfeedback.id = uuidv4();
      setFeedBack([Newfeedback, ...feedback])

  }

  


  return (
    <>
    <Header />
   
    <div className="container">
      <FeedBackForm HandleFormAdd={handleAdd} />
    <FeedBackStats feedback={feedback}></FeedBackStats>
          <FeedBackList feedbackItem = {feedback}  handleDelete={feedbackDelete} />
    </div>
      
 
  
    </>

  );
}


export default App;
