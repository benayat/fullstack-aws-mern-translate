import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.components";
import FindRecipesPage from "./components/FindRecipesPage/FindRecipesPage";
// import FavoritesPage from "./components/FavoritesPage.components";
import { NotFoundPage } from "./components/NotFoundPage.components";
import "./App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/recipes" exact component={FindRecipesPage} />
          {/* <Route path="/favorites" exact component={FavoritesPage} /> */}
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
