import React from 'react'
import { useEffect,useState } from 'react';
import './progressBar.css';
import {MAX,MIN} from '../constants';
function ProgressBar({Value=0, onComplete=()=> {}}) {

  const [Percent, setPercent] = useState(Value);
  
  useEffect(()=> {
    setPercent(Math.min(MAX,Math.max(Value,MIN)));

    if(Value>=MAX){
      onComplete();
    }
  },[Value]);

  return (
    <div className='Progress'>
        <span
        style={{
          color:Percent > 49?"white":"black"
          }}>
          {Percent.toFixed()}%
          </span>
        <div className='loading' 
        // style={{width: `${Percent}%`}}  //Instead of this we can use scale to increase the performance
          style={{
          transform:`scaleX(${Percent/MAX})`,
          transformOrigin:"left"
          }}
          role="progressbar"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Percent}
        />
    </div>
  ) 
}

export default ProgressBar
