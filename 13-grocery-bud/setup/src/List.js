import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, itemToRemove, EditItem}) => {


 
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const {id, title} = item;
        return (
          <article key={id} className="grocery-item">
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='delete-btn' onClick={() => itemToRemove(id)}><FaTrash /> </button>
              <button type='button' className='edit-btn' onClick={() => EditItem(id)} ><FaEdit /> </button>
            </div>
          </article>
        )
      })}
    </div>

  )
}

export default List
