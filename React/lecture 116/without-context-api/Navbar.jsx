import React from 'react'
import Button from './button'

const Navbar = (props) => {
  return (
    <div>
      Navbar
    <Button count={props.count} />
    </div>
  )
}

export default Navbar