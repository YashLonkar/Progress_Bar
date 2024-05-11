import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'
// import StartStop from './components/StartStop'

function App() {
  const [Value, setValue] = useState(0);
  const [success, setsuccess] = useState(false);

  useEffect(() =>{
    setInterval(()=>{
      setValue((val)=> val+0.1);
    },20);
  },[]);
  
  return (
  
    <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar Value={Value}
      onComplete={() => setsuccess(true)}
      /> 
      <span>{success?"Complete!":"Loading..."}</span>
      
    </div>
    
    
  );
}

export default App
