import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../store/Slice'

function InputBar() {

  const dispatch = useDispatch()

  // const [todo, setTodo] = useState({})
  const [data, setData] = useState("")

  const handleClick = (e) => {
     e.preventDefault()
     //setData(data)
     if(data === "") {
      alert("Enter Data First")
     }
     else {
      dispatch(addTodo(data)); 
      setData('')
     }
   
    
  }

  return (
    <div className='flex-col bg-slate-700 rounded-t-md'>
      <form onSubmit={handleClick} className='flex flex-wrap justify-center pt-2'>
      <div className='mr-2 h-10'>
        <input className='box-content bg-slate-700 text-white border-white h-2 w-48 p-4 border-2' value={data} onChange={(e) => setData(e.target.value)} placeholder='Enter ToDo' />
      </div>

      <div className='ml-2'>
        <button type="submit" className='bg-cyan-300 font-bold border-solid border-zinc-950 w-28 h-10 rounded-md'>Add</button>
      </div>

      </form>
    </div>
  )
}

export default InputBar
