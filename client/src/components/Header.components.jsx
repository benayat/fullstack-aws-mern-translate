import { Link } from "react-router-dom";
import "../style/Header.components.css";

const navItems = [{path:"/",iconClass:"fas fa-home", sectionName:"Home"},
                  {path:"/recipes",iconClass:"fas fa-utensils",sectionName:"Recipes"},
                  {path:"/myrecipes",iconClass:"fas fa-book",sectionName:"My Recipes"}]


export const Header = () => {

  const createLinks = () => {
    return navItems.map((item) => {
      return (
         <li className="item">
        <Link to={item.path}>
        <i className={item.iconClass}>{item.sectionName}</i>
        </Link>
      </li>
    )})
  }

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
            {createLinks()}
            </ul>
        </div>
        <div className="items-wrapper">
            <ul>
             
            </ul>
        </div>
      </div>
    </div>
  );
};
