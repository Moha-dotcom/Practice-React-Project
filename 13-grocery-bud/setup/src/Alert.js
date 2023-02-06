import React, { useEffect } from 'react'

const Alert = ({msg, type, removeAlert, list}) => {

  useEffect(() => {
   const timeout = setTimeout(() => {
    removeAlert()
   }, 3000)
   return () => {
      clearTimeout(timeout)
   }
  }, [list])
  return (
    <div className='alert'>
      <h4 className={"alert" + `-${type}`} >{msg}</h4>
    </div>

  )
}

export default Alert
