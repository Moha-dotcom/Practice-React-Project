import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import {v4 as uuidv4} from 'uuid'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return [];
  }
}

function App() {

  const [alert, SetAlert] = useState({show : false, msg: "" ,   type :'' });
  const [name, setName] =useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const showAlert = (show =false, msg="",  type = "") => {
    SetAlert({show, msg, type })
}

  const ClearList = () => {
    SetAlert({show : true, msg: "empty List" ,type : "danger" })
    setList([])
  }
  
  const removeItem = (id) => {
    SetAlert({show : true, msg : "removed Item", type: "danger"});
    setList(list.filter((item) => {return item.id !== id}));
  }


  const EditItem = (id) => {
      const specificItem = list.find((item) => item.id === id);
      setEditing(true);
      setEditId(id);
      setName(specificItem.title);
  }



  const  submitHandler = (e) =>{
    e.preventDefault()
    if(!name){
      //display an alert
      SetAlert({show : true, msg : "Please Type Something", type: "danger"})
    }else if(name && isEditing){
        setList(list.map((item) => {
         
            if(item.id === editID){
              return {...item, title : name}
            }
            return item;
          }

         
        
        ))

        setEditing(false);
        SetAlert({show : true, msg : "Editing SuccessFull", type: "success"})
        setEditId(null);
        setName("")
    }else{
      SetAlert({show : true, msg : "Added", type: "success"})
      const newItem = {id : uuidv4(), title :  name}
      setList((otherListItems) => {
        return [...otherListItems,newItem]
      })
      setName("")
    }
  }

  useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  

  return (
    <section  className='section-center'>
      <form onSubmit={submitHandler} className='grocery-form'>
        {alert.show &&  <Alert msg={alert.msg} type={alert.type} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='form-control' > 
          <input type="text" className='grocery' placeholder='Eggs' value={name} onChange={(e) => {setName(e.target.value)}} />
          <button type='submit' className='submit-btn'> 
          {isEditing ?  "Edit" : "Submit"} 
          </button>

        </div>
      </form>
      {list.length > 0 && 
        <div className='grocery-container '> 
        <List items={list} itemToRemove={removeItem} EditItem={EditItem} />
        <button className='clear-btn' onClick={ClearList}>Clear items</button>
      </div>}
    </section>
  )
}

export default App
