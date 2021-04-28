import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.components";
import { HomePage } from "./pages/HomePage";
import FindRecipesPage from "./pages/FindRecipesPage";
import FavoritesPage from "./components/FavoritesPage";
import { NotFoundPage } from "./pages/NotFoundPage.components";
import "./App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/recipes" exact component={FindRecipesPage} />
          <Route
            path="/favorites"
            exact
            component={() => <FavoritesPage title="Your Favo(u)rite recipes" />}
          />
          <Route
            path="/history"
            exact
            component={() => (
              <FavoritesPage title="Your Awesome Search History" />
            )}
          />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
