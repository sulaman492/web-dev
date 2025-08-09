import { useState, useEffect } from "react"
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { IoClipboardOutline } from "react-icons/io5";
import axios from "axios";
import Todo from "../../backend/model/todo.model"
import { set } from "mongoose";

function App() {

  const [newTodo, setNewTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [editingTodo,setEditingTodo]=useState(null)
  const [editedText,setEditedText]=useState("")

  const startEditing=(t)=>{
      setEditingTodo(t._id);
      setEditedText(t.text)
  }

  useEffect(() => {
  const fetchTodo=async () => {
    try {
    const response=await axios.get("/api/routes");
    setTodos(response.data);      
    } catch (error) {
      console.log(error);
      
    };
  }
    fetchTodo();

   }, [])
  
  
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return
    try {
      const response = await axios.post("/api/routes", { text: newTodo })
      setTodos([...Todos, response.data]);
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
          <input className=" flex-1 outline-none py-2 px-4 text-gray-700 required placeholder-gray-400" type="text" placeholder="what needs to be done" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md text-white px-4 py-2">Add Task</button>

        </form>
        <div>
          
          {Todos.length===0?(
              <div>Not yet</div>):(
            Todos.map((t) =>(
              <div key={t._id}  >
                {editingTodo===t._id?(
                  <div className="flex gap-x-3 items-center">
                  <input className=" flex-1 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 shadow-inner text-gray-700 border p-3 border-gray-200" type="text" value={editedText} onChange={(e)=>setEditedText(e.target.value)}></input>
                  <div className="flex gap-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"><MdOutlineDone/></button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={()=>{setEditingTodo(null)}}><IoClose/></button>
                </div>
                  </div>
                ):(
                  <div>
                    {t.text}
                    <button onClick={()=>startEditing(t)}><MdModeEditOutline/></button>
                    <button><FaTrash/></button>
                  </div>
                )}
              </div>
            )) )
                
              
            }
        </div>
      </div>
    </div>
  )
}

export default App
