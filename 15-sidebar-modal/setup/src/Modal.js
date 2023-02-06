import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Modal = () => {
  const {isModalOpen, CloseModal} = useGlobalContext()
  return (

  <div className={`${isModalOpen ? "modal-overlay show-modal" : "s"}`}>
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={CloseModal}><FaTimes /> </button>
    </div>
  </div>
 
  )
}

export default Modal
