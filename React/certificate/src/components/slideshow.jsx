import React from 'react'
import '../App.css'

const Slideshow = ({slide}) => {
  return (
    <div>
        <div className="slideshow"><h1>{slide.heading}</h1>
        <p>{slide.text}</p>
        </div>
    </div>
  )
}

export default Slideshow
