import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slideshow from './components/slideshow'

function App() {

  const nextslide=async () => {
    setCurrentindex(currentindex+1);
    
  }
  const [currentindex, setCurrentindex] = useState(0)
  const [slide, setSlide] = useState([{
    heading:"I am heading 1",
    text:"I am slide 1"
  },{
     heading:"I am heading 2",
    text:"I am slide 2"
  },{
     heading:"I am heading 3",
    text:"I am slide 3"
  },{
     heading:"I am heading 4",
    text:"I am slide 4"
  },{
     heading:"I am heading 5",
    text:"I am slide 5"
  }])

  return (
    <>
    <div className="button">
      <button>Restart</button>
      <button onClick={()=>nextslide()}>Next</button>
      <button>Previous</button>
      <Slideshow slide={slide[currentindex]}/>
    </div>

    </>
  )
}

export default App
