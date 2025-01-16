import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "./common/Navigation";
import { Pagination } from "./common/Pagination";
import MovieList from "./features/MovieList";

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <MovieList />
      <Pagination />
    </Provider>
  );
};
