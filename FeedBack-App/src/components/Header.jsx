import React from 'react'

export default function Header({text}) {
  return (
        <header>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
        // <h2>ajsjfsajf</h2>
  )
}


Header.defaultProps = {
    text : "FeedBack UI"
}