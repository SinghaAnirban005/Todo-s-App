import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useId } from 'react'
import {deleteTodo} from '../store/Slice'
import images from './images.png'
import { markTodo } from '../store/Slice'


function Todos() {
  // const id = useId()
  const [val, setVal] = useState("Update")

  const todo = useSelector((state) => state.data)
  const dispatch = useDispatch()

  // const handleUpdate = () => {
  // val === "Update" ? setVal("Save") : setVal("Update")
  // dispatch(updateTodo(todo.id))
    
  // }

  // const [color, setColor] = useState("bg-slate-500")

  // const handleDel = () => {
  //   deleteTodo(todo.id)
  // }

  return (
    <div className={`flex mx-auto bg-slate-700 justify-center rounded-b-md`}>
      <ul className='mt-4'>
        {todo.map((item) => (

          <div className={`flex ${item.checked ? "bg-lime-400" : "bg-slate-500"} w-64 justify-between m-4`}>

            <div className='flex'>
            <input type='checkbox' className='cursor-pointer' onClick={() => console.log(item.checked)} onChange={() => dispatch(markTodo(item.id))} />
            
            <li className="mr-2 text-white font-mono p-2" key={item.id}>
              {item.todo} 
            </li>
              
            </div>

            <div>
            {/* <button>
              {val}
            </button>
                   */}
            <button onClick={() => dispatch(deleteTodo(item.id))} className='ml-2 items-center mt-1 p-2'>
              <img className='rounded-xl h-4 w-4' src={images} alt='Remove' />
            </button>
            </div>

          </div>  

        ))}
      </ul>
    </div>
  )
}

export default Todos
