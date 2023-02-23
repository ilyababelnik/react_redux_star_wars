import HomePage from './../conteiners/HomePage';
import PeoplePage from './../conteiners/PeoplePage';
import NotFoundPage from './../conteiners/NotFoundPage';
import PersonPage from './../conteiners/PersonPage';
import FavoritePage from './../conteiners/FavoritePage';
import SearchPage from './../conteiners/SearchPage';
import ErrorMessage from '../components/ErrorMessage';

let routesConfig = [
  {
    path: "/",
    element: HomePage
  },
  {
    path: "/people",
    element: PeoplePage
  },
  {
    path: "/people/:id",
    element: PersonPage
  },
  {
    path: "/favorite",
    element: FavoritePage
  },
  {
    path: "/search",
    element: SearchPage
  },
  {
    path: "/not-found",
    element: NotFoundPage
  },
  {
    path: "/fail",
    element: ErrorMessage
  },
  {
    path: "*",
    element: NotFoundPage
  }
];

export default routesConfig;