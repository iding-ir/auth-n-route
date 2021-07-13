import { ReactNode } from "react";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PublicPage } from "../pages/PublicPage";
import { PrivatePage } from "../pages/PrivatePage";
import { NotFound } from "../pages/NotFound";

export interface IRoute {
  path: string;
  component: ReactNode;
  isPrivate: boolean;
  exact?: boolean;
}

const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/public-page",
    component: PublicPage,
    isPrivate: false,
  },
  {
    path: "/private-page",
    component: PrivatePage,
    isPrivate: true,
  },
  {
    path: "/*",
    component: NotFound,
    isPrivate: false,
  },
];

export default routes;
