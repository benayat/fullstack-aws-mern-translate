import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import SelectOption from "./SelectOption";
import "../style/favoritepage.css";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Spinner } from "./Spinner/Spinner.components";

const FavoritesPage = ({ title, endpoint }) => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("all");
  const [input, setInput] = useState("");
  const [loaderToggle, setLoaderToggle] = useState(true);

  useEffect(() => {
    const fetchAllFavorites = async () => {
      const favorites = await axios.get("/api/" + endpoint);
      setLoaderToggle(false);
      setData(favorites.data);
    };
    fetchAllFavorites();
  }, []);

  const renderFavorites = () => {
    return data.map((recipe) => {
      return <RecipeCard key={recipe.id} data={recipe} />;
    });
  };

  console.log(option);
  console.log(input);
  return (
    <div>
      <h1>{title}</h1>
      <div className="filter">
        <SelectOption handleChange={(val) => setOption(val)} />
        <Input handleValue={(val) => setInput(val)} />
      </div>
      {loaderToggle ? <Spinner /> : renderFavorites()}
    </div>
  );
};

export default FavoritesPage;
