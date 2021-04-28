import react from "react";
import "../style/HomePage.css";

export const HomePage = () => {
    return (
        <>
            <div className="homepage"></div>
            <div className="title">
                <h2 className="sketch-text">Translate Your Recipes</h2>
                <p> <span className="text-red">Visit</span> this site, <span className="text-green">Paste</span> the recipe URL and you will get here the recipe <span className="text-green">translated</span> into your <span className="text-red">Language</span></p>
                <a href="https://www.iamcook.ru/showrecipe" rel="noreferrer" target="_blank"><span className="text-xlarge border">Get Your Recipe Here</span></a>
            </div>
            
    </>
    );
}
