import { useState } from "react"
import axios from "axios"

function App() {

  const[newTodo,setNewTodo]=useState("")
  const[Todos,setTodos]=useState("")
  
  const addTodo=async(e)=>{
    e.preventDefault();
    if(!newTodo.trim()) return
    try {
      const response=await axios.post("/api/routes",{text:newTodo})
      setTodos([...Todos,response.data]);
      setNewTodo("")
    } catch (error) {
      alert(error);
      
    }
  }
    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="rounded-2xl p-8 shadow-2xl w-full max-w-lg ">
        
          <h1 className="font-bold text-gray-800 mb-8 text-4xl">Task Manager</h1>
        
        <form onSubmit={addTodo} className="flex items-center gap-2 border border-gray-200 p-2 rounded-lg">
          <input className=" flex-1 outline-none py-2 px-4 text-gray-700 required placeholder-gray-400" type="text" placeholder="what needs to be done" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md text-white px-4 py-2">Add Task</button>
      
        </form>
        <div>
            {Todos.length===0?(
              <div></div>):(
                {Todos.map()}
              )
            }
        </div>
        </div>
    </div>
  )
}

export default App
