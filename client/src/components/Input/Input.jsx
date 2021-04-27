import React from "react";
import './InputStyle.css';

const Input =({change})=>{


  return (
    <div>
       <input className="input" onChange={change}/>
   </div>
  );
}

export default Input;