import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Akash")

  const handlechange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <h1>Profile Builder</h1>
      <div className='container'>
        <div>
          <div>Enter your name</div>
          <input value={name} type="text" placeholder='Enter Your name' onChange={handlechange} />
        </div>
        <div>
          <div>my name is {name }</div>
        </div>
       </div>
    </div>
  )
}

export default App
