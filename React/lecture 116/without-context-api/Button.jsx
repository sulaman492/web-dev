import React from 'react'
import Component1 from './component1'

const Button = (props) => {
  return (
    <div>
      <button> <span><Component1 count={props.count} /></span> I am a button</button>
    </div>
  )
}

export default Button
