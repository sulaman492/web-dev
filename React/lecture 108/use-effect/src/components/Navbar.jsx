import { useEffect } from "react"
import React from 'react'

function Navbar({color}) {
    
    //Run on every render
    useEffect(() => {
      alert("I will run on every render")
    }, )

    //Run on first render
    useEffect(() => {
      alert("I will run on first render")
    }, [])
    
    //Run only when color changes
    useEffect(() => {
      alert("I am running because color was changed")
    }, [color])
    
    
    
  return (
    <div>
      Hey I am a {color} navbar hehe..
    </div>
  )
}

export default Navbar
