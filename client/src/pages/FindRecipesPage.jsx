import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import {Spinner} from '../components/Spinner/Spinner.components';
import '../style/FindRecipeStyle.css';

const FindRecipesPage = () => {

const [data,setData] = useState([]);
const [url,setUrl] = useState();
const [loaderToggle,setLoaderToggle] = useState(false);


const getApi= async () => {
    console.log("getApi");
    try{
        const response = await axios.post("/api/recipes",{ url:"https://www.iamcook.ru/showrecipe/20669"
    });
        setData(response);
        console.log("jjjjjjjjj",response);
        setLoaderToggle(false)

    }catch(err){
            console.log(err); 
    }
}


const clickHandler=async()=>{
    setLoaderToggle(true)
    setData(null);
    await getApi();
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
                <Button click={clickHandler} content="Translate"/>
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
