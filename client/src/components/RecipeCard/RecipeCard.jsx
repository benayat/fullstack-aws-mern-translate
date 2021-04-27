import React from "react";
// import axios from 'axios';
import './RecipeCardStyle.css';

const RecipeCard =({title,description,ingredients,prepStages,image,cal,prepTime})=>{

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
        <h2>{title}title</h2>
        <p>{description}description</p>
        <div className="allRecipeInfo">
            <div className="miniCard">
                <h3>Ingredients</h3>
                <ul>
                    {/* {
                        ingredients.map((ingre,index)=>{
                            return <li key={index}>{ingre}</li>
                        })
                    }    */}
                </ul>
                <p>{cal}</p>
                <p>{prepTime}</p>
            </div>
            <div className="miniCard">
                <h3>Preparation</h3>
                <ol>
                    {/* {
                        prepStages.map((ingre,index)=>{
                            return <li key={index}>{ingre}</li>
                        })
                    }    */
                    }
                </ol>
            </div>
            <img className="miniCard" src={image} alt="" width="" height=""/>
        </div>
        <button className="heartBtn" onClick={clickHandler}><i className="heartIcon fas fa-heart fa-3x"></i></button>
   </div>
  );
}

export default RecipeCard;