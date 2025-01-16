import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import PeoplePage from "./features/PeoplePage";
import { toMovieList, toPeople } from "./routes";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovieList()}>
        <MovieList />
      </Route>
      <Route path={toPeople()}>
        <PeoplePage />
      </Route>
      <Route path="/">
        <Redirect to={toMovieList()} />
      </Route>
    </Switch>
  </HashRouter>
);
