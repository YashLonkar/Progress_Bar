import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'
import StartStop from './components/StartStop'

function App() {
  const [Value, setValue] = useState(0);

  useEffect(() =>{
    setInterval(()=>{
      setValue((val)=> val+1);
    },100);
  },[]);
  
  return (
  
    <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar Value={Value}/> 
      <div className='btn'>
      <button className='btn'>Start</button>
      <button className='btn'>Stop</button>
      </div>
    </div>
    
    
  )
}

export default App
