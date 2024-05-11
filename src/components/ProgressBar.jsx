import React from 'react'
import { useEffect,useState } from 'react';
import './progressBar.css';
function ProgressBar({Value=0}) {

  const [Percent, setPercent] = useState(Value);

  useEffect(()=> {
    setPercent(Math.min(100,Math.max(Value,0)));
  },[Value]);

  return (
    <div className='Progress'>
        <span
        style={{color:Percent > 49?"white":"black"}}>{Percent.toFixed()}%</span>
        <div className='loading' style={{width: `${Percent}%`}}></div>
    </div>
  ) 
}

export default ProgressBar
