import { ReactNode } from "react";

import { Login } from "../components/Login";
import { PublicPage } from "../components/PublicPage";
import { PrivatePage } from "../components/PrivatePage";
import { NotFound } from "../components/NotFound";

export interface IRoute {
  path: string;
  component: ReactNode;
  isPrivate: boolean;
}

const routes: IRoute[] = [
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
