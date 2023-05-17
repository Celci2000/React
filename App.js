
import React, { useEffect, useState } from 'react'
import questions from './data.js'
import './App.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function App(){
  const [showAns, setShowAns]=useState(false)
  function handleClick(){
  setShowAns((state)=>!state)
}
  
  return (
    <div className="App">
     <div className="main">
        {questions.map((e)=>
          <div className="title">{e.title}
          <button className="btn" onClick={handleClick}>{showAns?AiOutlineMinus:<AiOutlinePlus/>}</button>
          <p>{showAns && `${e.info}` }</p>
          </div>
        )}
     </div>
    </div>
  );
}

export default App;
