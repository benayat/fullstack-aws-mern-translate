import { Link } from "react-router-dom";
import "./Header.components.css";

export const Header = () => {
  return (
    <div className="header bg-dark text-white">
      <div className="header-container">
        <div className="logo">
          <Link to="">
          <div className="logo-photo"/> <h2 className="logo-text">Recipes Translator</h2>
          </Link>
        </div>
        <div className="items-wrapper">
            <ul>
              <li className="item">
                <Link to="/">
                <i class="fas fa-home">Home</i> 
              </Link>
              </li>
              <li className="item">
                <Link to="/recipes">
              <i class="fas fa-utensils">Recipes</i> 
                </Link>
              </li>
              <li className="item">
                <Link to="/myrecipes">
              <i class="fas fa-book">My Recipes</i>
                </Link>
              </li>
            </ul>
        </div>
        <div className="items-wrapper">
            <ul>
              <li></li>
            </ul>
        </div>
      </div>
    </div>
  );
};
