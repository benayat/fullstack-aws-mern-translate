import { Link } from "react-router-dom";
import "../style/Header.components.css";

const navItems = [{path:"/",iconClass:"fas fa-home", sectionName:"Home"},
                  {path:"/recipes",iconClass:"fas fa-utensils",sectionName:"Recipes"},
                  {path:"/favorites",iconClass:"fas fa-heart",sectionName:"My Recipes"},
                  {path:"/history",iconClass:"fas fa-book",sectionName:"Recipes History"}]


export const Header = () => {

  const createNavLinks = () => {
    return navItems.map((item,index) => {
      return (
         <li className="item" key={index}>
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
          <Link to="/">
          <div className="logo-photo"/> <h2 className="logo-text">Recipes Translator</h2>
          </Link>
        </div>
        <div className="items-wrapper">
            <ul>
            {createNavLinks()}
            </ul>
        </div>
        </div>
      </div>
  );
};
