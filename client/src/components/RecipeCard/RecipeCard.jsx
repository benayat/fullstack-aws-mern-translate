import React from "react";
// import axios from 'axios';
import './RecipeCardStyle.css';

const RecipeCard =({data})=>{

const clickHandler = () =>{
    // try{
    //     const response = await axios.post('', {
            
    //      });
      
    //  }catch(err){
    //          console.log(err); 
    //  }

}

  return (
    <div className="recipeCardContainer">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="allRecipeInfo">
            <div className="miniCard">
                <h3>Ingredients</h3>
                <ol>
                    {
                        data.ingredients.map((ingre,index)=>{
                            return <li key={index}>{ingre}</li>
                        })
                    }   
                </ol>
                <p></p>
                <p></p>
            </div>
            <div className="miniCard">
                <h3>Preparation</h3>
                <ol>
                    { 
                        data.howToMake.map((ingre,index)=>{
                            return <li key={index}>{ingre}</li>
                        })
                   
                    }
                </ol>
            </div>
            <img className="miniCard" src={data.picture} alt="" width="" height=""/>
        </div>
        <button className="heartBtn" onClick={clickHandler}><i className="heartIcon fas fa-heart fa-3x"></i></button>
   </div>
  );
}

export default RecipeCard;