import react from "react";
import "../style/HomePage.css";

export const HomePage = () => {
    return (
        <>
            <div className="homepage"></div>
            <div className="title">
                <h2>Translate Your Recipes</h2>
                <p>Visit this site, paste the recipe URL and you will get here the recipe translated into your language</p>
                <a href="https://www.iamcook.ru/showrecipe" rel="noreferrer" target="_blank">Original site</a>
            </div>
    </>
    );
}