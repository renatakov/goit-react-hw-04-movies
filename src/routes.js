import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => {
      return import("./components/HomePage");
    }),
  },
  {
    path: "/movies",
    exact: true,
    component: lazy(() => {
      return import("./components/MoviesPage");
    }),
  },
    {
      path: "/movies/:movieId",
      exact: false,
      component: lazy(() => {
        return import("./components/MoviesDetailsPage");
      }),
  },
];
export default routes;