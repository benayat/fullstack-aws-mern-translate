import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';
import RecipeCard from '../RecipeCard/RecipeCard';
import {Spinner} from '../Spinner/Spinner.components';
import './FindRecipeStyle.css';

const FindRecipesPage = () => {

const [data,setData] = useState(null);
const [url,setUrl] = useState();
const [loaderToggle,setLoaderToggle] = useState(false);
// const [description,setDescription] = useState();
// const [ingredients,setIngredients] = useState();
// const [prepStages,setPrepStages] = useState();

const getApi= async () => {
    console.log("postAPI");
    console.log(url)
    try{
        const response = await axios.post("api/recipes",url);
        setData(response);
        console.log("hhhhhhhh",response);
        setLoaderToggle(false)
        
       
    }catch(err){
            console.log(err); 
    }
}


const clickHandler=()=>{
    setLoaderToggle(true)
    setData(null);
    getApi();
}

const changeHandler = (e)=>{
    console.log(e.target.value);
    setUrl(e.target.value);
}
    return (
      <div className="recipesContainer">
        <h1>Recipes from ... </h1>
            <div className="recipeSearch">
                <Input change={changeHandler}/>
                <Button click={clickHandler} content="Search"/>
            </div>
            {
                (data==null) ? null :<RecipeCard/>
                
            }
            {
                (loaderToggle) ? <Spinner/> :null
            }
                    
        
    </div>
    );
};

  export default FindRecipesPage;
