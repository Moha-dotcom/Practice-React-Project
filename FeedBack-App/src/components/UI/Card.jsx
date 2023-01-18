import React, { useContext } from 'react'
import CheckContext from '../store/CheckContext'

export default function Card({children, reverse}) {
  const crxt = useContext(CheckContext)

  return (
    <div className={`card ${crxt && 'reverse' } `} style = {{
      backgroundColor : crxt === true ? 'rgba(0,0,0,0.4)' : '#ffff' , color : crxt === true ? '#ffff' : '#000'
    }}>
        {children}
    </div>
  )
}
