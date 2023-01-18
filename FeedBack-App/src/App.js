
import { useEffect, useState } from 'react';
import './App.css';
import FeedBackList from './components/FeedBackList';

import Header from './components/Header';
import FeedBackData from './data/FeedBackData'



function App() {

  const [feedback, setFeedBack] = useState([])
  useEffect(() => {
    setFeedBack(FeedBackData)
  }, [feedback])


  return (
    <>
    <Header />
    <div className="container">
          <FeedBackList feedbackItem = {feedback}  />
    </div>
      
 
  
    </>

  );
}


export default App;
