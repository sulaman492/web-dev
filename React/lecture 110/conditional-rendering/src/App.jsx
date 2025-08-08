import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([{
    title: "Hey",
    desc: "I am a good todo"
  },
  {
    title: "Hey another todo",
    desc: "I am a good todo"
  },
  {
    title: "Hey i am a grocery todo",
    desc: "I am a grocery todo"
  },
  ])

  const Todo=({todo})=>{
    return(
      <>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </>
    )
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>I will be shown when button is clicked</button>} */}
      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          toggle to show btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
