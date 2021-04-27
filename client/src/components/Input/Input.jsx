import React from "react";
import './InputStyle.css';

const Input =({change})=>{


  return (
    <div>
       <input className="input" onChange={change} placeholder="Paste URL here"/>
   </div>
  );
}

export default Input;