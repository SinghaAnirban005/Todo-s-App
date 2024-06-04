import { useState } from 'react'
import './App.css'
import InputBar from './Components/InputBar.jsx'
import Todos from './Components/Todos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-700'>
      <InputBar />
      <Todos />
    </div>
  )
}

export default App
