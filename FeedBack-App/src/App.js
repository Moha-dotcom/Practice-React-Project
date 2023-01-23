import { v4 as uuidv4 } from 'uuid'
import {  useState } from 'react';
import './App.css';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';

import Header from './components/Header';
import FeedBackForm from './components/UI/FeedBackForm';
import FeedBackData from './data/FeedBackData'
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'

import AboutPage from './pages/AboutPage';


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
   
    <Router>
    <Header />
   
    
     
     
    
  
    <div className="container">
        <Routes>
          <Route path="/about" element={<AboutPage/>} exact />
         
        <Route path="/"  element={
          <>
                <FeedBackForm HandleFormAdd={handleAdd} />
                <FeedBackStats feedback={feedback}></FeedBackStats>
              <FeedBackList feedbackItem = {feedback}  handleDelete={feedbackDelete} />
          </>

        }/>
          
       </Routes>
       </div>
    
   

     
    
  
    </Router>
  

  );
}


export default App;
