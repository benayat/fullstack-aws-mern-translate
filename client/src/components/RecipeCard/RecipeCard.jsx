import React from "react";
import axios from 'axios';
import './RecipeCardStyle.css';

const RecipeCard = ({data,url,isDeletable=false})=>{
console.log(isDeletable);
const clickHandlerFav = async () =>{
    console.log(url);
    try{
        await axios.post("/api/favourites",{ url:url});
      
     }catch(err){
             console.log(err); 
     }
}

const deleteHandler = async ()=>{
    try{
        await axios.delete(`/api/favourites/byid/${data.id}`);
    }catch(e){
        console.log(e);
        console.log("client delete");
    }
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
                <p>{data.calories}</p>
                <p>{data.time}</p>
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
        <div>
        <button className="heartBtn" onClick={clickHandlerFav}><i className="heartIcon fas fa-heart fa-3x"></i></button>
       
         {isDeletable && <button onClick={deleteHandler}><i className="far fa-trash-alt fa-3x"></i></button>}
         </div>

        
   </div>
  );
}

export default RecipeCard;