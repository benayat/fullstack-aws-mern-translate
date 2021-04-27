import React from "react";
import './ButtonStyle.css';

const Button =({content,click})=>{


  return (
    <div>
       <button className="btn" onClick={click}>{content}</button>
   </div>
  );
}

export default Button;